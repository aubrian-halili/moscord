const express = require('express');
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');

const router = express.Router();
const swaggerDocument = YAML.load(`${__dirname}/../swagger.yaml`);

router.use('/docs', swaggerUi.serve);
router.get('/docs', swaggerUi.setup(swaggerDocument));

module.exports = router;
