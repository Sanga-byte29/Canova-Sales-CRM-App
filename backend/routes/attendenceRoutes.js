const express = require('express');
const { checkIn, checkOut, getAttendanceLog } = require('../controllers/attendanceController');
const router = express.Router();

router.post('/checkin', checkIn);
router.post('/checkout', checkOut);
router.get('/logs', getAttendanceLog);

module.exports = router;