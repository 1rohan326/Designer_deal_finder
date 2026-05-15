const express = require('express');
const fetch = require('node-fetch');
const { createClient } = require('@supabase/supabase-js');

const router = express.Router();

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_KEY
);

router.get('/favorites', async (req, res) => {
  const { data, error } = await supabase
    .from('favorites')
    .select('*');

  if (error) {
    return res.status(500).json(error);
  }

  res.json(data);
});

router.post('/favorites', async (req, res) => {
  const item = req.body;

  const { data, error } = await supabase
    .from('favorites')
    .insert([item]);

  if (error) {
    return res.status(500).json(error);
  }

  res.json(data);
});

router.get('/search', async (req, res) => {
  try {
    const response = await fetch('https://dummyjson.com/products');

    const data = await response.json();

    res.json(data.products);

  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: 'Failed to fetch products'
    });
  }
});

router.get('/deals', async (req, res) => {
  const response = await fetch('https://dummyjson.com/products');
  const data = await response.json();

  const deals = data.products.sort((a, b) => a.price - b.price);

  res.json(deals);
});

router.get('/product/:id', async (req, res) => {
  const response = await fetch(
    `https://dummyjson.com/products/${req.params.id}`
  );

  const data = await response.json();

  res.json(data);
});

module.exports = router;