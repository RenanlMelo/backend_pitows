const path = require('path');
const fs = require('fs');

module.exports = (req, res) => {
  const imageName = req.query.name; 

  if (!imageName) {
    return res.status(400).json({ error: "Image name is required" });
  }

  const imagePath = path.join(__dirname, '../images', imageName);

  if (fs.existsSync(imagePath)) {
    res.sendFile(imagePath); 
  } else {
    res.status(404).json({ error: "Image not found" });
  }
};
