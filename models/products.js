
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    default: '',
  },
  quantity: {
    type: Number,
    required: true,
  },
  photoUrl: {
    type: String,
    default: '',
  },
});

module.exports = mongoose.model('Product', productSchema);
