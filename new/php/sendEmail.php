<?php
  $to      = 'giorgio.ziu.alo@gmail.com';
  $subject = 'Portfolio message';
  $message = $_POST["message"];

  mail($to, $subject, $message);
?>
