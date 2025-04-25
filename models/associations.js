// models/Association.js
const Auteur = require('./auteur');
const Article = require('./article');
const Categorie = require('./categorie');
const Tag = require('./tag');
const ProfilAuteur = require('./profilAuteur');
const Adresse = require('./Adresse');
const Avoir = require('./avoir');
const EstTagué = require('./estTagué');
const sequelize = require('../config/sequelize'); // Importez l'instance sequelize

function associateModels() {
  // Relation 1-N (Auteur -> Article)
  Auteur.hasMany(Article, {
    foreignKey: 'Id_auteur',
    as: 'articles',
  });
  Article.belongsTo(Auteur, {
    foreignKey: 'Id_auteur',
    as: 'auteur',
  });

  // Relation N-N (Article -> Categorie)
  Article.belongsToMany(Categorie, {
    through: Avoir,
    foreignKey: 'id_article',
    otherKey: 'id_categorie',
    as: 'categories',
    timestamps: false,
  });
  Categorie.belongsToMany(Article, {
    through: Avoir,
    foreignKey: 'id_categorie',
    otherKey: 'id_article',
    as: 'articles',
    timestamps: false,
  });

  // Relation N-N (Article -> Tag)
  Article.belongsToMany(Tag, {
    through: EstTagué,
    foreignKey: 'id_article',
    otherKey: 'id_tag',
    as: 'tags',
    timestamps: false,
  });
  Tag.belongsToMany(Article, {
    through: EstTagué,
    foreignKey: 'id_tag',
    otherKey: 'id_article',
    as: 'articles',
    timestamps: false,
  });

  // Relation 1-1 (Auteur -> ProfilAuteur)
  Auteur.hasOne(ProfilAuteur, {
    foreignKey: 'Id_auteur',
    as: 'profil',
  });
  ProfilAuteur.belongsTo(Auteur, {
    foreignKey: 'Id_auteur',
    as: 'auteur',
  });

  // Relation 1-1 (Auteur -> Adresse)
  Auteur.hasOne(Adresse, {
    foreignKey: 'Id_auteur',
    as: 'adresse',
  });
  Adresse.belongsTo(Auteur, {
    foreignKey: 'Id_auteur',
    as: 'auteur',
  });
}

module.exports = associateModels;