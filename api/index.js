const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Server is running!");
});

app.get("/api/image-metadata", (req, res) => {
  const imageMetadata = [
    { name: "Costume", preco: "1540", type: "image/jpg", url: "/images/1.jpg" },
    { name: "Terno", preco: "2800", type: "image/jpg", url: "/images/2.jpg" },
    { name: "Sapatenis", preco: "290", type: "image/jpg", url: "/images/3.jpg" },
    { name: "Camisas", preco: "250", type: "image/jpg", url: "/images/4.jpg" },
    { name: "Camisetas gola careca de malha", preco: "60", type: "image/jpg", url: "/images/5.jpg" }
  ];
  res.json(imageMetadata);
});


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
