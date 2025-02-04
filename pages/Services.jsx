import React from "react";
import styles from "../styles/Services.module.css"; // Import the CSS file

function Services() {
  const services = [
    { title: "MERN Website Development", description: "Build modern and scalable websites using the MERN stack." },
    { title: "PHP Laravel Development", description: "Develop robust applications with PHP and Laravel framework." },
    { title: "API Integration", description: "Seamlessly integrate APIs to enhance functionality." },
    { title: "ML Model Integration", description: "Incorporate machine learning models into your applications." },
    { title: "Deployment Services", description: "Deploy your projects on secure and reliable platforms." },
    { title: "Performance Optimization", description: "Enhance your application's speed and efficiency." },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.servicesHeading}>
        <h2>Our Services</h2>
      </div>
      <div className={styles.servicesContainer}>
      {services.map((service, index) => (
        <div className={styles.serviceBox} key={index}>
          <h3>{service.title}</h3>
          <p>{service.description}</p>
          <div className={styles.bottomBorder}></div>
        </div>
      ))}
      </div>
    </div>
  );
}

export default Services;
