import React from 'react';
import Link from 'next/link';

export default function Navbar() {
  return (
    <div>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
      <Link href="/dreams">
        <a>Jott Board</a>
      </Link>
      <Link href="/api/auth/signin">
        <a>Signup</a>
      </Link>
    </div>
  );
}
