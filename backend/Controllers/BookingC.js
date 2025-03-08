const Booking = require('../Models/Booking');

// @route   POST /api/bookings
// @desc    Create a new booking
exports.createBooking = async (req, res) => {
  try {
    const { date, safariType, email } = req.body;
    const booking = new Booking({ user: req.user.id, date, safariType, email });
    await booking.save();
    res.status(201).json(booking);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// @route   GET /api/bookings
// @desc    Get all bookings (Admin only)
exports.getAllBookings = async (req, res) => {
  try {
    const bookings = await Booking.find().populate('user', 'name email');
    res.json(bookings);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// @route   PUT /api/bookings/:id
// @desc    Update booking status (Admin only)
exports.updateBookingStatus = async (req, res) => {
  try {
    const booking = await Booking.findById(req.params.id);
    if (!booking) return res.status(404).json({ message: 'Booking not found' });

    booking.status = req.body.status;
    await booking.save();
    res.json(booking);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};
