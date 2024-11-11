const express = require('express');
const app = express();

// Example route for images
app.get('/images', (req, res) => {
  const images = [
    { id: 1, url: '/images/1.png' },
    { id: 2, url: '/images/2.png' },
  ];
  res.json(images);
});

module.exports = app;
