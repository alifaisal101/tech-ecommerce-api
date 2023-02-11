const mongoose = require('mongoose');

const stringProps = {
  type: String,
  required: true,
};

const productSchema = new mongoose.Schema({
  // List of image's urls
  imgsList: [
    {
      type: String,
      required: true,
    },
  ],
  maker: stringProps,
  title: stringProps,
  desc: stringProps,
  approvalState: {
    type: Boolean,
    required: true,
  },
  model: stringProps,
  location: {
    state: stringProps,
    moreInfo: {
      type: String,
      required: false,
    },
  },
  sellerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  // Product Weight in Kilos
  productWeight: {
    type: Number,
    required: false,
  },
  subCategory: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'SubGategorie',
    required: true,
  },
  productAttrs: [
    {
      attrId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'attr',
        required: true,
      },
      value: {
        type: String,
        required: true,
      },
    },
  ],
});

module.exports = mongoose.model('Product', productSchema);
