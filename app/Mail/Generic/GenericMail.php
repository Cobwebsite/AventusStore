<?php

namespace App\Mail\Generic;

use Exception;
use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\View;
use Illuminate\Mail\Mailables\Address;

abstract class GenericMail extends Mailable
{
    use Queueable, SerializesModels;
    private MailData $mailData;
    private array $data;
    public ?string $addressFrom = null;

    /**
     * Create a new message instance.
     */
    public function __construct()
    {
        $this->mailData = $this->defineMailData();
    }

    /**
     * Get the message envelope.
     */
    public function envelope(): Envelope
    {
        $this->mailData = $this->defineMailData();
        if ($this->addressFrom == null) {
            $from = new Address('noreply@aventusjs.com', 'Aventus Store');
        } else {
            $from = $this->addressFrom;
        }
        return new Envelope(
            from: $from,
            subject: $this->mailData->subject,
        );
    }

    /**
     * Get the message content definition.
     */
    public function content(): Content
    {
        $template = $this->getHTMLString();
        return new Content(
            htmlString: $template
        );
    }

    public function getHTMLString()
    {
        try {
            $this->mailData = $this->defineMailData();
            $this->data = $this->defineContentData();
            $template = View::make('emails.template', ["mailData" => $this->mailData])->render();
            $content = View::make($this->mailData->view, $this->data)->render();
            $template = str_replace('$content$', $content, $template);
            return $template;
        } catch (Exception $e) {
            echo $e->getMessage();
            throw $e;
        }
    }

    /**
     * Get the attachments for the message.
     *
     * @return array<int, \Illuminate\Mail\Mailables\Attachment>
     */
    public function attachments(): array
    {
        return [];
    }

    /**
     * Definie les parametres génériques de l'email
     *
     * @return MailData
     */
    protected abstract function defineMailData(): MailData;
    /**
     * Defini le contenu qui sera injecté dans le template de l'email
     *
     * @return array
     */
    protected abstract function defineContentData(): array;
}
