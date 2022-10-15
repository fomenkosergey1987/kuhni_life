<?php

    define("CONTACT_FORM", 'fsn_87@mail.com');

    function ValidateEmail($value){
        $regex = '/^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i';

        if($value == '') { 
            return false;
        } else {
            $string = preg_replace($regex, '', $value);
        }

        return empty($string) ? true : false;
    }


    $post = (!empty($_POST)) ? true : false;

    if($post){

        $wish = stripslashes($_POST['wish']);
        $email = stripslashes($_POST['email']);
        $subject = 'Заявка';
        $error = '';    
        $message = '
            <html>
                    <head>
                            <title>отзывы и пожелания</title>
                    </head>
                    <body>
                            <p>Полбзователь: '.$email.'</p>

                            <p>Оставил следующий отзыв : '.$wish.'</p>
                    </body>
            </html>';

        if (!ValidateEmail($email)){
            $error = 'Email введен неправильно!<br/>';
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