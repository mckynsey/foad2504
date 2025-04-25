const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/sequelize");
const Auteur = require("./auteur"); // Import pour la référence
const Categorie = require("./categories"); // Import pour la relation ManyToMany
const Tag = require("./tag"); // Import pour la relation ManyToMany

class Article extends Model {}

Article.init(
  {
    id_article: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
      field: 'id_article'
    },
    titreArticle: {
      type: DataTypes.STRING(50),
      allowNull: false,
      field: 'titreArticle'
    },
    datePublication: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'datePublication'
    },
    Id_auteur: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'Id_auteur',
      references: {
        model: Auteur,
        key: 'Id_auteur'
      }
    },
  },
  {
    sequelize,
    modelName: "Article",
    tableName: "Article",
    timestamps: false,
  }
);


module.exports = Article;