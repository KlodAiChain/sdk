const express = require('express');
const router = express.Router();
const { analyzeData } = require('../controllers/aiController');

router.post('/analyze', analyzeData);

module.exports = router;

