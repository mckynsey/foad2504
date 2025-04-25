const ProfilAuteur = require("../models/profilAuteur");
const Auteur = require("../models/auteur");

class ProfilAuteurService {
  async getAllProfilsAuteur() {
    return await ProfilAuteur.findAll({
      include: [{ model: Auteur, as: "auteur" }],
      attributes: ['id_profil', 'bioProfil', 'photoProfil', 'Id_auteur']
    });
  }

  async createProfilAuteur(data) {
    return await ProfilAuteur.create(data);
  }

  async getProfilAuteurById(id) {
    return await ProfilAuteur.findByPk(id, {
      include: [{ model: Auteur, as: "auteur" }],
      attributes: ['id_profil', 'bioProfil', 'photoProfil', 'Id_auteur']
    });
  }

  async updateProfilAuteur(id, data) {
    return await ProfilAuteur.update(data, { where: { id_profil: id } });
  }

  async deleteProfilAuteur(id) {
    return await ProfilAuteur.destroy({ where: { id_profil: id } });
  }
}

module.exports = new ProfilAuteurService();