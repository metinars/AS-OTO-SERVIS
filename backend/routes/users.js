const router = require('express').Router();
const user = require('../controllers/user');
const multerConfig = require('../config/multerConfig');

router.post('/register', multerConfig.single('avatar'), user.register);
router.post('/login', user.login);
router.post('/forgotPassword', user.forgotPassword);
router.post('/reset/:token', user.resetPassword);
router.get('/userGetAll', user.userGetAll);
router.post('/changePassword', user.changePassword);

module.exports = router;
