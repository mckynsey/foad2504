const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/sequelize");
const Auteur = require("./auteur"); // Import pour la référence

class Adresse extends Model {}

Adresse.init(
  {
    id_adresse: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
      field: 'id_adresse'
    },
    rueAdresse: {
      type: DataTypes.STRING(255),
      allowNull: false,
      field: 'rueAdresse'
    },
    villeAdresse: {
      type: DataTypes.STRING(50),
      allowNull: false,
      field: 'villeAdresse'
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
    modelName: "Adresse",
    tableName: "Adresse",
    timestamps: false,
  }
);


module.exports = Adresse;