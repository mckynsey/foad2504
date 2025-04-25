const express = require('express');
const router = express.Router();
const AuteurController = require('../controllers/auteurController');

router.get("/", AuteurController.getAllAuteurs);
router.post("/", AuteurController.createAuteur);
router.get("/:id", AuteurController.getAuteurById);
router.put("/:id", AuteurController.updateAuteur);
router.delete("/:id", AuteurController.deleteAuteur);

module.exports = router;