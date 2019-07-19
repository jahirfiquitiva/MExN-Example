const mongoose = require('mongoose');

// Object destructuring
const { Schema } = mongoose;
// const Schema = mongoose.Schema;

const personSchema = new Schema({
  doc: {
    type: String,
    required: true,
    unique: true,
    match: new RegExp('^[0-9]{10}$'),
  },
  name: {
    type: String,
    required: true,
  },
  surname: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
    min: 18,
    max: 120,
  },
  gender: {
    type: String,
    required: true,
    enum: ['m', 'f'],
  },
  email: {
    type: String,
    required: true,
    match: new RegExp('^[a-zA-Z0-9\.\-\_]+@[a-zA-Z]+\\.[a-zA-Z]{2,7}(\.[a-zA-Z]{2})?$')
  }
});

module.exports = mongoose.model('persons', personSchema);
