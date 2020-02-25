const express = require('express');

const Cart = require('models/Cart');
const { asyncHandler } = require('common/util');

const router = express.Router();

router.get('/', asyncHandler(async (req, res) => {
  const data = await Cart.find();
  res.json(data);
}));

router.get('/:id', asyncHandler(async (req, res) => {
  const { id } = req.params || {};
  const data = await Cart.findById(id);
  res.json(data);
}));

router.post('/', asyncHandler(async (req, res) => {
  const data = await Cart.create(req.body || {});
  res.json(data);
}));

router.put('/:id', asyncHandler(async (req, res) => {
  const { id } = req.params || {};
  const body = req.body || {};
  const data = await Cart.findByIdAndUpdate(id, body, { new: true });
  res.json(data);
}));

router.delete('/:id', asyncHandler(async (req, res) => {
  const { id } = req.params || {};
  const data = await Cart.deleteOne({ _id: id });
  res.json(data);
}));

module.exports = router;
