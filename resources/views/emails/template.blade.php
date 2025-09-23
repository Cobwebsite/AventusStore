<?php

/** @var App\Mail\Generic\MailData $mailData */

?>
<html lang="en-GB" style="height:100%" height="100%">

<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
	<meta content="width=device-width, initial-scale=1.0" name="viewport">
	<title>Aventus Store</title>
	<style media="all" type="text/css">
@media all {
  .btn-primary table td:hover {
    background-color: #1f76f0ff !important;
  }

  .btn-primary a:hover {
    background-color: #1f76f0ff !important;
    border-color: #1f76f0ff !important;
  }
}
@media all {
  .ExternalClass {
    width: 100%;
  }

  .ExternalClass,
.ExternalClass p,
.ExternalClass span,
.ExternalClass font,
.ExternalClass td,
.ExternalClass div {
    line-height: 100%;
  }

  .apple-link a {
    color: inherit !important;
    font-family: inherit !important;
    font-size: inherit !important;
    font-weight: inherit !important;
    line-height: inherit !important;
    text-decoration: none !important;
  }

  #MessageViewBody a {
    color: inherit;
    text-decoration: none;
    font-size: inherit;
    font-family: inherit;
    font-weight: inherit;
    line-height: inherit;
  }
}
</style>

</head><body style="font-family: Helvetica, sans-serif; -webkit-font-smoothing: antialiased; font-size: 16px; line-height: 1.3; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; background-color: #f4f5f6; margin: 0; padding: 0;">
	<table role="presentation" border="0" cellpadding="0" cellspacing="0" class="body" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #f4f5f6; width: 100%;" width="100%" bgcolor="#f4f5f6">
		<!-- <tr>
			<td colspan="3" style="font-family: Helvetica, sans-serif; font-size: 16px; vertical-align: top;" valign="top">
				<table role="presentation" border="0" cellpadding="0" cellspacing="0" class="header" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #0f172a; width: 100%; padding: 24px;" width="100%" bgcolor="#0f172a">
					<tr>
						<td style="font-family: Helvetica, sans-serif; font-size: 16px; vertical-align: middle; height: 30px; line-height: 30px;" height="30" valign="middle">
							<svg class="icon" xmlns="http://www.w3.org/2000/svg" height="30" fill="none" viewbox="0 0 24 24" strokewidth="1.5" stroke="#e5540e" style="float: left;">
								<path strokelinecap="round" strokelinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"/>
							</svg>
							<span class="logo-text" style="color: #ffffff; margin-left: 16px; font-size: 18px; letter-spacing: 0.5px;">AventusJs Store</span>
						</td>
					</tr>

				</table>
			</td>
		</tr> -->
		<tr>
			<td style="font-family: Helvetica, sans-serif; font-size: 16px; vertical-align: top;" valign="top">&nbsp;</td>
			<td class="container" style="font-family: Helvetica, sans-serif; font-size: 16px; vertical-align: top; max-width: <?= $mailData->bodyWidth ?>; padding: 0; padding-top: 24px; width: 100%; margin: 0 auto;" width="100%" valign="top">
				<div class="content" style="box-sizing: border-box; display: block; margin: 0 auto; max-width: <?= $mailData->bodyWidth ?>; padding: 0;">

					<table role="presentation" border="0" cellpadding="0" cellspacing="0" class="main" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; background: #ffffff; border: 1px solid #eaebed; border-radius: 16px; width: 100%;" width="100%">

						<!-- START MAIN CONTENT AREA -->
						<tr>
							<td class="wrapper" style="font-family: Helvetica, sans-serif; font-size: 16px; vertical-align: top; box-sizing: border-box; padding: 24px;" valign="top">
								$content$
							</td>
						</tr>

						<!-- END MAIN CONTENT AREA -->
					</table>
				</div>
			</td>
			<td style="font-family: Helvetica, sans-serif; font-size: 16px; vertical-align: top;" valign="top">&nbsp;</td>
		</tr>
	</table>
</body>




</html>