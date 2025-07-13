const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');
const suggestionRoutes = require('./routes/suggesstionRoute');
const authRoutes = require('./routes/authRoutes');
dotenv.config();

const app = express();
app.use(
  cors({
    origin: 'http://localhost:5173',
    credentials: true
  })
);
app.use(cookieParser());
app.use(express.json());
app.use('/api/auth', authRoutes);
app.use('/api/suggestions', suggestionRoutes);

module.exports = app;