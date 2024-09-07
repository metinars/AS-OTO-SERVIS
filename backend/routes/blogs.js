const express = require('express');
const router = express.Router();
const {
  createBlog,
  allBlog,
  detailBlog,
  editBlog,
  deleteBlog,
  searchBlogs,
} = require('../controllers/blog');
const { authenticationMid } = require('../middleware/authMiddleware');

router.post('/new', authenticationMid, createBlog);
router.get('/getAll', allBlog);
router.get('/:titleUrl', detailBlog);
router.delete('/delete/:id', authenticationMid, deleteBlog);
router.put('/edit/:titleUrl', authenticationMid, editBlog);
router.get('/search/:title', searchBlogs);

module.exports = router;
