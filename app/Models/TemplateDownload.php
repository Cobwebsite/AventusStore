<?php

namespace App\Models;

use Aventus\Laraventus\Models\AventusModel;
use DateTime;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

/**
 * @property int $template_id
 * @property string $version
 * @property DateTime $date
 * @property int $downloads
 * @property Template $template
 */
class TemplateDownload extends AventusModel
{

    public function template(): BelongsTo
    {
        return $this->belongsTo(Template::class, "template_id");
    }

    
}
