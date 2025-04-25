const express = require('express');
const router = express.Router();
const ProfilAuteurController = require('../controllers/profilAuteurController');

router.get("/", ProfilAuteurController.getAllProfilsAuteur);
router.post("/", ProfilAuteurController.createProfilAuteur);
router.get("/:id", ProfilAuteurController.getProfilAuteurById);
router.put("/:id", ProfilAuteurController.updateProfilAuteur);
router.delete("/:id", ProfilAuteurController.deleteProfilAuteur);

module.exports = router;