const express = require('express');
const { protect, adminOnly } = require('../Middleware/Middleware');
const { createBooking, getAllBookings, updateBookingStatus } = require('../Controllers/BookingC');

const router = express.Router();

router.post('/', protect, createBooking);
router.get('/', protect, adminOnly, getAllBookings);
router.put('/:id', protect, adminOnly, updateBookingStatus);

module.exports = router;
