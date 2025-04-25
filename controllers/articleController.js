const ArticleService = require("../services/articleService");

class ArticleController {
  async getAllArticles(req, res) {
    try {
      const articles = await ArticleService.getAllArticles();
      res.json(articles);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Erreur lors de la récupération des articles" });
    }
  }

  async createArticle(req, res) {
    try {
      const article = await ArticleService.createArticle(req.body);
      res.status(201).json(article);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Erreur lors de la création de l'article" });
    }
  }

  async getArticleById(req, res) {
    try {
      const article = await ArticleService.getArticleById(req.params.id);
      if (!article) {
        return res.status(404).json({ error: "Article non trouvé" });
      }
      res.json(article);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Erreur lors de la récupération de l'article" });
    }
  }

  async updateArticle(req, res) {
    try {
      const [updated] = await ArticleService.updateArticle(req.params.id, req.body);
      if (!updated) {
        return res.status(404).json({ error: "Article non trouvé" });
      }
      const updatedArticle = await ArticleService.getArticleById(req.params.id);
      res.json(updatedArticle);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Erreur lors de la mise à jour de l'article" });
    }
  }

  async deleteArticle(req, res) {
    try {
      const deleted = await ArticleService.deleteArticle(req.params.id);
      if (!deleted) {
        return res.status(404).json({ error: "Article non trouvé" });
      }
      res.status(204).send();
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Erreur lors de la suppression de l'article" });
    }
  }
}

module.exports = new ArticleController();