// pages/
import React from 'react';
import { signIn, signOut, useSession } from 'next-auth/client';
// Component Imports
import Button from '@material-ui/core/Button';
import Navbar from '../components/navbar';
import styles from '../styles/Home.module.css';

export default function Home() {
  const [session, loading] = useSession();

  if (loading) {
    return <p>Loading...</p>;
  }
  const title = (
    <h1
      style={{
        fontFamily: 'Concert One, cursive',
        color: '#28A7E5',
        fontSize: '2em',
      }}
    >
      {' '}
      Get started!
    </h1>
  );

  return (
    <>
      <Navbar />
      <div
        style={{
          backgroundImage: 'url(/dj-bg.png)',
          height: '100%',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
        className={styles.container}
      >
        {title}
        {!session && (
          <>
            <br />
            <Button color="primary" onClick={signIn}>
              Sign in
            </Button>
          </>
        )}
        {session && (
          <>
            Signed in as
            {session.user.email}
            <br />
            <Button color="primary" onClick={signOut}>
              Sign out
            </Button>
          </>
        )}
      </div>
    </>
  );
}
