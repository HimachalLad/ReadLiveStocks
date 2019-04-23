const express = require('express');
const router = express.Router();
const UserController = require('../controllers/users');
const checkAuth = require('../authMiddleWare/check-auth');

router.post('/signup', UserController.user_signup);

router.post('/login', UserController.user_login);

router.get('/', checkAuth, UserController.get_all_users);

router.delete('/:userId', checkAuth, UserController.delete_user);

module.exports = router;
