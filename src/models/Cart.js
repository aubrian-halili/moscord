const mongoose = require('mongoose');

const { Schema } = mongoose;

const schema = new Schema({
  product: {
    type: Schema.Types.ObjectId,
    ref: 'Product',
  },
  quantity: {
    type: Number,
    required: true,
  },
}, {
  timestamps: true,
  toJSON: { virtuals: true },
});

schema.virtual('id').get((id) => id);

module.exports = mongoose.model('Report', schema);
