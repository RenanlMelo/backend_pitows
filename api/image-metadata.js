const path = require('path');
const fs = require('fs');

module.exports = (req, res) => {
  const imageName = req.query.name;
  const metadataPath = path.join(__dirname, '../data/imageData.json');

  if (fs.existsSync(metadataPath)) {
    const data = fs.readFileSync(metadataPath);
    const images = JSON.parse(data);

    if (imageName) {
      const imageMetadata = images.find(img => img.name === imageName);
      if (imageMetadata) {
        res.json(imageMetadata);
      } else {
        res.status(404).json({ error: "Image metadata not found" });
      }
    } else {
      res.json(images);
    }
  } else {
    res.status(500).json({ error: "Metadata file not found" });
  }
};
