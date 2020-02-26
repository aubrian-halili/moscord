const express = require('express');
const _ = require('lodash');

const Product = require('models/Product');
const Seller = require('models/Seller');
const Cart = require('models/Cart');
const { asyncHandler } = require('common/util');

const router = express.Router();

router.get('/product', asyncHandler(async (req, res) => {
  const products = await Product.aggregate([{
    $lookup: {
      from: 'carts',
      localField: '_id',
      foreignField: 'product',
      as: 'carts',
    },
  }]);

  const report = _.map(products, (item) => {
    return {
      ...item,
      cartCount: item.carts.length,
    };
  });
  res.json(report);
}));

router.get('/seller', asyncHandler(async (req, res) => {
  res.json({});
}));

module.exports = router;
