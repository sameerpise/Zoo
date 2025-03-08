const express = require("express");
const multer = require("multer");
const path = require("path");
const fs = require("fs");
const Animal = require("../Models/Animals"); // Import Animal Model

const router = express.Router();

// Set up Multer Storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); // Save uploaded files in "uploads" folder
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // Unique filename
  },
});

const upload = multer({ storage: storage });

// @route   POST /api/animals/add
// @desc    Add new animal
// @access  Public
router.post("/add", upload.single("image"), async (req, res) => {
  try {
    const { name,Description, category } = req.body;
    const imageUrl =  req.file ? `http://localhost:5000/uploads/${req.file.filename}` : null;

    if (!name || !category || !imageUrl ||!Description) {
      return res.status(400).json({ message: "All fields are required!" });
    }

    const newAnimal = new Animal({ name, category,Description, image: imageUrl });
    await newAnimal.save();

    res.status(201).json({ message: "Animal added successfully!", animal: newAnimal });
  } catch (error) {
    console.error("Error adding animal:", error);
    res.status(500).json({ message: "Server Error!" });
  }
});
router.get("/all", async (req, res) => {
  try {
    const animals = await Animal.find();
    res.json(animals);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
});

// ✅ Fetch a single animal by ID
router.get("/:id", async (req, res) => {
  try {
    const animal = await Animal.findById(req.params.id);
    if (!animal) {
      return res.status(404).json({ message: "Animal not found" });
    }
    res.json(animal);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
});
router.delete("/delete/:id", async (req, res) => {
  try {
    const animal = await Animal.findById(req.params.id);
    if (!animal) {
      return res.status(404).json({ message: "Animal not found" });
    }

    // ✅ Extract the image path from the URL
    if (animal.image) {
      const imagePath = path.join(__dirname, "..", animal.image.replace("http://localhost:5000/", ""));
      if (fs.existsSync(imagePath)) {
        fs.unlinkSync(imagePath);
      }
    }

    await Animal.findByIdAndDelete(req.params.id);
    res.json({ message: "Animal deleted successfully" });

  } catch (error) {
    console.error("Error deleting animal:", error);
    res.status(500).json({ message: "Server Error" });
  }
});
router.put("/update/:id", upload.single("image"), async (req, res) => {
  try {
    const animal = await Animal.findById(req.params.id);
    if (!animal) {
      return res.status(404).json({ message: "Animal not found" });
    }

    // ✅ Delete old image if new one is uploaded
    if (req.file && animal.image) {
      const oldImagePath = path.join(__dirname, "..", animal.image.replace("http://localhost:5000/", ""));
      if (fs.existsSync(oldImagePath)) {
        fs.unlinkSync(oldImagePath);
      }
    }

    // ✅ Update Animal
    animal.name = req.body.name || animal.name;
    animal.category = req.body.category || animal.category;
    animal.Description= req.body.Description || animal.Description;
    if (req.file) {
      animal.image = `http://localhost:5000/uploads/${req.file.filename}`;
    }

    await animal.save();
    res.json({ message: "Animal updated successfully", animal });

  } catch (error) {
    console.error("Error updating animal:", error);
    res.status(500).json({ message: "Server Error" });
  }
});

module.exports = router;
