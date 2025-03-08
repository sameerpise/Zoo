import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { Box, Button, TextareaAutosize, TextField, Typography } from "@mui/material";
import "./Edit.css"; // Importing custom styles

const EditAnimal = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [animalData, setAnimalData] = useState({ name: "", category: "",Description:"", image: null });
  const [preview, setPreview] = useState(null);

  useEffect(() => {
    fetchAnimal();
  }, []);

  const fetchAnimal = async () => {
    try {
      const res = await axios.get(`http://localhost:5000/api/animals/${id}`);
      setAnimalData({ name: res.data.name, category: res.data.category, image:res.data.image,Description:res.data.Description });
      setPreview(res.data.image);
    } catch (error) {
      console.error("Error fetching animal:", error);
    }
  };

  const handleChange = (e) => {
    if (e.target.name === "image") {
      const file = e.target.files[0];
      setAnimalData({ ...animalData, image: file });
      setPreview(URL.createObjectURL(file)); // Show preview
    } else {
      setAnimalData({ ...animalData, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", animalData.name);
    formData.append("category", animalData.category);
    formData.append("Description", animalData.Description);
    if (animalData.image instanceof File) {
      formData.append("image", animalData.image);
    }

    try {
      await axios.put(`http://localhost:5000/api/animals/update/${id}`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      navigate("/animals");
    } catch (error) {
      console.error("Error updating animal:", error);
    }
  };

  return (
    <div className="edit-animal-page">
      <Box className="edit-animal-container">
        <Typography variant="h5" className="title">🐾 Edit Animal</Typography>

        {preview && <img src={preview} alt="Preview" className="image-preview" />}

        <form onSubmit={handleSubmit} className="edit-form">
          <TextField 
            fullWidth 
            label="Animal Name" 
            name="name" 
            value={animalData.name} 
            onChange={handleChange} 
            required 
          />
          <TextField
            fullWidth 
            label="Animal Name" 
            name="name" 
            value={animalData.Description} 
            onChange={handleChange} 
            required 
          />
          <TextField 
            fullWidth 
            label="Category" 
            name="category" 
            value={animalData.category} 
            onChange={handleChange} 
            required 
          />
          <input type="file" name="image" onChange={handleChange} accept="image/*" className="file-input" />

          <Button type="submit" variant="contained" className="update-btn">Update Animal</Button>
        </form>
      </Box>
    </div>
  );
};

export default EditAnimal;
