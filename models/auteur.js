const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/sequelize");

class Auteur extends Model {}

Auteur.init(
  {
    Id_auteur: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
      field: 'Id_auteur'
    },
    nomAuteur: {
      type: DataTypes.STRING(50),
      allowNull: false,
      field: 'nomAuteur'
    },
    prenom: {
      type: DataTypes.STRING(50),
      allowNull: false,
      field: 'prenom'
    },
    email: {
      type: DataTypes.STRING(50),
      allowNull: false,
      unique: true,
      field: 'email'
    },
  },
  {
    sequelize,
    modelName: "Auteur",
    tableName: "Auteur",
    timestamps: false,
  }
);


module.exports = Auteur;