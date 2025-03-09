
import React, { useEffect, useState } from "react";
import axios from "axios";
// import { Box, Button, Typography, Card, CardMedia, CardContent, CardActions } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./All.css"; // Import custom styles
export default function Allpost() {
    const [animals, setAnimals] = useState([]);
    const navigate = useNavigate();
  
    useEffect(() => {
      fetchAnimals();
    }, []);
  
    const fetchAnimals = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/animals/all");
        setAnimals(res.data);
      } catch (error) {
        console.error("Error fetching animals:", error.response ? error.response.data : error.message);
      }
    };
  return (
    <>
    <div
        className='container post-container'
        style={{ position: 'relative', marginTop: '50px' }}
      >
        <section className='featured-posts'>
          <div className='section-title'>
            <h2>
              <span>Popular Posts</span>
            </h2>
          </div>
          <div className='row listfeaturedtag'>
            {animals.map((animal, index) => (
              <div className='col-md-6' key={index}>
                <div className='card post-card'>
                  <div className='row'>
                    <div className='col-md-5 wrapthumbnail'>
                      <a href='' style={{ cursor: 'pointer' }}>
                        {/* <img
                          className='thumbnail post-image'
                          src={postData.image}
                          alt='Post Thumbnail'
                        /> */}
                        <img
                          src={animal.image}
                          alt='Blog'
                          className='thumbnail post-image'
                          onClick={() => navigate(`/animal/${animal._id}`)}
                          //   onClick={() => navigate(`/blog/${blog._id}`)}
                          style={{ cursor: 'pointer' }}
                        />
                      </a>
                    </div>
                    <div className='col-md-7'>
                      <div className='card-body'>
                        <h4 className='post-title'   onClick={() => navigate(`/animal/${animal._id}`)}>
                          <a href=''>{animal.name}</a>
                          <span className='underline'></span>
                        </h4>
                        <p className='post-text'   onClick={() => navigate(`/animal/${animal._id}`)}>
                          {animal.Description}...
                        </p>
                        <div className='post-meta'>
                          <span className='author'>
                            <small>
                              By{' '}
                              <span >
                                {animal.category}
                              </span>{' '}
                              | {new Date(animal.createdAt).toLocaleDateString()}
                            </small>
                          </span>
                          {/* <span className='post-date'>{animal.Date}</span> */}
                        </div>
                        <ul className='social-icons'>
                          <li>
                            <a href='#'>
                              <i className='fab fa-facebook-f'></i>
                            </a>
                          </li>
                          <li>
                            <a href='#'>
                              <i className='fab fa-instagram'></i>
                            </a>
                          </li>
                          <li>
                            <a href='#'>
                              <i className='fab fa-x-twitter'></i>
                            </a>
                          </li>
                          <li>
                            <a href='#'>
                              <i className='fas fa-link'></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    
    </>
  )
}
