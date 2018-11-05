<?php


$to = 'boleklech@gmail.com';
$subject = 'Temat Wiadomości';
$message = "wiadomość tekstowa";
$header = "From: boleklech@gmail.com" . "\r\n" .
			'reply to: boleklech@gmail.com' . "\r\n" .
			'X-mailer: PHP' .phpversion();
 






mail($to, $subject, $message, $header);