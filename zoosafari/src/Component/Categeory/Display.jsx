import React, { useEffect, useState } from "react";
import axios from "axios";
import { Box, Button, Typography, Card, CardMedia, CardContent, CardActions } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./Display.css"; // Import custom styles

const AnimalList = () => {
  const [animals, setAnimals] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchAnimals();
  }, []);

  const fetchAnimals = async () => {
    try {
      const res = await axios.get("https://zoo-2.onrender.com/api/animals/all");
      setAnimals(res.data);
    } catch (error) {
      console.error("Error fetching animals:", error.response ? error.response.data : error.message);
    }
  };

  // DELETE Animal
  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this animal?")) {
      try {
        await axios.delete(`https://zoo-2.onrender.com/api/animals/delete/${id}`);
        setAnimals(animals.filter((animal) => animal._id !== id)); // Update state after delete
      } catch (error) {
        console.error("Error deleting animal:", error);
      }
    }
  };

  return (
    <div className="animal-list-page">
      <Typography variant="h4" className="page-title">
        <i className="bi bi-binoculars-fill"></i> Zoo Safari Animals
      </Typography>

      <Box className="animal-list-container">
        {animals.map((animal) => (
          <Card key={animal._id} className="animal-card">
            <CardMedia component="img" className="animal-image" onClick={() => navigate(`/animal/${animal._id}`)} image={animal.image} alt={animal.name} />
            <CardContent className="animal-content">
              <Typography variant="h6" className="animal-name">{animal.name}</Typography>
              <Typography variant="h6" className="animal-name">{animal.Description}</Typography>
              <Typography variant="body2" className="animal-category">Category: {animal.category}</Typography>
            </CardContent>
            <CardActions className="animal-actions">
              <Button variant="contained" className="edit-btn" onClick={() => navigate(`/edit-animal/${animal._id}`)}>
                <i className="bi bi-pencil-square"></i> Edit
              </Button>
              <Button variant="contained" className="delete-btn" onClick={() => handleDelete(animal._id)}>
                <i className="bi bi-trash-fill"></i> Delete
              </Button>
            </CardActions>
          </Card>
        ))}
      </Box>
    </div>
  );
};

export default AnimalList;
