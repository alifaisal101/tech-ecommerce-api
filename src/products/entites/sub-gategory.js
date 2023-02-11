const mongoose = require('mongoose');

const subCategory = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  parentGategory: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'SuperCategorie',
    required: true,
  },
});

module.exports = mongoose.model('SubGategorie', subCategory);
