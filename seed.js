require('dotenv').config();
const sequelize = require('./config/sequelize');
const Auteur = require('./models/auteur');
const Categorie = require('./models/Categorie');
const Tag = require('./models/tag');
const Article = require('./models/article');
const Avoir = require('./models/Avoir');
const EstTagué = require('./models/EstTagué');

async function seedDatabase() {
  try {
    await sequelize.authenticate();
    console.log('Connexion à la base de données réussie pour le seed.');

    await sequelize.query('DROP TABLE IF EXISTS `est_tagué`;');
    await sequelize.query('DROP TABLE IF EXISTS `avoir`;');
    await sequelize.query('DROP TABLE IF EXISTS `Adresse`;');
    await sequelize.query('DROP TABLE IF EXISTS `ProfilAuteur`;');
    await sequelize.query('DROP TABLE IF EXISTS `Article`;');
    await sequelize.query('DROP TABLE IF EXISTS `Tag`;');
    await sequelize.query('DROP TABLE IF EXISTS `Categorie`;');
    await sequelize.query('DROP TABLE IF EXISTS `Auteur`;');

    await sequelize.sync({ force: false });
    console.log('Base de données synchronisée.');

    const auteur1 = await Auteur.create({ nomAuteur: 'John', prenom: 'Doe', email: 'john.doe@example.com' });
    const auteur2 = await Auteur.create({ nomAuteur: 'Jane', prenom: 'Smith', email: 'jane.smith@example.com' });

    const categorie1 = await Categorie.create({ nomCategorie: 'Science-fiction', descriptionCategorie: 'Articles sur la science-fiction' });
    const categorie2 = await Categorie.create({ nomCategorie: 'Fantasy', descriptionCategorie: 'Articles sur la fantasy' });

    const tag1 = await Tag.create({ nomTag: 'espace' });
    const tag2 = await Tag.create({ nomTag: 'magie' });
    const tag3 = await Tag.create({ nomTag: 'aventure' });

    const article1 = await Article.create({ titreArticle: 'Le voyage interstellaire', datePublication: new Date(), Id_auteur: auteur1.Id_auteur });
    const article2 = await Article.create({ titreArticle: 'Les dragons et les sorciers', datePublication: new Date(), Id_auteur: auteur2.Id_auteur });
    const article3 = await Article.create({ titreArticle: 'Aventures en terre inconnue', datePublication: new Date(), Id_auteur: auteur1.Id_auteur });

    await article1.addCategories([categorie1]);
    await article2.addCategories([categorie2]);
    await article3.addCategories([categorie1, categorie2]);

    await article1.addTags([tag1, tag3]);
    await article2.addTags([tag2, tag3]);
    await article3.addTags([tag3]);

    console.log('Données de test insérées avec succès.');
  } catch (error) {
    console.error('Erreur lors de l\'alimentation de la base de données :', error);
  } finally {
    await sequelize.close();
  }
}

seedDatabase();