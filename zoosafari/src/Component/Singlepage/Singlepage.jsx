import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { Box, Button, Typography, Card, CardMedia, CardContent } from "@mui/material";
import "./SinglePage.css"; 

const SingleAnimal = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [animal, setAnimal] = useState(null);

  useEffect(() => {
    fetchAnimal();
  }, []);

  const fetchAnimal = async () => {
    try {
      const res = await axios.get(`http://localhost:5000/api/animals/${id}`);
      setAnimal(res.data);
    } catch (error) {
      console.error("Error fetching animal:", error);
    }
  };

  return (
    <Box className="single-animal-page">
      {animal ? (
        <Card className="animal-details-card">
          <CardMedia component="img" className="animal-details-image" image={animal.image} alt={animal.name} />
          <CardContent className="animal-details-content">
            <Typography variant="h4" className="animal-details-name">{animal.name}</Typography>
            <Typography variant="h6" className="animal-details-category">Category: {animal.category}</Typography>
            <Typography variant="body1" className="animal-details-description">{animal.description || "No description available."}</Typography>
            <Button variant="contained" className="back-btn" onClick={() => navigate("/animals")}>
              ⬅ Back to Animals
            </Button>
          </CardContent>
        </Card>
      ) : (
        <Typography className="loading-text">Loading...</Typography>
      )}
    </Box>
  );
};

export default SingleAnimal;
