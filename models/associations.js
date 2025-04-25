// models/Association.js
const Auteur = require('./auteur');
const Article = require('./article');
const Categorie = require('./categories'); // Correction de la casse
const Tag = require('./tag');
const ProfilAuteur = require('./profilAuteur');
const Adresse = require('./Adresse');
const sequelize = require('../config/sequelize');

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
    through: 'avoir', // Utilisez le nom de la table directement
    foreignKey: 'id_article',
    otherKey: 'id_categorie',
    as: 'categories',
    timestamps: false,
  });
  Categorie.belongsToMany(Article, {
    through: 'avoir', // Utilisez le nom de la table directement
    foreignKey: 'id_categorie',
    otherKey: 'id_article',
    as: 'articles',
    timestamps: false,
  });

  // Relation N-N (Article -> Tag)
  Article.belongsToMany(Tag, {
    through: 'est_tagué', // Utilisez le nom de la table directement
    foreignKey: 'id_article',
    otherKey: 'id_tag',
    as: 'tags',
    timestamps: false,
  });
  Tag.belongsToMany(Article, {
    through: 'est_tagué', // Utilisez le nom de la table directement
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