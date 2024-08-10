const mongoose = require('mongoose');

const PurchaseHistorySchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
  quantity: { type: Number, default: 1 },
  purchasedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('PurchaseHistory', PurchaseHistorySchema);
