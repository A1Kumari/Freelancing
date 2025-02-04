import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Project.module.css';
import { motion } from 'framer-motion';
import useTiltEffect from '../components/cursorAnimation';

function Project() {
  const boxRefs = [useTiltEffect(), useTiltEffect(), useTiltEffect(), useTiltEffect(), useTiltEffect()];

  const fadeInVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8, ease: 'easeOut',
      },
    },
  };

  const projects = [
    {
      title: 'Frontend Development',
      description:
        'Creating captivating and responsive UI using modern frontend technologies such as HTML, CSS, JavaScript, and frameworks like React.js.',
      github: 'https://github.com/yourusername/frontend-project',
      demo: 'https://frontend-demo.com',
    },
    {
      title: 'Backend Development',
      description:
        'Building scalable and secure backend systems using frameworks like Express.js and Laravel, with robust APIs and authentication mechanisms.',
      github: 'https://github.com/yourusername/backend-project',
      demo: 'https://backend-demo.com',
    },
    {
      title: 'Machine Learning',
      description:
        'Expertise in advanced techniques such as NLP and deep learning to drive strategic decision-making and optimize business processes.',
      github: 'https://github.com/yourusername/ml-project',
      demo: 'https://ml-demo.com',
    },
    {
      title: 'Custom Solutions',
      description:
        'Tailored solutions to meet unique project requirements and deliver exceptional results tailored to client needs.',
      github: 'https://github.com/yourusername/custom-solutions',
      demo: 'https://custom-demo.com',
    },
    {
      title: 'New Project',
      description:
        'Description for the new project or feature. Highlight unique aspects and key benefits.',
      github: 'https://github.com/yourusername/new-project',
      demo: 'https://newproject-demo.com',
    },
  ];

  return (
    <>
      <Head>
        <title>Projects | HireSync</title>
      </Head>
      <div className={styles.projectContainer}>
        <motion.h1
          className={styles.mainHeading}
          initial="hidden"
          animate="visible"
          variants={fadeInVariants}
        >
          My <span className={styles.highlight}>MasterPiece</span>
        </motion.h1>
        <div className={styles.gridContainer}>
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className={`${styles.box} ${styles[`box${index + 1}`]}`}
              initial="hidden"
              animate="visible"
              variants={fadeInVariants}
              transition={{ delay: 0.2 * (index + 1) }}
              ref={boxRefs[index]}
            >
              <h2 className={styles.heading2}>{project.title}</h2>
              <p>{project.description}</p>
              <div className={styles.links}>
                <a href={project.github} target="_blank" rel="noopener noreferrer">GitHub</a>
                <a href={project.demo} target="_blank" rel="noopener noreferrer">Live Demo</a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Project;
