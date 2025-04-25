const TagService = require("../services/tagService");

class TagController {
  async getAllTags(req, res) {
    try {
      const tags = await TagService.getAllTags();
      res.json(tags);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Erreur lors de la récupération des tags" });
    }
  }

  async createTag(req, res) {
    try {
      const tag = await TagService.createTag(req.body);
      res.status(201).json(tag);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Erreur lors de la création du tag" });
    }
  }

  async getTagById(req, res) {
    try {
      const tag = await TagService.getTagById(req.params.id);
      if (!tag) {
        return res.status(404).json({ error: "Tag non trouvé" });
      }
      res.json(tag);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Erreur lors de la récupération du tag" });
    }
  }

  async updateTag(req, res) {
    try {
      const [updated] = await TagService.updateTag(req.params.id, req.body);
      if (!updated) {
        return res.status(404).json({ error: "Tag non trouvé" });
      }
      const updatedTag = await TagService.getTagById(req.params.id);
      res.json(updatedTag);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Erreur lors de la mise à jour du tag" });
    }
  }

  async deleteTag(req, res) {
    try {
      const deleted = await TagService.deleteTag(req.params.id);
      if (!deleted) {
        return res.status(404).json({ error: "Tag non trouvé" });
      }
      res.status(204).send();
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Erreur lors de la suppression du tag" });
    }
  }
}

module.exports = new TagController();