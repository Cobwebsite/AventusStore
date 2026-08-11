FROM composer:2 AS composer-bin

FROM php:8.4-cli-bookworm AS vendor

RUN apt-get update \
    && apt-get install -y --no-install-recommends git unzip \
    && rm -rf /var/lib/apt/lists/*

COPY --from=composer-bin /usr/bin/composer /usr/bin/composer

WORKDIR /app

COPY composer.json composer.lock ./
RUN composer install \
    --no-dev \
    --no-interaction \
    --no-progress \
    --prefer-dist \
    --no-scripts

COPY . .
RUN composer dump-autoload \
    --classmap-authoritative \
    --no-dev \
    --no-interaction

FROM php:8.4-apache-bookworm

RUN apt-get update \
    && apt-get install -y --no-install-recommends libzip-dev unzip \
    && docker-php-ext-install -j"$(nproc)" opcache pdo_mysql zip \
    && a2enmod headers rewrite \
    && rm -rf /var/lib/apt/lists/*

ENV APACHE_DOCUMENT_ROOT=/var/www/html/public

COPY docker/apache-vhost.conf /etc/apache2/sites-available/000-default.conf
COPY docker/apache-servername.conf /etc/apache2/conf-available/servername.conf
COPY docker/authorization.conf /etc/apache2/conf-available/authorization.conf
COPY docker/php-production.ini /usr/local/etc/php/conf.d/99-production.ini
COPY --from=vendor /app /var/www/html

RUN mkdir -p \
        storage/app/private \
        storage/app/public \
        storage/framework/cache/data \
        storage/framework/sessions \
        storage/framework/views \
        storage/logs \
    && ln -s ../storage/app/public public/storage \
    && chown -R www-data:www-data storage bootstrap/cache \
    && a2enconf servername \
    && a2enconf authorization


WORKDIR /var/www/html

EXPOSE 80

HEALTHCHECK --interval=30s --timeout=5s --start-period=20s --retries=3 \
    CMD php -r '$$s=@file_get_contents("http://127.0.0.1/up"); exit($$s===false ? 1 : 0);'

CMD ["apache2-foreground"]
