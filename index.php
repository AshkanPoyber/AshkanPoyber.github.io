<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $name = htmlspecialchars($_POST['name']);
  $email = htmlspecialchars($_POST['email']);
  $mobile = htmlspecialchars($_POST['mobile']);
  $subject = htmlspecialchars($_POST['subject']);
  $message = htmlspecialchars($_POST['message']);

  $to = "ashkandalili1381@gmail.com"; 
  $email_subject = "New Message from Website: $subject";
  $email_body = "Name: $name\n";
  $email_body .= "Email: $email\n";
  $email_body .= "Mobile: $mobile\n\n";
  $email_body .= "Message:\n$message";
  $headers = "From: $email";

  if (mail($to, $email_subject, $email_body, $headers)) {
    echo "Message sent successfully!";
  } else {
    echo "Failed to send message.";
  }
}
?>