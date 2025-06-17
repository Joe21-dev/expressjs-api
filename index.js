const express = require('express');
const app = express();
const productRoutes = require('./routes/products');
const customMiddleware = require('./middleware/customMiddleware');
const errorMiddleware = require('./middleware/errorMiddleware');

// Built-in Middleware
app.use(express.json());

// Custom Middleware
app.use(customMiddleware);

// Routes
app.use('/api/products', productRoutes);

// Error Middleware (must come after routes)
app.use(errorMiddleware);

// Start Server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
