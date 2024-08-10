const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const authRoutes = require('./routes/authRoutes');
const cartRoutes = require('./routes/cartRoutes');
const checkoutRoutes = require('./routes/checkoutRoutes');
const navigationRoutes = require('./routes/navigationRoutes');
const productRoutes = require('./routes/productRoutes');
const recommendationRoutes = require('./routes/recommendationRoutes');
const errorMiddleware = require('./middleware/errorMiddleware');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Middleware
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/cart', cartRoutes);
app.use('/api/checkout', checkoutRoutes);
app.use('/api/navigation', navigationRoutes);
app.use('/api/products', productRoutes);
app.use('/api/recommendations', recommendationRoutes);

// Error middleware
app.use(errorMiddleware);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
