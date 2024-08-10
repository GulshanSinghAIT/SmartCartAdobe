const express = require('express');
const { checkout } = require('../controllers/checkoutController.jsx');
const { authenticateUser } = require('../middleware/authMiddleware.jsx');

const router = express.Router();

router.post('/', authenticateUser, checkout);

module.exports = router;
