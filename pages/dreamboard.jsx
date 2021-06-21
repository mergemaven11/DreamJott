import React from 'react';
import Navbar from '../components/Common/Navbar';

const styles = {
  wrapper: {
    backgroundColor: '#ffffff',
    padding: '120px',
    height: '1135px',
    margin: '15px',
  },
  cardContainer: {
    display: 'flex',
    flexFlow: 'row wrap',
  },
};

export default function DreamBoard() {
  return (
    <>
      <Navbar />
      <div style={styles.wrapper}>
        <h2>DreamBoard</h2>
      </div>
    </>
  );
}
