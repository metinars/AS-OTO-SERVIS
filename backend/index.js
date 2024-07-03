const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const users = require('./routes/users');
const cloudinary = require('cloudinary').v2;

dotenv.config();

const port = process.env.PORT || 4000;

app.use(express.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', process.env.CLIENT_URL);
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PUT, PATCH, DELETE'
  );
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-Requested-With, Content-Type, Authorization'
  );
  next();
});

app.use(bodyParser.json());
app.use(cors());
app.get('/', (req, res) => res.json({ message: 'Welcome to our API' }));
app.use('/user', users);
app.use((req, res) =>
  res.status(404).json({ success: false, message: 'Not Found' })
);

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const startServer = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log('MongoDB Connected');

    app.listen(port, () => {
      console.log('Backend server is running on port ' + port);
    });
  } catch (error) {
    console.error('Error starting server:', error);
  }
};

startServer();
