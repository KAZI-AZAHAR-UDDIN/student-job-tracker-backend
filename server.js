const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const jobRoutes = require('./routes/jobs');

// Load environment variables from .env file
dotenv.config();

const app = express();
const port = process.env.PORT || 5001;

// Middleware
app.use(cors());
app.use(express.json()); 


// MongoDB connection
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('MongoDB connected successfully'))
  .catch((err) => console.log('MongoDB connection error:', err));

// Routes
app.use('/api/jobs', jobRoutes);  

// Root endpoint
app.get('/', (req, res) => {
  res.send('Hello World from Student Job Tracker Backend!');
});



// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});