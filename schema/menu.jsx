const mongoose = require('mongoose');

const menuSchema = new mongoose.Schema({
  dishName: {
    type: String,
    required: true
  },
  cost: {
    type: Number,
    required: true
  }
});

module.exports = mongoose.model('Menu', menuSchema);
