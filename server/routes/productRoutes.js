const express = require('express');
const { getProducts, getProductDetail } = require('../controllers/productController.jsx');

const router = express.Router();

router.get('/', getProducts);
router.get('/:productId', getProductDetail);

module.exports = router;
