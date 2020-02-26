const express = require('express');

const Product = require('models/Product');
const { asyncHandler } = require('common/util');

const router = express.Router();

router.get('/', asyncHandler(async (req, res) => {
  let data = [];
  const { search: searchKey } = req.query;

  if (searchKey) {
    data = await Product.find({ $text: { $search: searchKey } });
  } else {
    data = await Product.find();
  }
  res.json(data);
}));

router.get('/:id', asyncHandler(async (req, res) => {
  const { id } = req.params || {};
  const data = await Product.findById(id);
  res.json(data);
}));

router.post('/', asyncHandler(async (req, res) => {
  const data = await Product.create(req.body || {});
  res.json(data);
}));

router.put('/:id', asyncHandler(async (req, res) => {
  const { id } = req.params || {};
  const body = req.body || {};
  const data = await Product.findByIdAndUpdate(id, body, { new: true });
  res.json(data);
}));

router.delete('/:id', asyncHandler(async (req, res) => {
  const { id } = req.params || {};
  const data = await Product.deleteOne({ _id: id });
  res.json(data);
}));

module.exports = router;
