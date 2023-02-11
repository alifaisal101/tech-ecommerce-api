const mongoose = require('mongoose');

const superCategory = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('SuperCategorie', superCategory);
