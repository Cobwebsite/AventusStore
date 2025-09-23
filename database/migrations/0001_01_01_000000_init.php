<?php

use App\Models\Role;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {

        Schema::create('personal_access_tokens', function (Blueprint $table) {
            $table->id();
            $table->morphs('tokenable');
            $table->text('name');
            $table->string('token', 64)->unique();
            $table->text('abilities')->nullable();
            $table->timestamp('last_used_at')->nullable();
            $table->timestamp('expires_at')->nullable()->index();
            $table->timestamps();
        });


        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->string('username')->unique();
            $table->string('email')->unique();
            $table->string('bio')->nullable();
            $table->string('password');
            $table->boolean('verified')->default(0);
            $table->string('picture')->nullable();
            $table->string('token_action')->nullable();
            $table->dateTime('created_date')->useCurrent();
        });

        Schema::create('organizations', function (Blueprint $table) {
            $table->id();
            $table->string('name')->unique();
            $table->string('bio')->nullable();
            $table->string('picture')->nullable();
        });

        Schema::create('roles', function (Blueprint $table) {
            $table->id();
            $table->string('name')->unique();
        });

        Schema::create('organization_users', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained("users")->cascadeOnDelete();
            $table->foreignId('organization_id')->constrained("organizations")->cascadeOnDelete();
            $table->foreignId('role_id')->constrained("roles");
        });


        Schema::create('tags', function (Blueprint $table) {
            $table->id();
            $table->string('name');
        });

        Schema::create('packages', function (Blueprint $table) {
            $table->id();
            $table->string('name')->unique();
            $table->string('description');
            $table->string('readme')->default('');
            $table->string('version');
            $table->integer('downloads')->default(0);
            $table->dateTime('release_date');
            $table->foreignId('user_id')->nullable()->constrained("users");
            $table->foreignId('organization_id')->nullable()->constrained("organizations");
        });

        Schema::create('package_downloads', function (Blueprint $table) {
            $table->id();
            $table->foreignId('package_id')->constrained("packages")->cascadeOnDelete();
            $table->string('version');
            $table->dateTime('date');
            $table->integer('downloads');
        });

        Schema::create('package_versions', function (Blueprint $table) {
            $table->id();
            $table->foreignId('package_id')->constrained("packages")->cascadeOnDelete();
            $table->string('version');
            $table->dateTime('date');
        });

        Schema::create('package_tags', function (Blueprint $table) {
            $table->foreignId('package_id')->constrained("packages")->cascadeOnDelete();
            $table->foreignId('tag_id')->constrained("tags")->cascadeOnDelete();
        });

        Schema::create('templates', function (Blueprint $table) {
            $table->id();
            $table->string('name')->unique();
            $table->string('description');
            $table->string('readme')->default('');
            $table->string('version');
            $table->integer('downloads')->default(0);
            $table->boolean('is_project');
            $table->dateTime('release_date');
            $table->foreignId('user_id')->nullable()->constrained("users");
            $table->foreignId('organization_id')->nullable()->constrained("organizations");
        });

        Schema::create('template_downloads', function (Blueprint $table) {
            $table->id();
            $table->foreignId('template_id')->constrained("templates")->cascadeOnDelete();
            $table->string('version');
            $table->dateTime('date');
            $table->integer('downloads');
        });


        Schema::create('template_versions', function (Blueprint $table) {
            $table->id();
            $table->foreignId('template_id')->constrained("templates")->cascadeOnDelete();
            $table->string('version');
            $table->dateTime('date');
        });

        Schema::create('template_tags', function (Blueprint $table) {
            $table->foreignId('template_id')->constrained("templates")->cascadeOnDelete();
            $table->foreignId('tag_id')->constrained("tags")->cascadeOnDelete();
        });

        Schema::create('remote_accesses', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained("users")->cascadeOnDelete();
            $table->string('token');
            $table->string('machine_id');
            $table->string('machine_name');
        });


        $roles = ["Admin", "Dev"];
        foreach ($roles as $role) {
            $r = new Role();
            $r->name = $role;
            $r->save();
        }
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void {}
};
