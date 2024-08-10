const Cart = require('../models/Cart');
const PurchaseHistory = require('../models/PurchaseHistory');

exports.checkout = async (req, res) => {
  try {
    const cartItems = await Cart.find({ userId: req.user.id });

    // Logic to process payment and complete the order
    // Here, we'll just simulate the purchase completion
    await PurchaseHistory.insertMany(cartItems);
    await Cart.deleteMany({ userId: req.user.id });

    res.json({ message: 'Checkout completed successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};
