<?php

use App\Models\User;

/** @var User $user */
?>


<p style="margin:0 0 32px;font-size:18px;color:#333">Hey <?= $user->username ?>! 👋</p>
<p style="margin:0 0 8px;font-size:18px;color:#333">Welcome aboard 🚀</p>
<p style="margin:0 0 32px;font-size:18px;color:#333">Hit the button below to confirm your email:</p>
<table role="presentation" border="0" cellpadding="0" cellspacing="0" class="btn btn-primary" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; box-sizing: border-box; width: 100%; min-width: 100%;" width="100%">
    <tbody>
        <tr>
            <td align="left" style="font-family: Helvetica, sans-serif; font-size: 16px; vertical-align: top; padding-bottom: 16px;" valign="top">
                <table role="presentation" border="0" cellpadding="0" cellspacing="0" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: auto;">
                    <tbody>
                        <tr>
                            <td style="font-family: Helvetica, sans-serif; font-size: 16px; vertical-align: top; border-radius: 4px; text-align: center; background-color: #0867ec;" valign="top" align="center" bgcolor="#0867ec"><a href="http://127.0.0.1:8000/api/validate/<?= $user->token_action ?>" target="_blank" style="border: solid 2px #0867ec; border-radius: 4px; box-sizing: border-box; cursor: pointer; display: inline-block; font-size: 16px; font-weight: bold; margin: 0; padding: 12px 24px; text-decoration: none; text-transform: capitalize; background-color: #0867ec; border-color: #0867ec; color: #ffffff;">Confirm email</a> </td>
                        </tr>
                    </tbody>
                </table>
            </td>
        </tr>
    </tbody>
</table>
<p style="margin:16px 0 8px;font-size:18px;color:#333">Easy peasy.</p>
<p style="margin:0 0 32px;font-size:18px;color:#333">Can’t wait to have you with us! 🙌</p>
<p style="margin:0 0 8px;font-size:18px;color:#333">Cheers,</p>
<p style="margin:0 0 16px;font-size:18px;color:#333">The AventusJs Store Crew</p>