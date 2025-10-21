const express = require('express');
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Define port
const PORT = process.env.PORT || 3000;

// Basic route
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to Form Builder API' });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
