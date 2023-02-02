<?php
// Genera un boundary
$mail_boundary = "=_NextPart_" . md5(uniqid(time()));

$to = "giorgio.ziu.alo@gmail.com";
$subject = "ziugiorgio.it";
$sender = $_POST["sender"];
if ($sender == "") {
  $sender = "anonymous";
}

$headers = "From: $sender\n";
$headers .= "MIME-Version: 1.0\n";
$headers .= "Content-Type: multipart/alternative;\n\tboundary=\"$mail_boundary\"\n";
$headers .= "X-Mailer: PHP " . phpversion();

$message = $_POST["message"];

// Imposta il Return-Path (funziona solo su hosting Windows)
ini_set("sendmail_from", $sender);

// Invia il messaggio, il quinto parametro "-f$sender" imposta il Return-Path su hosting Linux
if (mail($to, $subject, $message, $headers, "-f$sender")) {
  header("./email_success.html");
} else {
  header("./email_fail.html");
}

?>
