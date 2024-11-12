const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(
  cors({
    origin: "http://127.0.0.1:5500",
  })
);

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Server is running!");
});

app.get("/api/image-metadata", (req, res) => {
  const imageMetadata = [
    {
      name: "Costume",
      preco: "1540",
      type: "image/jpg",
      url: "https://example-storage.com/images/1.jpg",
      filter: "costume",
    },
    {
      name: "Terno",
      preco: "2800",
      type: "image/jpg",
      url: "https://example-storage.com/images/2.jpg",
      filter: "terno",
    },
    {
      name: "Sapatenis",
      preco: "290",
      type: "image/jpg",
      url: "/images/3.jpg",
      filter: "sapatenis",
    },
    {
      name: "Camisas",
      preco: "250",
      type: "image/jpg",
      url: "/images/4.jpg",
      filter: "camisa",
    },
    {
      name: "Camisetas gola careca de malha",
      preco: "60",
      type: "image/jpg",
      url: "/images/5.jpg",
      filter: "camiseta",
    },
  ];
  res.json(imageMetadata);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
