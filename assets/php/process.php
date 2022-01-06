<?php

// Import PHPMailer classes into the global namespace
// These must be at the top of your script, not inside a function
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

// Load Composer's autoloader
require 'PHPMailer/src/Exception.php';
require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';



$site_mail = "atif11jutt@gmail.com";

$site_name ="Contact | Virtual Learning Experience";

if($_SERVER['REQUEST_METHOD'] == "POST"){


    function checkValidate($var_value , $variable){
        if (!empty($variable)){
            $variable = '<tr>
                    
            <td align="center" valign="top">
                '.$var_value.'
            </td>
            <td align="center" valign="top">
                '.$variable.'
            </td>
    
            </tr>';
        }
        else
            $variable = '';

        return $variable;
    }



    $mail = new PHPMailer(true);

    //Server settings
    $mail->SMTPDebug = 0;
    $mail->isSMTP();                                            // Send using SMTP
    $mail->Host       = 'smtp.gmail.com';                    // Set the SMTP server to send through
    $mail->SMTPAuth   = true;                                   // Enable SMTP authentication
    $mail->Username   = 'atif.phpmailer@gmail.com';                     // SMTP username
    $mail->Password   = 'phpmailer';                               // SMTP password
    $mail->SMTPSecure = 'STARTTLS';         // Enable TLS encryption; `PHPMailer::ENCRYPTION_SMTPS` encouraged
    $mail->Port       = 587;    
 




    if(isset($_POST["name"])){

        $NAME = $_POST["name"];
        $EMAIL = $_POST["email"];
        $MESSAGE = $_POST["message"];


        $message = "
            <html>
                <head>
                    <title>$site_name</title>
                    <style>
                        body{
                            padding: 10px;
                            margin: 0;
                            font-family: sans-serif;
                            font-size:1.25rem;
                        }
                        body>div{
                            display: block;
                            border 2px solid rgb(100,15,200);
                            background-color: transparent;
                            padding: 20px;
                        }
                        
                    </style>
                </head>
                <body>
                <h1 style='padding: 20px; text-align: center'>".$NAME." just contacted you</h1>
                <table border='0' cellpadding='0' cellspacing='0' height='100%' width='100%'>
                <tr>
                    <td align='center' valign='top'>
                        <table border='1' cellpadding='20' cellspacing='0' width='100%' style='max-width:600px;background: #d3f0fb;border-color: #0abbff;color: #252525;font-size: 1.5rem;' >
                
                        ".checkValidate( 'Name: ' , $NAME)."
                        ".checkValidate( 'Email: ' , $EMAIL)."
                        ".checkValidate( 'Message: ' , $MESSAGE)."
                        
                        </table>
                        </td>
                    </tr>
                </table>
        ";

        //Recipients
        $mail->setFrom($EMAIL, $NAME);
        $mail->addAddress($site_mail);     // Add a recipient

        // Content
        $mail->isHTML(true);                                  // Set email format to HTML
        $mail->Subject = $NAME." ".$site_name;
        $mail->Body    = $message;


        if($mail->Send()){
            echo "Sent Successfully";
        }else{
            echo "There was an error";
        }


    }







}