// routes/services.js

const express = require('express');
const router = express.Router();

// Définir une route pour '/services' dans ce fichier (si tu veux gérer plus de services ici)
router.get('/services', (req, res) => {
    res.render('services', { title: 'Nos Services - Services Routes' });
});

module.exports = router;


