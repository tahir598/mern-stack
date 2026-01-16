const express = require("express");
const mongoose = require("mongoose");
const Contact = require("./models/contact.models");

// data con
mongoose
  .connect("mongodb://127.0.0.1:27017/contacts-crud")
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error(err));

const app = express();
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));

app.get("/", async (req, res) => {
  const contacts = await Contact.find();
  res.json(contacts);
  // res.render("home");
});
app.get("/show-contact", (req, res) => {
  res.render("show-contact");
});

app.get("/add-contact", (req, res) => {
  res.render("add-contact");
});
app.post("/add-contact", (req, res) => {});

app.get("/update-contact", (req, res) => {
  res.render("update-contact");
});
app.post("/update-contact", (req, res) => {});

app.get("/delete-contact/:id", (req, res) => {});
