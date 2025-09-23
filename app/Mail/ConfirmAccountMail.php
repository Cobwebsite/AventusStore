<?php

namespace App\Mail;

use App\Mail\Generic\GenericMail;
use App\Mail\Generic\MailData;
use App\Models\User;

class ConfirmAccountMail extends GenericMail
{
    public function __construct(
        protected User $user
    ) {
        parent::__construct();
    }

    protected function defineMailData(): MailData
    {
        $data = new MailData();
        $data->subject = 'Confirm your account';
        $data->view = 'emails.confirm_account_mail';
        return $data;
    }

    protected function defineContentData(): array
    {
        return [
            "user" => $this->user,
        ];
    }
}
