const Auteur = require("../models/auteur");
const Article = require("../models/article");
const ProfilAuteur = require("../models/ProfilAuteur");
const Adresse = require("../models/Adresse");

class AuteurService {
  async getAllAuteurs() {
    return await Auteur.findAll({
      include: [
        {
          model: Article,
          as: "articles",
        },
        {
          model: ProfilAuteur,
          as: "profil",
        },
        {
          model: Adresse,
          as: "adresse",
        },
      ],
      attributes: ['Id_auteur', 'nomAuteur', 'prenom', 'email']
    });
  }

  async createAuteur(data) {
    return await Auteur.create(data);
  }

  async getAuteurById(id) {
    return await Auteur.findByPk(id, {
      include: [
        {
          model: Article,
          as: "articles",
        },
        {
          model: ProfilAuteur,
          as: "profil",
        },
        {
          model: Adresse,
          as: "adresse",
        },
      ],
      attributes: ['Id_auteur', 'nomAuteur', 'prenom', 'email']
    });
  }

  async updateAuteur(id, data) {
    return await Auteur.update(data, { where: { Id_auteur: id } });
  }

  async deleteAuteur(id) {
    return await Auteur.destroy({ where: { Id_auteur: id } });
  }
}

module.exports = new AuteurService();