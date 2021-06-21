// pages/dashboard.jsx
import React from 'react';
import { getSession } from 'next-auth/client';

// const styles = {
//   wrapper: {
//     backgroundColor: '#ffffff',
//   },
// };

export default function Dashboard({ user }) {
  return (
    <div style={styles.wrapper}>
      <h1>Dashboard</h1>
      <p>
        Welcome,
        {user.email}
      </p>
    </div>
  );
}
export async function getServerSideProps(ctx) {
  const session = await getSession(ctx);
  if (!session) {
    ctx.res.writeHead(302, { Location: '/' });
    ctx.res.end();
    return {};
  }

  return {
    props: {
      user: session.user,
    },
  };
}


