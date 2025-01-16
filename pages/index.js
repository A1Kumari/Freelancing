import Head from 'next/head';
import styles from '../styles/Home.module.css';
import HomePage from './Home';
import ContactForm from './Contact';

export default function Home() {
  return (
    <>
    <HomePage/>
    <ContactForm/>
    </>
  );
}
