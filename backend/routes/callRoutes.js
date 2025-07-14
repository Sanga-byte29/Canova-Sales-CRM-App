const express = require('express');
const { getCalls, addCall } = require('../controllers/callController');
const router = express.Router();

router.get('/', getCalls);
router.post('/add', addCall);

module.exports = router;