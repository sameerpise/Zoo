import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../Redux/Slices/AuthSlice";
import { Link, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Login.css";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const { loading, error } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser(formData)).then((res) => {
      if (res.meta.requestStatus === "fulfilled") {
        toast.success("🎉 Login successful!", { position: "top-right" });
        setTimeout(() => navigate("/book"), 2000); // Delay navigation for better UX
      } else {
        toast.error("⚠️ Login failed! Please check your credentials.", { position: "top-right" });
      }
    });
  };

  return (
    <div className="login-page">
      <ToastContainer position="top-right" autoClose={3000} />
      <div className="login-container animate__animated animate__fadeInUp">
        {/* Left Section with Image */}
        <div className="login-image"></div>

        {/* Right Section with Login Form */}
        <div className="login-form">
          <h2><i className="bi bi-box-arrow-in-right"></i> ZooSafari Login</h2>

          <form onSubmit={handleSubmit}>
            <div className="form-floating mb-3">
              <input type="email" name="email" className="form-control" placeholder="Email" onChange={handleChange} required />
              <label>Email</label>
            </div>

            <div className="form-floating mb-3">
              <input type="password" name="password" className="form-control" placeholder="Password" onChange={handleChange} required />
              <label>Password</label>
            </div>

            <button className="btn login-btn w-100 py-2" type="submit" disabled={loading}>
              {loading ? <span><i className="bi bi-arrow-repeat"></i> Logging in...</span> : <span><i className="bi bi-box-arrow-in-right"></i> Login</span>}
            </button>

            <p className="text-center mt-3">
              Don't have an account? <Link to="/register">Create Account</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
