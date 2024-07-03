const router = require('express').Router();
const user = require('../controllers/user');

router.post('/register', user.register);
router.post('/login', user.login);
// router.post('/login');

module.exports = router;
