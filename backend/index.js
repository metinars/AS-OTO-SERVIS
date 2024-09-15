const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const users = require('./routes/users');
const blogs = require('./routes/blogs');
const cloudinary = require('cloudinary').v2;
const multer = require('multer');
const path = require('path');
const siteMapRoutes = require('./routes/sitemap');

dotenv.config();

const port = process.env.PORT || 5000;

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

app.use('/', siteMapRoutes);
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ limit: '10mb', extended: true }));
app.use(
  cors({
    origin: process.env.CLIENT_URL,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
  })
);
app.use(bodyParser.json());

app.get('/', (req, res) => res.json({ message: 'Welcome to our API' }));
app.use('/user', users);
app.use('/blog', blogs);

app.use((req, res) =>
  res.status(404).json({ success: false, message: 'Not Found' })
);

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
