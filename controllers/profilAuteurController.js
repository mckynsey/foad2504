const ProfilAuteurService = require("../services/ProfilAuteurService");

class ProfilAuteurController {
  async getAllProfilsAuteur(req, res) {
    try {
      const profils = await ProfilAuteurService.getAllProfilsAuteur();
      res.json(profils);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Erreur lors de la récupération des profils d'auteur" });
    }
  }

  async createProfilAuteur(req, res) {
    try {
      const profil = await ProfilAuteurService.createProfilAuteur(req.body);
      res.status(201).json(profil);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Erreur lors de la création du profil d'auteur" });
    }
  }

  async getProfilAuteurById(req, res) {
    try {
      const profil = await ProfilAuteurService.getProfilAuteurById(req.params.id);
      if (!profil) {
        return res.status(404).json({ error: "Profil d'auteur non trouvé" });
      }
      res.json(profil);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Erreur lors de la récupération du profil d'auteur" });
    }
  }

  async updateProfilAuteur(req, res) {
    try {
      const [updated] = await ProfilAuteurService.updateProfilAuteur(req.params.id, req.body);
      if (!updated) {
        return res.status(404).json({ error: "Profil d'auteur non trouvé" });
      }
      const updatedProfil = await ProfilAuteurService.getProfilAuteurById(req.params.id);
      res.json(updatedProfil);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Erreur lors de la mise à jour du profil d'auteur" });
    }
  }

  async deleteProfilAuteur(req, res) {
    try {
      const deleted = await ProfilAuteurService.deleteProfilAuteur(req.params.id);
      if (!deleted) {
        return res.status(404).json({ error: "Profil d'auteur non trouvé" });
      }
      res.status(204).send();
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Erreur lors de la suppression du profil d'auteur" });
    }
  }
}

module.exports = new ProfilAuteurController();