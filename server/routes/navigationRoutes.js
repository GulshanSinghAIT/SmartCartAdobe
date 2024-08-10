const express = require('express');
const { getNavigationPath } = require('../controllers/navigationController.jsx');
const { authenticateUser } = require('../middleware/authMiddleware.jsx');

const router = express.Router();

router.get('/:destination', authenticateUser, getNavigationPath);

module.exports = router;
