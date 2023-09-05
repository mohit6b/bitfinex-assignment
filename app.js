const express = require('express');
const app = express();
const config = require('./config/config');

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(helmet());

// Routes
const userRoutes = require('./src/routes/userRoutes');
app.use('/api/users', userRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal Server Error' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


console.log(`Server is running on port ${config.port}`);
console.log(`Database host: ${config.db.host}`);
console.log(`Secret key: ${config.secretKey}`);

