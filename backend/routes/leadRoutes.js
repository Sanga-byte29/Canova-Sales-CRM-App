const express = require('express');
const { getLeads, addLead, uploadCSV, assignLeads, bulkDeleteLeads } = require('../controllers/leadController');
const upload = require('../utils/csvUpload');
const router = express.Router();

router.get('/', getLeads);
router.post('/add', addLead);
router.post('/upload', upload.single('file'), uploadCSV);
router.post('/assign', assignLeads);
router.post('/bulk-delete', bulkDeleteLeads);

module.exports = router;
