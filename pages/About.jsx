import React from 'react';
import styles from '../styles/About.module.css';

export default function About() {
  return (
    <>
    <div className={styles.container}>
      <div className={styles.verticalText}>
        About <span className={styles.highlight}>MasterPiece</span>
      </div>

      <div className={styles.section}>
        <h2 className={styles.subheading}>About Me</h2>
        <p className={styles.description}>
          👋 Hello, I'm <span className={styles.highlight}>[Your Name]</span>! I'm a Full-Stack Developer specializing in the MERN stack. My journey into tech began with a deep curiosity and passion for creating innovative solutions. With a strong background in Computer Science, I've worked on a variety of projects, from small business websites to complex web applications.
        </p>
        <p className={styles.description}>
          My goal is to empower businesses by delivering solutions that enhance user experience and streamline operations. I'm dedicated to continuous learning and keeping up with the latest tech trends. I prioritize client satisfaction through clear communication and delivering on my promises.
        </p>
        <p className={styles.description}>
          My core values include integrity, quality, innovation, and collaboration. Outside of work, I'm a gamer and a music enthusiast, enjoying <span className={styles.highlight}>[instrument]</span> and various genres. I also love hiking and exploring nature.
        </p>
        <p className={styles.description}>
          Let's connect! I'm always open to new opportunities and collaborations. Find me on <span className={styles.highlight}>LinkedIn, GitHub,</span> or <span className={styles.highlight}>Twitter</span>.
        </p>
      </div>

      <div className={styles.section}>
        <h2 className={styles.subheading}>Tech Stack Expertise</h2>
        <ul className={styles.techList}>
          <li><span className={styles.highlight}>Frontend:</span> React, Next.js, HTML5, CSS3, JavaScript</li>
          <li><span className={styles.highlight}>Backend:</span> Node.js, Express, MongoDB, MySQL</li>
          <li><span className={styles.highlight}>DevOps:</span> Docker, AWS, Heroku, CI/CD</li>
          <li><span className={styles.highlight}>APIs:</span> REST, GraphQL</li>
          <li><span className={styles.highlight}>Design Tools:</span> Figma, Adobe XD, Sketch</li>
          <li><span className={styles.highlight}>Machine Learning:</span> Python, TensorFlow, scikit-learn</li>
        </ul>
      </div>

    </div>
        <ul className={styles.achievementList}>
          <li>1850+ Visitors</li>
          <li>12+ Freelance Projects</li>
          <li>$400+ Earnings</li>
          <li>425+ Positive Feedbacks</li>
        </ul>
    </>
  );
}
