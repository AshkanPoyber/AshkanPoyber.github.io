<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $mobile = $_POST['mobile'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];

    $to = 'AshkanDalili1381@gmail.com'; // ایمیل شما
    $headers = 'From: ' . $email . "\r\n" .
               'Reply-To: ' . $email . "\r\n" .
               'X-Mailer: PHP/' . phpversion();

    $fullMessage = "Name: $name\n";
    $fullMessage .= "Mobile: $mobile\n\n";
    $fullMessage .= "Message:\n$message";

    if (mail($to, $subject, $fullMessage, $headers)) {
        echo 'Email sent successfully!';
    } else {
        echo 'Failed to send email.';
    }
}
?>
