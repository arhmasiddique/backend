const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');

dotenv.config();

const authRoutes = require('./routes/auth');
const blogRoutes = require('./routes/blogs');

const app = express();

app.use(bodyParser.json());

app.use('/api/auth', authRoutes);
app.use('/api/blogs', blogRoutes);

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(3000, () => console.log('Server running on port 3000')))
  .catch(err => console.error(err));
