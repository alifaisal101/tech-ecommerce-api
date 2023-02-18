const mongoose = require('mongoose');

const attrSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  subCategory: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'SubGategorie',
    required: true,
  },
});

module.exports = mongoose.model('attr', attrSchema);
