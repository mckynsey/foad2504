const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/sequelize");

class Categorie extends Model {}

Categorie.init(
  {
    id_categorie: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
      field: 'id_categorie'
    },
    nomCategorie: {
      type: DataTypes.STRING(50),
      allowNull: false,
      unique: true,
      field: 'nomCategorie'
    },
    descriptionCategorie: {
      type: DataTypes.STRING(255),
      field: 'descriptionCategorie'
    },
  },
  {
    sequelize,
    modelName: "Categorie",
    tableName: "Categorie",
    timestamps: false,
  }
);


module.exports = Categorie;