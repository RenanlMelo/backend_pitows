const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();

// Enable CORS for all routes
app.use(cors()); // This should work if cors is imported correctly

// Serve static files (images) from the 'images' folder
app.use("/images", express.static(path.join(__dirname, "images")));

// Example route for images
app.get("/images", (req, res) => {
  const images = [
    { id: 1, url: "http://localhost:4000/images/1.png" },
    { id: 2, url: "http://localhost:4000/images/2.png" },
  ];
  res.json(images);
});

// Basic route for testing
app.get("/", (req, res) => {
  res.send("Server is running.");
});

// Start the server
const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
