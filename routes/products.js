const express = require('express');
const router = express.Router();

// GET /api/products
router.get('/', (req, res) => {
  res.status(200).json({
    success: true,
    products: [
      { id: 1, name: 'Laptop', price: 1000 },
      { id: 2, name: 'Phone', price: 500 }
    ]
  });
});

// Example error trigger (optional)
router.get('/error', (req, res, next) => {
  const err = new Error('Simulated error');
  err.status = 500;
  next(err);
});

module.exports = router;
