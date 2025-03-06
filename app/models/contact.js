
import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({
  fullname: {
    type: String,
    required: [true, "Name is required"],
    trim: true
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    trim: true
  },
  subject: {
    type: String,
    default: "No Subject"
  },
  message: {
    type: String,
    required: [true, "Message is required"],
    trim: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Check if the model is already defined to prevent OverwriteModelError
const Contact = mongoose.models.Contact || mongoose.model("Contact", contactSchema);

export default Contact;