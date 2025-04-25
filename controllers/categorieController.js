const CategorieService = require("../services/categorieService");

class CategorieController {
  async getAllCategories(req, res) {
    try {
      const categories = await CategorieService.getAllCategories();
      res.json(categories);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Erreur lors de la récupération des catégories" });
    }
  }

  async createCategorie(req, res) {
    try {
      const categorie = await CategorieService.createCategorie(req.body);
      res.status(201).json(categorie);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Erreur lors de la création de la catégorie" });
    }
  }

  async getCategorieById(req, res) {
    try {
      const categorie = await CategorieService.getCategorieById(req.params.id);
      if (!categorie) {
        return res.status(404).json({ error: "Catégorie non trouvée" });
      }
      res.json(categorie);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Erreur lors de la récupération de la catégorie" });
    }
  }

  async updateCategorie(req, res) {
    try {
      const [updated] = await CategorieService.updateCategorie(req.params.id, req.body);
      if (!updated) {
        return res.status(404).json({ error: "Catégorie non trouvée" });
      }
      const updatedCategorie = await CategorieService.getCategorieById(req.params.id);
      res.json(updatedCategorie);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Erreur lors de la mise à jour de la catégorie" });
    }
  }

  async deleteCategorie(req, res) {
    try {
      const deleted = await CategorieService.deleteCategorie(req.params.id);
      if (!deleted) {
        return res.status(404).json({ error: "Catégorie non trouvée" });
      }
      res.status(204).send();
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Erreur lors de la suppression de la catégorie" });
    }
  }
}

module.exports = new CategorieController();