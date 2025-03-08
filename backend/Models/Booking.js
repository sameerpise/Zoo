const mongoose = require('mongoose');

const BookingSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  date: { type: Date, required: true },
  safariType: { type: String, enum: ['jeep', 'bus', 'elephant'], required: true },
  status: { type: String, enum: ['pending', 'confirmed', 'cancelled'], default: 'pending' },
  createdAt: { type: Date, default: Date.now },
  email: { type: String, required:true},
});

module.exports = mongoose.model('Booking', BookingSchema);
