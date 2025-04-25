const Categorie = require("../models/Categorie");
const Article = require("../models/Article");

class CategorieService {
  async getAllCategories() {
    return await Categorie.findAll({
      include: [{ model: Article, as: "articles" }],
      attributes: ['id_categorie', 'nomCategorie', 'descriptionCategorie']
    });
  }

  async createCategorie(data) {
    return await Categorie.create(data);
  }

  async getCategorieById(id) {
    return await Categorie.findByPk(id, {
      include: [{ model: Article, as: "articles" }],
      attributes: ['id_categorie', 'nomCategorie', 'descriptionCategorie']
    });
  }

  async updateCategorie(id, data) {
    return await Categorie.update(data, { where: { id_categorie: id } });
  }

  async deleteCategorie(id) {
    return await Categorie.destroy({ where: { id_categorie: id } });
  }
}

module.exports = new CategorieService();