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

  return (
    <>
      <Navbar />
      <div className={styles.container}>
        {!session && (
          <>
            <h1> Please Signup or Login in </h1>
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
