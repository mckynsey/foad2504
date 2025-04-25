const express = require("express");
// on importe express

require("dotenv").config();
// on importe le fichier .env

// require("./models/Association");

const app = express();
// on declare l'application express

app.use(express.json());
// on declare le middleware pour parser le json

app.get("/", (req, res) => {
  res.send("taurais du commencé plus tot !");
});
// on declare la route racine
const auteurRoute = require("./routes/auteurRoutes");
const categorieRoute = require("./routes/categorieRoutes");
const tagRoute = require("./routes/tagRoutes");
const profilAuteurRoute = require("./routes/profilAuteurRoutes");
const adresseRoute = require("./routes/adresseRoutes");
const articleRoute = require("./routes/articleRoutes");

app.use("/auteurs", auteurRoute);
app.use("/categories", categorieRoute);
app.use("/tags", tagRoute);
app.use("/profils", profilAuteurRoute);
app.use("/adresses", adresseRoute); 
app.use("/articles", articleRoute);



app.use((req, res) => {
    res.status(404).json({ message: "Route non trouvé" });
  });
  
  app.listen(process.env.PORT, () => {
    console.log(
      `✅ Votre serveur est lancé sur http://127.0.0.1:${process.env.PORT}`
    );
  });