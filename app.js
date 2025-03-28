const express = require('express');
const path = require('path');
const { Client } = require('pg');
const cookieParser = require("cookie-parser");
const fs = require("fs");
require('dotenv').config();

const app = express();

// Configuration de PostgreSQL avec les variables d'environnement
const client = new Client({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT
});

// Connexion à PostgreSQL
client.connect()
    .then(() => console.log('✅ Connecté à PostgreSQL'))
    .catch(err => console.error('❌ Erreur de connexion à PostgreSQL:', err));

// Configuration Express
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Gestion des langues
app.use((req, res, next) => {
    let lang = req.cookies.lang || "fr";
    if (!["fr", "en", "es", "pt"].includes(lang)) lang = "fr";

    try {
        const translations = JSON.parse(fs.readFileSync(`./locales/${lang}.json`, "utf8"));
        res.locals.t = translations;
    } catch (error) {
        console.error("Erreur de lecture du fichier de langue:", error);
        res.locals.t = {};
    }
    next();
});

// Route pour changer la langue
app.get("/lang/:lang", (req, res) => {
    const lang = req.params.lang;
    if (["fr", "en", "es", "pt"].includes(lang)) {
        res.cookie("lang", lang, { maxAge: 900000, httpOnly: true });
    }
    res.redirect("back");
});

// Page d'accueil
app.get("/", (req, res) => {
    res.render("home", { page: "home" });
});

// Route pour traiter le formulaire de contact
app.post('/contact', (req, res) => {
    const { name, email, phone, subject, message } = req.body;
    console.log("📩 Nouveau message reçu :", { name, email, phone, subject, message });

    const query = `INSERT INTO messages (fullname, email, phone, subject, message) VALUES ($1, $2, $3, $4, $5)`;
    const values = [name, email, phone, subject, message];

    client.query(query, values)
        .then(() => {
            res.send("✅ Message bien reçu !");
        })
        .catch(err => {
            console.error('❌ Erreur d\'insertion:', err.stack);
            res.send("❌ Une erreur est survenue, veuillez réessayer plus tard.");
        });
});

// Routes des pages
const pages = ["home", "about", "services", "reservation", "experiences", "petit-dejeuner", "contact", "cours-individuel"];
pages.forEach(page => {
    app.get(`/${page}`, (req, res) => res.render(page, { page }));
});

// Lancement du serveur
app.listen(3000, () => {
    console.log('🚀 Serveur lancé sur http://localhost:3000');
});