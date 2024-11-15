const path = require('path');
const fs = require('fs');

module.exports = (req, res) => {
  const imageName = req.query.name;

  if (!imageName) {
    return res.status(400).json({ error: "Image name is required" });
  }

  const imagePath = path.join(__dirname, '../images', imageName);

  if (fs.existsSync(imagePath)) {
    const imageBuffer = fs.readFileSync(imagePath);
    const imageBase64 = imageBuffer.toString('base64');
    const stats = fs.statSync(imagePath);

    const response = {
      name: imageName,
      size: stats.size,
      created: stats.birthtime,
      modified: stats.mtime,
      type: path.extname(imageName),
      image: imageBase64
    };

    res.json(response);
  } else {
    res.status(404).json({ error: "Image not found" });
  }
};
