require('dotenv').config();
const mongoose = require('mongoose')
const express = require('express')
const cors = require("cors")
const bcrypt = require('bcryptjs')
const database = require('./Database/Database')
const path = require('path')
const animalRoutes = require("./Routes/AnimalR");

const app = express()
// app.use("/uploads", express.static(path.join(__dirname, "uploads")));
app.use(express.json());
app.use(cors());
app.use('/api/auth', require('./Routes/UserRoutes'));
app.use('/api/bookings', require('./Routes/BookR'));

app.use("/uploads", express.static("uploads")); // ✅ Serve uploaded images

app.use("/api/animals", animalRoutes); // ✅ Ensure correct route

database()


Port = process.env.Port || 5000
app.listen(Port,()=>{
    console.log(`server listening on ${Port}`);
})

