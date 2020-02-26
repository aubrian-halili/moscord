const mongoose = require('mongoose');

const { Schema } = mongoose;

const schema = new Schema({
  name: {
    type: String,
    required: true,
    text: true,
  },
  description: {
    type: String,
    required: true,
    text: true,
  },
  price: {
    type: String,
    required: true,
  },
  seller: {
    type: Schema.Types.ObjectId,
    ref: 'Seller',
    required: true,
  },
}, {
  timestamps: true,
  autoIndex: true,
  toJSON: { virtuals: true },
});

schema.index({ name: 1, description: 1 });
schema.virtual('id').get((id) => id);

module.exports = mongoose.model('Product', schema);
