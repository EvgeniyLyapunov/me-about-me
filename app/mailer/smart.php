<?php 

$_POST = json_decode(file_get_contents('php://input'), true);

$name = $_POST['name'];
$contact = $_POST['contact'];
$message = $_POST['message'];

require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

// $mail->SMTPDebug = 3;                               // Enable verbose debug output

$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'smtp.mail.ru';  // Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'little-wing@list.ru';                 // Наш логин
$mail->Password = 'ZqEYz7TxzXyptL5tZmLm';                           // Наш пароль от ящика
$mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 465;                                    // TCP port to connect to
 
$mail->setFrom('little-wing@list.ru', 'feedback from my site');   // От кого письмо 
$mail->addAddress('lyapunovcs@gmail.com');     // Add a recipient
//$mail->addAddress('ellen@example.com');               // Name is optional
//$mail->addReplyTo('info@example.com', 'Information');
//$mail->addCC('cc@example.com');
//$mail->addBCC('bcc@example.com');
//$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
//$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name
$mail->isHTML(true);                                  // Set email format to HTML

$mail->Subject = 'Feedback';
$mail->Body    = '
		Пользователь оставил данные <br> 
	Имя: ' . $name . ' <br>
	Контакт: ' . $contact . '<br>
	Сообщение: ' . $message . '';

if(!$mail->send()) {
	echo json_encode(['status' => 'Ошибка сервера, попробуйте ещё раз.']);
    return false;
} else {
		echo json_encode([
			'status' => 'ok',
		]);
    return true;
}

?>