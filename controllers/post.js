const PostSchema = require('../models/post.js');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const createPost = async (req, res) => {
  try {
    const newPost = await PostSchema.create(req.body);
    res.status(201).json({
      newPost,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const getPost = async (req, res) => {
  try {
    const getPost = await PostSchema.find();
    res.status(200).json({
      getPost,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const getDetail = async (req, res) => {
  try {
    const { id } = req.params;
    const detailPost = await PostSchema.findById(id);
    res.status(200).json({
      detailPost,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const getUpdate = async (req, res) => {
  try {
    const { id } = req.params;
    const updatePost = await PostSchema.findByIdAndUpdate(id, req.body, { new: true });
    res.status(200).json({
      updatePost,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const deletePost = async (req, res) => {
  try {
    const { id } = req.params;
    await PostSchema.findByIdAndRemove(id);
    res.status(201).json({
      message: 'Silme işleminiz başarılıdır....',
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const searchPost = async (req, res) => {
  try {
    const { search, tag } = req.query;
    const title = new RegExp(search, 'i');

    const posts = await PostSchema.find({ $or: [{ title }], tag: { $in: tag.splite(',') } });
    res.status(200).json({
      posts,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = { createPost, getPost, getDetail, getUpdate, deletePost, searchPost };
