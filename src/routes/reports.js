const express = require('express');

const { asyncHandler } = require('common/util');

const router = express.Router();

router.get('/product', asyncHandler(async (req, res) => {
  res.json({});
}));

router.get('/seller', asyncHandler(async (req, res) => {
  res.json({});
}));

module.exports = router;
