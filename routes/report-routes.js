const express = require('express');
const ctrl = require('../controllers/report');
const router = express.Router();

router.get('/', ctrl.getAll);
router.get('/statistics', ctrl.statistics);
router.get('/:userID', ctrl.search);

module.exports = router;
