const express = require('express');
const { getCartItems, addToCart, removeFromCart } = require('../controllers/cartController.jsx');
const { authenticateUser } = require('../middleware/authMiddleware.jsx');

const router = express.Router();

router.get('/', authenticateUser, getCartItems);
router.post('/', authenticateUser, addToCart);
router.delete('/:productId', authenticateUser, removeFromCart);

module.exports = router;
