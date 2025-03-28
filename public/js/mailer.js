const nodemailer = require('nodemailer');

// Créez un transporteur avec votre configuration (par exemple pour Gmail)
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'your-email@gmail.com', // Remplacez par votre adresse e-mail
    pass: 'your-email-password',   // Remplacez par votre mot de passe
  },
});

// Fonction d'envoi d'un e-mail
function sendMail(to, subject, text) {
  const mailOptions = {
    from: 'your-email@gmail.com', // Votre adresse e-mail
    to,                           // L'adresse e-mail du destinataire
    subject,                      // Sujet de l'e-mail
    text,                         // Corps du message
  };

  // Envoi de l'e-mail
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log('Erreur:', error);
    }
    console.log('E-mail envoyé:', info.response);
  });
}

module.exports = sendMail;
