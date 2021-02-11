// pages/
import React from 'react';
import { signIn, signOut, useSession } from 'next-auth/client';
// Component Imports
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
            <h1> Please Signup or Loginin </h1>
            <br />
            <button onClick={signIn}>Sign in</button>
          </>
        )}
        {session && (
          <>
            Signed in as
            {session.user.email} 
{' '}
<br />
            <button onClick={signOut}>Sign out</button>
          </>
        )}
      </div>
    </>
  );
}
