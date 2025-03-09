import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../Redux/Slices/AuthSlice";
import { Link, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Register.css"; // Import new CSS

const Register = () => {
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  const { loading, error } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(registerUser(formData)).then((res) => {
      if (res.meta.requestStatus === "fulfilled") navigate("/book");
    });
  };

  return (
    <div className="register-page">
      <div className="register-container animate__animated animate__fadeInUp">
        {/* Left Section with Image */}
        <div className="register-image"></div>

        {/* Right Section with Form */}
        <div className="register-form">
          <h2><i className="bi bi-person-plus-fill"></i> ZooSafari Register</h2>
          {error && <p className="text-danger">{error.message}</p>}

          <form onSubmit={handleSubmit}>
            <div className="form-floating mb-3">
              <input type="text" name="name" className="form-control" placeholder="Full Name" onChange={handleChange} required />
              <label>Full Name</label>
            </div>

            <div className="form-floating mb-3">
              <input type="email" name="email" className="form-control" placeholder="Email" onChange={handleChange} required />
              <label>Email</label>
            </div>

            <div className="form-floating mb-3">
              <input type="password" name="password" className="form-control" placeholder="Password" onChange={handleChange} required />
              <label>Password</label>
            </div>

            <button className="btn register-btn w-100 py-2" type="submit" disabled={loading}>
              {loading ? <span><i className="bi bi-arrow-repeat spin-icon"></i> Registering...</span> : <span><i className="bi bi-person-plus-fill"></i> Register</span>}
            </button>

            <p className="text-center mt-3">
              Already have an account? <Link to="/login">Login</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
