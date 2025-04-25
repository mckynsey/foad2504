const Article = require("../models/article");
const Auteur = require("../models/auteur");
const Categorie = require("../models/categories");
const Tag = require("../models/tag");

class ArticleService {
  async getAllArticles() {
    return await Article.findAll({
      include: [
        { model: Auteur, as: "auteur" },
        { model: Categorie, as: "categories" },
        { model: Tag, as: "tags" }
      ],
      attributes: ['id_article', 'titreArticle', 'datePublication', 'Id_auteur']
    });
  }

  async createArticle(data) {
    return await Article.create(data);
  }

  async getArticleById(id) {
    return await Article.findByPk(id, {
      include: [
        { model: Auteur, as: "auteur" },
        { model: Categorie, as: "categories" },
        { model: Tag, as: "tags" }
      ],
      attributes: ['id_article', 'titreArticle', 'datePublication', 'Id_auteur']
    });
  }

  async updateArticle(id, data) {
    return await Article.update(data, { where: { id_article: id } });
  }

  async deleteArticle(id) {
    return await Article.destroy({ where: { id_article: id } });
  }
}

module.exports = new ArticleService();