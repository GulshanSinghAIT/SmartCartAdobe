const express = require('express');
const { getRecommendations } = require('../controllers/recommendationController.jsx');
const { authenticateUser } = require('../middleware/authMiddleware.jsx');

const router = express.Router();

router.get('/', authenticateUser, getRecommendations);

module.exports = router;
