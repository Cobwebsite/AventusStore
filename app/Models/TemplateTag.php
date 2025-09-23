<?php

namespace App\Models;

use Aventus\Laraventus\Models\AventusModel;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

/**
 * @property int $template_id
 * @property int $tag_id
 * @property Tag $tag
 * @property Template $template
 */
class TemplateTag extends AventusModel
{

    public function template(): BelongsTo
    {
        return $this->belongsTo(Template::class, "template_id");
    }

    public function tag(): BelongsTo
    {
        return $this->belongsTo(Tag::class, "tag_id");
    }
}
