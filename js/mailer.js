const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail',  // Vous pouvez changer le service (par exemple, 'hotmail', 'outlook', etc.)
    auth: {
        user: 'votre-email@gmail.com',  // Votre adresse email
        pass: 'votre-mot-de-passe'  // Votre mot de passe (ou un mot de passe spécifique si vous utilisez Gmail avec la vérification en 2 étapes)
    }
});

function sendReservationEmail(userEmail, reservationDetails) {
    const mailOptions = {
        from: 'votre-email@gmail.com',
        to: [userEmail, 'votre-email@gmail.com'], // Envoyer l'email à l'utilisateur et à vous-même
        subject: 'Confirmation de votre réservation',
        text: `
            Bonjour,

            Vous avez réservé un service. Voici les détails de votre réservation :
            
            Service : ${reservationDetails.service}
            Date : ${reservationDetails.date}
            Heure : ${reservationDetails.time}
            Nombre de participants : ${reservationDetails.participants}
            Total : ${reservationDetails.total}€

            Merci de votre réservation. Nous avons hâte de vous accueillir !
        `
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log('Erreur lors de l\'envoi de l\'email:', error);
        } else {
            console.log('Email envoyé : ' + info.response);
        }
    });
}

module.exports = sendReservationEmail;
