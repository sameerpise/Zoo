import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./P.css";

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <Box className="not-found-page">
      <Typography variant="h1" className="error-code">404</Typography>
      <Typography variant="h5" className="error-message">Oops! Page Not Found</Typography>
      <Typography variant="body1" className="error-description">
        The page you are looking for might have been removed or does not exist.
      </Typography>
      <Button
        variant="contained"
        className="home-btn"
        onClick={() => navigate("/")}
      >
        Go to Home
      </Button>
    </Box>
  );
};

export default NotFoundPage;
