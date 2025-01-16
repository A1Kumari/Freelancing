// pages/Pricing.js
import React from 'react';
import useTiltEffect from '../components/cursorAnimation';
import styles from '../styles/Pricing.module.css';

const Pricing = () => {
  const basicPlanRef = useTiltEffect();
  const premiumPlanRef = useTiltEffect();

  return (
    <div className={styles.pricingContainer}>
      <h1 className={styles.mainHeading}>Our Pricing Plans</h1>
      <div className={styles.gridContainer}>
        <div ref={basicPlanRef} className={styles.pricingBox}>
          <h2 className={styles.planTitle}>Basic Plan</h2>
          <p className={styles.planPrice}>$10/month</p>
          <ul className={styles.planFeatures}>
            <li>Access to all basic tutorials</li>
            <li>Community support</li>
            <li>Weekly updates</li>
            <li>Access to blog posts</li>
          </ul>
          <a href="#contact" className={styles.btn}>Choose Plan</a>
        </div>
        <div ref={premiumPlanRef} className={styles.pricingBox}>
          <h2 className={styles.planTitle}>Premium Plan</h2>
          <p className={styles.planPrice}>$25/month</p>
          <ul className={styles.planFeatures}>
            <li>All features of the Basic Plan</li>
            <li>One-on-one mentoring</li>
            <li>Access to premium content</li>
            <li>Early access to new tutorials</li>
            <li>Exclusive webinars and Q&A sessions</li>
          </ul>
          <a href="#contact" className={styles.btn}>Choose Plan</a>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
