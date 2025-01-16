import React from 'react'
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Project.module.css';
import { motion } from 'framer-motion';
import useTiltEffect from '../components/cursorAnimation';

function Project() {
  const box1Ref = useTiltEffect();
  const box2Ref = useTiltEffect();
  const box3Ref = useTiltEffect();
  const box4Ref = useTiltEffect();
  const box5Ref = useTiltEffect();

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
          <motion.div
            className={`${styles.box} ${styles.box1}`}
            initial="hidden"
            animate="visible"
            variants={fadeInVariants}
            transition={{ delay: 0.2 }}
            ref={box1Ref}
          >
            <h2 className={styles.heading2}>Frontend Development</h2>
            <Image src="/image/img1.jpeg" width={400} height={250} className={styles.img} alt="Frontend Development" />
            <p>Creating captivating and responsive UI using modern frontend technologies such as HTML, CSS, JavaScript, and frameworks like React.js.</p>
          </motion.div>
          <motion.div
            className={`${styles.box} ${styles.box2}`}
            initial="hidden"
            animate="visible"
            variants={fadeInVariants}
            transition={{ delay: 0.4 }}
            ref={box2Ref}
          >
            <h2 className={styles.heading2}>Backend Development</h2>
            <Image src="/image/img2.jpeg" width={400} height={250} className={styles.img} alt="Backend Development" />
            <p>Building scalable and secure backend systems using frameworks like Express.js and Laravel, with robust APIs and authentication mechanisms.</p>
          </motion.div>
          <motion.div
            className={`${styles.box} ${styles.box3}`}
            initial="hidden"
            animate="visible"
            variants={fadeInVariants}
            transition={{ delay: 0.6 }}
            ref={box3Ref}
          >
            <h2 className={styles.heading2}>Machine Learning</h2>
            <Image src="/image/img3.jpeg" width={400} height={250} className={styles.img} alt="Machine Learning" />
            <p>Expertise in advanced techniques such as NLP and deep learning to drive strategic decision-making and optimize business processes.</p>
          </motion.div>
          <motion.div
            className={`${styles.box} ${styles.box4}`}
            initial="hidden"
            animate="visible"
            variants={fadeInVariants}
            transition={{ delay: 0.8 }}
            ref={box4Ref}
          >
            <h2 className={styles.heading2}>Custom Solutions</h2>
            <Image src="/image/img4.jpeg" width={400} height={250} className={styles.img} alt="Custom Solutions" />
            <p>Tailored solutions to meet unique project requirements and deliver exceptional results tailored to client needs.</p>
          </motion.div>
          <motion.div
            className={`${styles.box} ${styles.box5}`}
            initial="hidden"
            animate="visible"
            variants={fadeInVariants}
            transition={{ delay: 1.0 }}
            ref={box5Ref}
          >
            <h2 className={styles.heading2}>New Project Box</h2>
            <Image src="/image/img5.jpeg" width={400} height={250} className={styles.img} alt="New Project" />
            <p>Description for the new project or feature. Highlight unique aspects and key benefits.</p>
          </motion.div>
        </div>
      </div>
    </>
  )
}

export default Project
