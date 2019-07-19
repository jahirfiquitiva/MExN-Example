const express = require('express');

const router = express.Router();

router.get('/', (request, response) => {
  return response.send({ status: 'ok' });
});

module.exports = router;
