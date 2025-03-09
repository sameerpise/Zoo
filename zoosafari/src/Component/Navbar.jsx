import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Header from "./Header";
import Logo from "../assets/jsi-logo.png";
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  // Toggle function for responsive navbar
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  // Handle scroll event to make navbar sticky
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Header />
      <nav
        className={`navbar navbar-expand-lg bg-white navbar-light py-lg-0 px-4 px-lg-5 ${
          isSticky ? "sticky-nav" : ""
        }`}
      >
        <Link to="/" className="navbar-brand p-0">
          <img className="img-fluid me-3" src={Logo} alt="Icon" />
          <h1 className="m-0 text-primary">
            
          </h1>
        </Link>

        {/* Toggle Button for Mobile View */}
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleNavbar}
          aria-expanded={isOpen ? "true" : "false"}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links (Collapsible on Mobile) */}
        <div
          className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}
          id="navbarCollapse"
        >
          <div className="navbar-nav ms-auto">
            <Link to="/" className="nav-item nav-link" onClick={toggleNavbar}>
              Home
            </Link>
            <Link
              to="/about"
              className="nav-item nav-link"
              onClick={toggleNavbar}
            >
              About
            </Link>
            <Link
              to="/AllPost"
              className="nav-item nav-link"
              onClick={toggleNavbar}
            >
            Daily_Blogs
            </Link>

            {/* Dropdown Menu */}
            <div className="nav-item dropdown">
              <Link
                to="/"
                className="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
              >
                Categeory
              </Link>
              <div className="dropdown-menu rounded-0 rounded-bottom m-0">
                <Link
                  to="/All"
                  className="dropdown-item"
                  onClick={toggleNavbar}
                >
                  Our Animals
                </Link>
                {/* <Link
                  to="/membership"
                  className="dropdown-item"
                  onClick={toggleNavbar}
                >
                  Snakes
                </Link> */}
                {/* <Link
                  to="/visiting-hours"
                  className="dropdown-item"
                  onClick={toggleNavbar}
                >
                  King of Jungle
                </Link> */}
                {/* <Link
                  to="/testimonials"
                  className="dropdown-item"
                  onClick={toggleNavbar}
                >
                  Testimonial
                </Link> */}
                <Link
                  to="/not-found"
                  className="dropdown-item"
                  onClick={toggleNavbar}
                >
                  404 Page
                </Link>
              </div>
            </div>

            <Link
              to="/contact"
              className="nav-item nav-link"
              onClick={toggleNavbar}
            >
              Contact
            </Link>
          </div>

          {/* Buy Ticket Button */}
          <Link to="/login" className="btn btn-success" onClick={toggleNavbar}>
            Buy Ticket <i className="fa fa-arrow-right ms-3"></i>
          </Link>
        </div>
      </nav>

      {/* CSS for Sticky Navbar */}
      <style>
        {`
          .sticky-nav {
            position: fixed;
            top: 0;
            width: 100%;
            z-index: 1000;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            transition: all 0.3s ease-in-out;
          }
        `}
      </style>
    </>
  );
}
