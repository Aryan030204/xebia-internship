const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const Product = require("./models/Product");

const app = express();
app.use(bodyParser.json());

// MongoDB connection
mongoose
  .connect("mongodb://localhost:27017/store", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error(err));

app.get("/", (req, res) => {
  res.send("Server is up and running");
});

// create
app.post("/products", async (req, res) => {
  try {
    const newproduct = new Product(req.body);
    await newproduct.save();
    res.status(201).send(product);
  } catch (err) {
    res.status(400).send(err);
  }
});

// get all
app.get("/products", async (req, res) => {
  try {
    const products = await Product.find();
    res.send(products);
  } catch (err) {
    res.status(500).send(err);
  }
});

// get by id
app.get("/products/:id", async (req, res) => {
  try {
    const foundproduct = await Product.findById(req.params.id);
    if (!foundproduct) return res.status(404).send("Not found");
    res.send(foundproduct);
  } catch (err) {
    res.status(500).send(err);
  }
});

// Put
app.put("/products/:id", async (req, res) => {
  try {
    const existingproduct = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!existingproduct) return res.status(404).send("Not found");
    res.send(product);
  } catch (err) {
    res.status(400).send(err);
  }
});

// Delete
app.delete("/products/:id", async (req, res) => {
  try {
    const existingproduct = await Product.findByIdAndDelete(req.params.id);
    if (!existingproduct) return res.status(404).send("Not found");
    res.send({ message: "Deleted successfully" });
  } catch (err) {
    res.status(500).send(err);
  }
});

app.listen(3000, () => console.log("Server running on port 3000"));
