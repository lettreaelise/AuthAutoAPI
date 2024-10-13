const express = require('express');
const router = express.Router();
const { register, login, getUser } = require('../controllers/authController');
const { authMiddleware } = require('../controllers/authController');


router.post('/register', register);
router.post('/login', login);
router.get('/user', authMiddleware, getUser);

module.exports = router;
