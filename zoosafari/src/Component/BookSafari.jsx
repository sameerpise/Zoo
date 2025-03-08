import React, { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "./BookSafari.css";

const BookSafari = () => {
  const [bookingData, setBookingData] = useState({
    name: "",
    email: "",
    date: "",
    safariType: "jeep",
    adults: 1,
    children: 0,
    seniors: 0,
    ticketPrice: 350, // Default Jeep Safari price
  });

  const [ticket, setTicket] = useState(null);

  // Safari prices per person
  const safariPrices = {
    jeep: { adult: 350, child: 200, senior: 250 },
    bus: { adult: 230, child: 150, senior: 180 },
    elephant: { adult: 480, child: 300, senior: 400 },
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBookingData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Function to update price based on selection
  const updatePrice = (safariType, adults, children, seniors) => {
    const prices = safariPrices[safariType];
    const totalPrice =
      prices.adult * adults + prices.child * children + prices.senior * seniors;

    setBookingData((prev) => ({
      ...prev,
      ticketPrice: totalPrice,
    }));
  };

  const handleBooking = async () => {
    try {
      const token = JSON.parse(localStorage.getItem("user"))?.token;
      const response = await axios.post(
        "http://localhost:5000/api/bookings",
        bookingData,
        { headers: { Authorization: `Bearer ${token}` } }
      );

      const bookingDetails = {
        id: response.data.bookingId || Math.floor(Math.random() * 100000),
        ...bookingData,
      };

      localStorage.setItem("ticket", JSON.stringify(bookingDetails));
      setTicket(bookingDetails);
    } catch (error) {
      alert("⚠️ Booking Failed! Please try again.");
    }
  };

  return (
    <div className="book-safari-container">
      {!ticket ? (
        <div className="booking-card animate__animated animate__fadeInUp">
          <h2>🎟️ Book Your Safari</h2>

          <div className="form-floating mb-2">
            <input
              type="text"
              className="form-control"
              name="name"
              placeholder="Full Name"
              onChange={handleChange}
              required
            />
            <label>Full Name</label>
          </div>

          <div className="form-floating mb-2">
            <input
              type="email"
              className="form-control"
              name="email"
              placeholder="Email Address"
              onChange={handleChange}
              required
            />
            <label>Email Address</label>
          </div>

          <div className="form-floating mb-2">
            <input
              type="date"
              className="form-control"
              name="date"
              onChange={handleChange}
              required
            />
            <label>Select Date</label>
          </div>

          {/* Safari Type Selection */}
          <div className="form-floating mb-2">
            <select
              className="form-select"
              name="safariType"
              onChange={(e) => {
                handleChange(e);
                updatePrice(e.target.value, bookingData.adults, bookingData.children, bookingData.seniors);
              }}
            >
              <option value="jeep">🚙 Jeep Safari (Rs.350/adult)</option>
              <option value="bus">🚌 Bus Safari (Rs.230/adult)</option>
              <option value="elephant">🐘 Elephant Safari (Rs.480/adult)</option>
            </select>
            <label>Choose Safari Type</label>
          </div>

          {/* Number of People */}
          <div className="form-floating mb-2">
            <input
              type="number"
              className="form-control"
              name="adults"
              min="1"
              value={bookingData.adults}
              onChange={(e) => {
                handleChange(e);
                updatePrice(bookingData.safariType, e.target.value, bookingData.children, bookingData.seniors);
              }}
              required
            />
            <label>Number of Adults</label>
          </div>

          <div className="form-floating mb-2">
            <input
              type="number"
              className="form-control"
              name="children"
              min="0"
              value={bookingData.children}
              onChange={(e) => {
                handleChange(e);
                updatePrice(bookingData.safariType, bookingData.adults, e.target.value, bookingData.seniors);
              }}
            />
            <label>Number of Children</label>
          </div>

          <div className="form-floating mb-2">
            <input
              type="number"
              className="form-control"
              name="seniors"
              min="0"
              value={bookingData.seniors}
              onChange={(e) => {
                handleChange(e);
                updatePrice(bookingData.safariType, bookingData.adults, bookingData.children, e.target.value);
              }}
            />
            <label>Number of Senior Citizens</label>
          </div>

          {/* Display Ticket Price */}
          {/* <div className="alert alert-info">
            <strong>Total Price:</strong> Rs. {bookingData.ticketPrice}
          </div> */}

          <button className="btn book-now-btn w-100 py-2" onClick={handleBooking}>
            <i className="bi bi-calendar-check"></i> Book Now
          </button>
        </div>
      ) : (
        <div className="big-ticket-card animate__animated animate__zoomIn">
          <div className="ticket-header">
            <h2>🎟️ Safari Ticket</h2>
          </div>
          <div className="ticket-body">
            <p><strong>Name:</strong> {ticket.name}</p>
            <p><strong>Email:</strong> {ticket.email}</p>
            <p><strong>Safari Type:</strong> {ticket.safariType.toUpperCase()}</p>
            <p><strong>Date:</strong> {ticket.date}</p>
            <p><strong>Adults:</strong> {ticket.adults}</p>
            <p><strong>Children:</strong> {ticket.children}</p>
            <p><strong>Seniors:</strong> {ticket.seniors}</p>
            <p><strong>Total Price:</strong> Rs.{ticket.ticketPrice}</p>
            <p className="ticket-id"><strong>Ticket ID:</strong> #{ticket.id}</p>
            <img className="barcode" src="https://api.qrserver.com/v1/create-qr-code/?size=100x100&data=SafariTicket" alt="QR Code" />
          </div>
          <div className="ticket-footer">
            <button className="btn btn-success w-100" onClick={() => window.print()}>
              🖨️ Print Ticket
            </button>
            <button className="btn btn-danger w-100 mt-2" onClick={() => setTicket(null)}>
              🔄 Book Another Safari
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default BookSafari;
