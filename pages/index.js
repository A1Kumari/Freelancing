import Head from 'next/head';
import styles from '../styles/Home.module.css';
import HomePage from './Home';
import ContactForm from './Contact';
import Services from './Services';
import Project from './Project';
import Pricing from './Pricing';
import About from './About';

export default function Home() {
  return (
    <>
    <HomePage/>
    <About/>
    <Services/>
    {/* <Project/> */}
    <Pricing/>
    <ContactForm/>
    </>
  );
}
