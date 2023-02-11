const mongoose = require('mongoose');

const stringProps = {
  type: String,
  required: true,
};

const userSchema = new mongoose.Schema({
  isCompany: {
    type: Boolean,
    required: true,
  },
  fname: {
    type: String,
    required: false,
  },
  lname: {
    type: String,
    required: false,
  },
  companyName: {
    type: String,
    required: false,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  confirmed: {
    type: Boolean,
    required: true,
  },
  confirmHash: {
    type: String,
    required: false,
    unique: true,
  },
  privileges: [
    {
      type: String,
      required: true,
    },
  ],
});

module.exports = mongoose.model('User', userSchema);
