const express = require('express');

const router = express.Router();

const {
  createWork,
  allWorks,
  detailWork,
  editWork,
  deleteWork,
  searchWorks,
} = require('../controllers/workController');

const { authenticationMid } = require('../middleware/authMiddleware');

router.post('/new', authenticationMid, createWork);

router.get('/getAll', allWorks);

router.get('/:titleUrl', detailWork);

router.delete('/delete/:id', authenticationMid, deleteWork);

router.put('/edit/:titleUrl', authenticationMid, editWork);

router.get('/search/:title', searchWorks);

module.exports = router;