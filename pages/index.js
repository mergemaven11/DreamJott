import React from 'react';

import Head from 'next/head';

import styles from '../styles/Home.module.css';

// Component Imports

import Navbar from '../components/navbar';

export default function Home() {
  return (
    <>
      <Navbar />

      <div className={styles.container}>
        <Head>
          <title>DreamJott</title>

          <link rel="icon" href="/favicon.ico" />
        </Head>

        {/* Navbar here */}

        <h1>Login Prompt</h1>
      </div>
    </>
  );
}
