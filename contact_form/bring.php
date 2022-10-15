<?php

    define("CONTACT_FORM", 'fsn_87@gmail.com');


    function ValidatePhone($value){
        $regex = "/^[0-9]{3}-[0-9]{4}-[0-9]{4}$/";

        if($value == '') {
            return false;
        } else {
            return true;
        }

        return empty($string) ? true : false;
    }


    $post = (!empty($_POST)) ? true : false;

    if($post){


        $phone = stripslashes($_POST['phone']);

        $subject = 'Заявка';
        $error = '';    
        $message = '
            <html>
                    <head>
                            <title>Заявка "перезвони мне"</title>
                    </head>
                    <body>

                            <p>Телефон : '.$phone.'</p>

                    </body>
            </html>';

        if (!ValidatePhone($phone)){
            $error = 'Телефон введен неправильно!<br/>';
        }

        if(!$error){
            $mail = mail(CONTACT_FORM, $subject, $message,
                 "From: ".$name." <".$email.">\r\n"
                ."Reply-To: ".$email."\r\n"
                ."Content-type: text/html; charset=utf-8 \r\n"
                ."X-Mailer: PHP/" . phpversion());

            if($mail){
                echo 'OK';
            }
        }else{
            echo '<div class="bg-danger">'.$error.'</div>';
        }

    }
?>