const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.set("views", "./views");

// Servir les fichiers statiques (CSS, images, JS...)
app.use(express.static("public"));



// Routes
app.get("/", (req, res) => res.render("home"));
app.get("/propos", (req, res) => res.render("propos"));
app.get("/prestation", (req, res) => res.render("prestation"));
app.get("/experiences", (req, res) => res.render("experiences"));
app.get("/contact", (req, res) => res.render("contact"));

// Lancer le serveur
app.listen(3000, () => {
    console.log("Serveur en ligne sur http://localhost:3000");
});
