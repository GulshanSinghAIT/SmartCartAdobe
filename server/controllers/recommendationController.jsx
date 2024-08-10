const Recommendation = require('../models/Recommendation');

exports.getRecommendations = async (req, res) => {
  try {
    const recommendations = await Recommendation.find({ userId: req.user.id });
    res.json(recommendations);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};
