import React from "react";
import "./Spinner.css"; // Import custom styles (optional)

const Spinner = ({ loading }) => {
  if (!loading) return null; // Hide if not loading

  return (
    <div className="spinner-overlay">
      <div className="spinner-border text-success" style={{ width: "3rem", height: "3rem" }} role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export default Spinner;
