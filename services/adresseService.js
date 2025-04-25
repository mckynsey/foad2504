const Adresse = require("../models/Adresse");
const Auteur = require("../models/auteur");

class AdresseService {
  async getAllAdresses() {
    return await Adresse.findAll({
      include: [{ model: Auteur, as: "auteur" }],
      attributes: ['id_adresse', 'rueAdresse', 'villeAdresse', 'Id_auteur']
    });
  }

  async createAdresse(data) {
    return await Adresse.create(data);
  }

  async getAdresseById(id) {
    return await Adresse.findByPk(id, {
      include: [{ model: Auteur, as: "auteur" }],
      attributes: ['id_adresse', 'rueAdresse', 'villeAdresse', 'Id_auteur']
    });
  }

  async updateAdresse(id, data) {
    return await Adresse.update(data, { where: { id_adresse: id } });
  }

  async deleteAdresse(id) {
    return await Adresse.destroy({ where: { id_adresse: id } });
  }
}

module.exports = new AdresseService();