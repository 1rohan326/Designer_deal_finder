const express = require('express');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const apiRoutes = require('./routes/api');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static('public'));

app.use('/api', apiRoutes);

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views/index.html'));
});

app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, 'views/about.html'));
});

app.get('/search', (req, res) => {
  res.sendFile(path.join(__dirname, 'views/search.html'));
});

app.get('/deals', (req, res) => {
  res.sendFile(path.join(__dirname, 'views/deals.html'));
});

app.get('/product', (req, res) => {
  res.sendFile(path.join(__dirname, 'views/product.html'));
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});