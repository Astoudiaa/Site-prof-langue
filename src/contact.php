<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require __DIR__ . '/PHPMailer/src/Exception.php';
require __DIR__ . '/PHPMailer/src/PHPMailer.php';
require __DIR__ . '/PHPMailer/src/SMTP.php';

// Vérifier si la requête est bien en POST
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Récupérer les données du formulaire
    $fullname = htmlspecialchars($_POST["fullname"]);
    $email = filter_var($_POST["email"], FILTER_SANITIZE_EMAIL);
    $subject = htmlspecialchars($_POST["subject"]);
    $message = htmlspecialchars($_POST["message"]);

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo json_encode(["success" => false, "message" => "Email invalide."]);
        exit;
    }

    $mail = new PHPMailer(true);
    
    try {
        // CONFIGURATION DU SERVEUR SMTP
        $mail->isSMTP();
        $mail->Host = 'smtp.gmail.com';
        $mail->SMTPAuth = true;
        $mail->Username = 'drfle75@gmail.com'; // Ton e-mail
        $mail->Password = '1234'; // ⚠️ Mot de passe d'application, pas ton vrai mot de passe
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port = 587;

        // CONFIGURATION DU MAIL
        $mail->setFrom($email, $fullname);
        $mail->addAddress('drfle75@gmail.com'); // L'adresse qui reçoit le message
        $mail->addReplyTo($email, $fullname);

        // CONTENU DU MAIL
        $mail->isHTML(true);
        $mail->Subject = $subject;
        $mail->Body = nl2br($message);

        // ENVOI DU MAIL
        if ($mail->send()) {
            echo json_encode(["success" => true, "message" => "E-mail envoyé avec succès !"]);
        } else {
            echo json_encode(["success" => false, "message" => "Erreur lors de l'envoi du mail."]);
        }
    } catch (Exception $e) {
        echo json_encode(["success" => false, "message" => "Erreur: " . $mail->ErrorInfo]);
    }
} else {
    echo json_encode(["success" => false, "message" => "Méthode non autorisée."]);
}
?>
