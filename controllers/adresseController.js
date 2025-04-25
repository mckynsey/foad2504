const AdresseService = require("../services/adresseService");

class AdresseController {
  async getAllAdresses(req, res) {
    try {
      const adresses = await AdresseService.getAllAdresses();
      res.json(adresses);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Erreur lors de la récupération des adresses" });
    }
  }

  async createAdresse(req, res) {
    try {
      const adresse = await AdresseService.createAdresse(req.body);
      res.status(201).json(adresse);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Erreur lors de la création de l'adresse" });
    }
  }

  async getAdresseById(req, res) {
    try {
      const adresse = await AdresseService.getAdresseById(req.params.id);
      if (!adresse) {
        return res.status(404).json({ error: "Adresse non trouvée" });
      }
      res.json(adresse);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Erreur lors de la récupération de l'adresse" });
    }
  }

  async updateAdresse(req, res) {
    try {
      const [updated] = await AdresseService.updateAdresse(req.params.id, req.body);
      if (!updated) {
        return res.status(404).json({ error: "Adresse non trouvée" });
      }
      const updatedAdresse = await AdresseService.getAdresseById(req.params.id);
      res.json(updatedAdresse);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Erreur lors de la mise à jour de l'adresse" });
    }
  }

  async deleteAdresse(req, res) {
    try {
      const deleted = await AdresseService.deleteAdresse(req.params.id);
      if (!deleted) {
        return res.status(404).json({ error: "Adresse non trouvée" });
      }
      res.status(204).send();
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Erreur lors de la suppression de l'adresse" });
    }
  }
}

module.exports = new AdresseController();