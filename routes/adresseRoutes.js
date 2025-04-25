const express = require('express');
const router = express.Router();
const AdresseController = require('../controllers/adresseController');

router.get("/", AdresseController.getAllAdresses);
router.post("/", AdresseController.createAdresse);
router.get("/:id", AdresseController.getAdresseById);
router.put("/:id", AdresseController.updateAdresse);
router.delete("/:id", AdresseController.deleteAdresse);

module.exports = router;