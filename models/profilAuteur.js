const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/sequelize");
const Auteur = require("./auteur"); // Import pour la référence

class ProfilAuteur extends Model {}

ProfilAuteur.init(
  {
    id_profil: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
      field: 'id_profil'
    },
    bioProfil: {
      type: DataTypes.STRING(255),
      field: 'bioProfil'
    },
    photoProfil: {
      type: DataTypes.STRING(255),
      field: 'photoProfil'
    },
    Id_auteur: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true,
      field: 'Id_auteur',
      references: {
        model: Auteur,
        key: 'Id_auteur'
      }
    },
  },
  {
    sequelize,
    modelName: "ProfilAuteur",
    tableName: "ProfilAuteur",
    timestamps: false,
  }
);

// Les associations seront définies dans models/Association.js

module.exports = ProfilAuteur;