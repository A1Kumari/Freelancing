import React, { useRef, useState } from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import styles from "../styles/HomePage.module.css";
import Heroimg from "../public/assests/heroimg.jpg";
import Image from 'next/image';

function HomePage() {
  const containerRef = useRef(null);
  const [isContentVisible, setContentVisible] = useState(false);

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

  const handleArrowClick = () => {
    setContentVisible(!isContentVisible);
  };

  return (
    <>
      <Head>
        <title>HireSync</title>
      </Head>
      <div className={styles.container} ref={containerRef} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
        <Navbar />
        
        <div className={styles.blueSection}>
          <div className={styles.introContent}>
            <h1 className={styles.coolHeading}>Transform Your Ideas into Reality with<span className={styles.highlight}>Expert Freelancing</span></h1>
            <p className={styles.introText}>Hire skilled professionals to bring your projects to life. Let's build something amazing together!</p>
          </div>
          <div className={styles.rightContent}>
            <div className={styles.imagesSection}>
              <Image src={Heroimg} width={500} height={500} alt="Picture of the author" className={styles.image} />
            </div>
            <button className={styles.arrowButton} onClick={handleArrowClick}>
              Get Started
            </button>
          </div>
          
        </div>
        
      </div>
    </>
  )
}

export default HomePage;
