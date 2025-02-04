import React from 'react';
import styles from '../styles/About.module.css';

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.parent}>
        {/* Vertical Text Section */}
        <div className={styles.verticalSection}>
          <div className={styles.verticalText}>
            Hire<span className={styles.highlight}>Sync</span> Services
          </div>
        </div>

        {/* Main Title */}
        <div className={styles.mainTitle}>
          About <span className={styles.highlight}>US</span>
        </div>

        {/* About Content */}
        <div className={styles.aboutContent}>
          <p className={styles.description}>
            👋 Welcome to <span className={styles.highlight}>HireSync</span>, where passion meets innovation! 
            I'm a skilled developer specializing in the MERN stack, ready to tackle projects of any scale.
          </p>
          <p className={styles.description}>
            Armed with a strong foundation in Computer Science and a flair for creativity, 
            I take pride in delivering polished, user-friendly solutions.
          </p>
          <p className={styles.description}>
            Ready to turn your ideas into something amazing? Let's connect and create magic together!
          </p>
        </div>

        {/* Skills Section */}
        <div className={styles.skillsSection}>
          <h2 className={styles.sectionTitle}>Technical Expertise</h2>
          <ul className={styles.achievementList}>
            <li>Frontend: React, Next.js</li>
            <li>Backend: Node.js, MongoDB</li>
            <li>DevOps: Docker, AWS</li>
            <li>APIs: REST, GraphQL</li>
          </ul>
        </div>

        {/* Achievements Section */}
        <div className={styles.achievementsSection}>
          <h2 className={styles.sectionTitle}>Our Impact</h2>
          <ul className={styles.achievementList}>
            <li>1850+ Visitors</li>
            <li>12+ Projects</li>
            <li>425+ Feedbacks</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;