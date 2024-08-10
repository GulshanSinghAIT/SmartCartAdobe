const Product = require('../models/Product');

exports.getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.getProductDetail = async (req, res) => {
  const { productId } = req.params;
  try {
    const product = await Product.findById(productId);
    res.json(product);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};
