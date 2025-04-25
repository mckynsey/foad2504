const express = require('express');
const router = express.Router();
const TagController = require('../controllers/tagController');

router.get("/", TagController.getAllTags);
router.post("/", TagController.createTag);
router.get("/:id", TagController.getTagById);
router.put("/:id", TagController.updateTag);
router.delete("/:id", TagController.deleteTag);

module.exports = router;