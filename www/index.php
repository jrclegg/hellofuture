<?php

session_start();

$nameErr = $emailErr = "";
$name = $email = "";

if (!isset($_POST["submit"])) {
    if (empty($_POST["name"])) {
        $nameErr = "Name is required";
    } else {
        $name = ($_POST["name"]);
        // check if name only contains letters and whitespace
        if (!preg_match("/^[A-Za-z][A-Za-záéíóú']*$/", $name)) {
            $nameErr = "Only letters and white space allowed";
        }
    }

    if (empty($_POST["email"])) {
        $emailErr = "Email is required";
    } else {
        $email = ($_POST["email"]);

        if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
            $emailErr = "Invalid email format";
        }

        $EmailAddress = 'jonathan@hellofutu.re';
        $EmailSubject = 'New Contact Form Message';
        $mailheader = "From: " . $_POST["email"] . "\r\n";
        $mailheader .= "Reply-To: " . $_POST["email"] . "\r\n";
        $mailheader .= "Content-type: text/html; charset=iso-8859-1\r\n";
        $MESSAGE_BODY = "Name: " . $_POST["name"] . "\r\n";
        $MESSAGE_BODY .= "Email: " . $_POST["email"] . "\r\n";
        $MESSAGE_BODY .= "Message: " . nl2br($_POST["message"]) . "\r\n";
        mail($EmailAddress, $EmailSubject, $MESSAGE_BODY, $mailheader) or die ("Failure");
    }
}





