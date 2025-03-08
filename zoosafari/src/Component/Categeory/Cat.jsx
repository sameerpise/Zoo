import React, { useState } from "react";
import axios from "axios";
import { Box, Button, TextField, Typography, Paper, TextareaAutosize } from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import "./Cat.css"; // Import the new CSS

const AddAnimal = () => {
  const navigate = useNavigate();
  const [animalData, setAnimalData] = useState({
    name: "",
    category: "",
    Description:"",
    image: null,
  });

  // Handle Input Change
  const handleChange = (e) => {
    if (e.target.name === "image") {
      setAnimalData({ ...animalData, image: e.target.files[0] });
    } else {
      setAnimalData({ ...animalData, [e.target.name]: e.target.value });
    }
  };

  // Handle Form Submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", animalData.name);
    formData.append("category", animalData.category);
    formData.append("image", animalData.image);
    formData.append("Description", animalData.Description);

    try {
      const res = await axios.post("http://localhost:5000/api/animals/add", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      toast.success(res.data.message);
      navigate("/animals"); // Redirect after success
      setAnimalData({ name: "", category: "",Description: "", image: null });
    } catch (error) {
      toast.error("Error adding animal. Try again!");
    }
  };

  return (
    <div className="add-animal-page">
      <Paper className="add-animal-container animate__animated animate__fadeInUp">
        {/* Left Section with Image */}
        <div className="add-animal-image"></div>

        {/* Right Section with Form */}
        <div className="add-animal-form">
          <Typography variant="h5" textAlign="center" sx={{ mb: 2 }}>
            <i className="bi bi-plus-circle-fill"></i> Add New Animal
          </Typography>

          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              label="Animal Name"
              name="name"
              value={animalData.name}
              onChange={handleChange}
              sx={{ mb: 2 }}
              required
            />
            <TextField
              fullWidth
              label="Animal Description"
              name="Description"
              value={animalData.Description}
              onChange={handleChange}
              sx={{ mb: 2 }}
              required
            />
            <TextField
              fullWidth
              label="Category"
              name="category"
              value={animalData.category}
              onChange={handleChange}
              sx={{ mb: 2 }}
              required
            />
            <input type="file" name="image" onChange={handleChange} accept="image/*" required className="file-input" />

            <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
              Add Animal
            </Button>
          </form>
        </div>
      </Paper>
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
};

export default AddAnimal;
