const mongoose = require('mongoose');

const RecommendationSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  products: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product' }],
});

module.exports = mongoose.model('Recommendation', RecommendationSchema);
