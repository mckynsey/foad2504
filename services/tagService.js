const Tag = require("../models/tag");
const Article = require("../models/Article");

class TagService {
  async getAllTags() {
    return await Tag.findAll({
      include: [{ model: Article, as: "articles" }],
      attributes: ['id_tag', 'nomTag']
    });
  }

  async createTag(data) {
    return await Tag.create(data);
  }

  async getTagById(id) {
    return await Tag.findByPk(id, {
      include: [{ model: Article, as: "articles" }],
      attributes: ['id_tag', 'nomTag']
    });
  }

  async updateTag(id, data) {
    return await Tag.update(data, { where: { id_tag: id } });
  }

  async deleteTag(id) {
    return await Tag.destroy({ where: { id_tag: id } });
  }
}

module.exports = new TagService();