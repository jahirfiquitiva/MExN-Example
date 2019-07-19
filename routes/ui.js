const express = require('express');
const path = require('path');

const router = express.Router();

router.get('/', (request, response) => {
  const indexPath = path.join(__dirname, '../views/index.html');
  console.log(indexPath);
  return response.sendFile(indexPath);
});

router.get('/pug', (request, response) => {
  const name = request.query.name || 'Desconocido';
  return response.render('pug', { name });
});

module.exports = router;
