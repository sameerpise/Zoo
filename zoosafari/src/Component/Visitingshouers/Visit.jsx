import React from "react";
import { FaClock, FaCalendarAlt } from "react-icons/fa";
// import "./Visit.css";
import { Button } from "bootstrap";
import BookSafari from "../BookSafari";

const VisitHours = () => {
//   const visitData = [
//     { day: "Monday", time: "9:00 AM - 6:00 PM" },
//     { day: "Tuesday", time: "9:00 AM - 6:00 PM" },
//     { day: "Wednesday", time: "9:00 AM - 6:00 PM" },
//     { day: "Thursday", time: "9:00 AM - 6:00 PM" },
//     { day: "Friday", time: "9:00 AM - 6:00 PM" },
//     { day: "Saturday", time: "8:00 AM - 7:00 PM" },
//     { day: "Sunday", time: "8:00 AM - 7:00 PM" },
//   ];

  return (
    <>
    <div
    className="container-xxl bg-primary visiting-hours py-5 wow fadeInUp"
    data-wow-delay="0.1s"
    style= {{margin:"6rem 0"}}
  >
    <div className="container py-5">
      <div className="row g-5">
        <div className="col-md-6 wow fadeIn" data-wow-delay="0.3s">
          <h1 className="display-6 text-white mb-5">Visiting Hours</h1>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <span>Monday</span>
              <span>9:00AM - 6:00PM</span>
            </li>
            <li className="list-group-item">
              <span>Tuesday</span>
              <span>9:00AM - 6:00PM</span>
            </li>
            <li className="list-group-item">
              <span>Wednesday</span>
              <span>9:00AM - 6:00PM</span>
            </li>
            <li className="list-group-item">
              <span>Thursday</span>
              <span>9:00AM - 6:00PM</span>
            </li>
            <li className="list-group-item">
              <span>Friday</span>
              <span>9:00AM - 6:00PM</span>
            </li>
            <li className="list-group-item">
              <span>Saturday</span>
              <span>9:00AM - 6:00PM</span>
            </li>
            <li className="list-group-item">
              <span>Sunday</span>
              <span>Closed</span>
            </li>
          </ul>
        </div>
        <div className="col-md-6 text-light wow fadeIn" data-wow-delay="0.5s">
          <h1 className="display-6 text-white mb-5">Contact Info</h1>
          <table className="table">
            <tbody>
              <tr>
                <td>Office</td>
                <td>123 Street, New York, USA</td>
              </tr>
              <tr>
                <td>Zoo</td>
                <td>123 Street, New York, USA</td>
              </tr>
              <tr>
                <td>Ticket</td>
                <td>
                  <p className="mb-2">+012 345 6789</p>
                  <p className="mb-0">ticket@example.com</p>
                </td>
              </tr>
              <tr>
                <td>Support</td>
                <td>
                  <p className="mb-2">+012 345 6789</p>
                  <p className="mb-0">support@example.com</p>
                </td>
              </tr>
            </tbody>
          </table>
     
        </div>
      </div>
    </div>
  </div>

     
   
   
  
    </>

  );
};

export default VisitHours;
