const express = require('express');
const { getPost, createPost, getDetail, getUpdate, deletePost, searchPost } = require('../controllers/post.js');
const router = express.Router();

router.get('/getPost',getPost);
router.post('/createPost',createPost);
router.get('/getDetail/:id',getDetail);
router.patch('/getUpdate/:id',getUpdate);
router.delete('/deletePost/:id',deletePost);
router.get('/searchPost',searchPost);

module.exports=router
