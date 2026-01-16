const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
  first_name: { type: String },
  last_name: { type: String },
  email: { type: String },
  phone: { type: String },
  address: { type: String },
});

// 3rd argument = exact collection name
const Contact = mongoose.model("Contact", contactSchema, "Contacts");

module.exports = Contact;
