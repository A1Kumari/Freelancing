import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import styles from "../styles/Contact.module.css"; // Create a corresponding CSS file for styling

const ContactForm = () => {
  const containerRef = useRef(null);
  const handleMouseMove = (e) => {
    const { offsetX, offsetY, target } = e.nativeEvent;
    const { clientWidth, clientHeight } = target;

    const tiltX = ((offsetY - clientHeight / 2) / clientHeight) * 15;
    const tiltY = ((offsetX - clientWidth / 2) / clientWidth) * -15;

    containerRef.current.style.transform = `rotateX(${tiltX}deg) rotateY(${tiltY}deg)`;
  };

  const handleMouseLeave = () => {
    containerRef.current.style.transform = 'rotateX(0deg) rotateY(0deg)';
  };
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });
  const [status, setStatus] = useState("");
  const formRef = useRef(null);

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
        () => {
          setStatus("Message sent successfully!");
          setFormData({ user_name: "", user_email: "", message: "" });
        },
        () => {
          setStatus("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <div
    className={styles.container} ref={containerRef} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}
    >
      <h2 className={styles.heading}>Contact Us</h2>
      <form onSubmit={sendEmail} className={styles.form}>
        <div className={styles.formGroup}>
          <label htmlFor="user_name">Name</label>
          <input
            type="text"
            id="user_name"
            name="user_name"
            value={formData.user_name}
            onChange={handleChange}
            placeholder="Enter your name"
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="user_email">Email</label>
          <input
            type="email"
            id="user_email"
            name="user_email"
            value={formData.user_email}
            onChange={handleChange}
            placeholder="Enter your email"
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Write your message"
            required
          ></textarea>
        </div>
        <button type="submit" className={styles.submitButton}>
          Send
        </button>
      </form>
      {status && <p className={styles.statusMessage}>{status}</p>}
    </div>
  );
};

export default ContactForm;
