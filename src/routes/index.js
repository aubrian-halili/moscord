const express = require('express');

const products = require('./products');
const sellers = require('./sellers');
const carts = require('./carts');
const reports = require('./reports');
const swagger = require('./swagger');

const router = express.Router();

router.use('/products', products);
router.use('/sellers', sellers);
router.use('/carts', carts);
router.use('/reports', reports);
router.use(swagger);

module.exports = router;
