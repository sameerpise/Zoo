import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaPhoneAlt, FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { AiOutlineClockCircle } from "react-icons/ai";
import './Header.css'

const Header = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <motion.div 
      className="container-fluid bg-light p-0"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="row gx-0 d-none d-lg-flex">
        {/* Left Section (Location & Time) */}
        <div className="col-lg-7 px-5 text-start">
          <div className="h-100 d-inline-flex align-items-center py-3 me-4">
            <FaMapMarkerAlt className="text-primary me-2" />
            <small>Maharashtra, India</small>
          </div>
          <div className="h-100 d-inline-flex align-items-center py-3">
            <AiOutlineClockCircle className="text-primary me-2" />
            <small>
              {currentTime.toLocaleDateString()} | {currentTime.toLocaleTimeString()}
            </small>
          </div>
        </div>

        {/* Right Section (Phone & Social Links) */}
        <div className="col-lg-5 px-5 text-end">
          <div className="h-100 d-inline-flex align-items-center py-3 me-4">
            <FaPhoneAlt className="text-primary me-2" />
            <small>+123 456 7890</small>
          </div>
          <div className="h-100 d-inline-flex align-items-center">
            <a className="btn btn-sm-square bg-white text-primary me-1" href="#"><i className="fab fa-linkedin-in"></i></a>
            <a className="btn btn-sm-square bg-white text-primary me-1" href="#"><i className="fab fa-twitter"></i></a>
            <a className="btn btn-sm-square bg-white text-primary me-1" href="#"><i className="fab fa-facebook-f"></i></a>
            <a className="btn btn-sm-square bg-white text-primary me-0" href="#"><i className="fab fa-instagram"></i></a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Header;
