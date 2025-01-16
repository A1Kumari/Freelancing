import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .send(
        "service_nomhp9l", // Replace with your Service ID
        "template_6oo4fqa", // Replace with your Template ID
        formData,
        "AJqxG1zH8nWVt5S5X" // Replace with your Public Key
      )
      .then(
        (result) => {
          console.log(result.text);
          setStatus("Message sent successfully!");
          setFormData({ user_name: "", user_email: "", message: "" }); // Clear the form
        },
        (error) => {
          console.error(error.text);
          setStatus("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <div style={{ maxWidth: "400px", margin: "0 auto", padding: "20px" }}>
      <h2>Contact Us</h2>
      <form onSubmit={sendEmail}>
        <div>
          <label htmlFor="user_name">Name:</label>
          <input
            type="text"
            id="user_name"
            name="user_name"
            value={formData.user_name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="user_email">Email:</label>
          <input
            type="email"
            id="user_email"
            name="user_email"
            value={formData.user_email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button type="submit">Send</button>
      </form>
      {status && <p>{status}</p>}
    </div>
  );
};

export default ContactForm;
