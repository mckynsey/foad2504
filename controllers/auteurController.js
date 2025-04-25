const AuteurService = require("../services/auteurService");

class AuteurController {
  async getAllAuteurs(req, res) {
    try {
      const auteurs = await AuteurService.getAllAuteurs();
      res.json(auteurs);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Erreur lors de la récupération des auteurs" });
    }
  }

  async createAuteur(req, res) {
    try {
      const auteur = await AuteurService.createAuteur(req.body);
      res.status(201).json(auteur);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Erreur lors de la création de l'auteur" });
    }
  }

  async getAuteurById(req, res) {
    try {
      const auteur = await AuteurService.getAuteurById(req.params.id);
      if (!auteur) {
        return res.status(404).json({ error: "Auteur non trouvé" });
      }
      res.json(auteur);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Erreur lors de la récupération de l'auteur" });
    }
  }

  async updateAuteur(req, res) {
    try {
      const [updated] = await AuteurService.updateAuteur(req.params.id, req.body);
      if (!updated) {
        return res.status(404).json({ error: "Auteur non trouvé" });
      }
      const updatedAuteur = await AuteurService.getAuteurById(req.params.id);
      res.json(updatedAuteur);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Erreur lors de la mise à jour de l'auteur" });
    }
  }

  async deleteAuteur(req, res) {
    try {
      const deleted = await AuteurService.deleteAuteur(req.params.id);
      if (!deleted) {
        return res.status(404).json({ error: "Auteur non trouvé" });
      }
      res.status(204).send();
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Erreur lors de la suppression de l'auteur" });
    }
  }
}

module.exports = new AuteurController();