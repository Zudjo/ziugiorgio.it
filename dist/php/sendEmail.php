<?php
// Genera un boundary
$mail_boundary = "=_NextPart_" . md5(uniqid(time()));

$to = "giorgio.ziu.alo@gmail.com";
$sender = $_POST["sender"];
if ($sender == "") {
  $sender = "anonymous";
}
$subject = "ziugiorgio.it";
$message = $_POST["message"];

$headers = "From: $sender <postmaster@ziugiorgio.it>\n";
$headers .= "MIME-Version: 1.0\n";
$headers .= "Content-Type: multipart/alternative;\n\tboundary=\"$mail_boundary\"\n";
$headers .= "X-Mailer: PHP " . phpversion();

// Imposta il Return-Path (funziona solo su hosting Windows)
ini_set("sendmail_from", $sender);

// Invia il messaggio, il quinto parametro "-f$sender" imposta il Return-Path su hosting Linux
if (mail($to, $subject, $message, $headers, "-f$sender")) {
  header("Location: ../email_success.html");
} else {
  header("Location: ../email_fail.html");
}
?>
