const Cart = require('../models/Cart');

exports.getCartItems = async (req, res) => {
  try {
    const cartItems = await Cart.find({ userId: req.user.id });
    res.json(cartItems);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.addToCart = async (req, res) => {
  const { productId, quantity } = req.body;
  try {
    const cartItem = new Cart({ userId: req.user.id, productId, quantity });
    await cartItem.save();
    res.status(201).json({ message: 'Item added to cart' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.removeFromCart = async (req, res) => {
  const { productId } = req.params;
  try {
    await Cart.deleteOne({ userId: req.user.id, productId });
    res.json({ message: 'Item removed from cart' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};
