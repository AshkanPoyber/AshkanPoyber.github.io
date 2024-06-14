<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $name = $_POST['name'];
  $email = $_POST['email'];
  $message = $_POST['message'];

  $to = "ashkandalili1381@gmail.com"; // آدرس ایمیل شما
  $subject = "New Message from Website";
  $body = "Name: $name\nEmail: $email\n\nMessage:\n$message";
  $headers = "From: $email";

  if (mail($to, $subject, $body, $headers)) {
    echo "Message sent successfully!";
  } else {
    echo "Failed to send message.";
  }
}
?>
