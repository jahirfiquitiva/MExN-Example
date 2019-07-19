const mongoose = require('mongoose');

const mongoUrl = 'mongodb://localhost:27017/electiva';

mongoose.set('useCreateIndex', true);
mongoose.set('runValidators', true);

const db = mongoose.connect(mongoUrl, { useNewUrlParser: true },
  (error) => {
    if (error) {
      console.log('Error conectando a mongo');
    } else {
      console.log('Conectado a mongo');
    }
  });

module.exports = db;
