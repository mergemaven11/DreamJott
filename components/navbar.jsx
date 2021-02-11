import React from 'react';
import Link from 'next/link';

export default function Navbar() {
  return (
    <div>
      <Link href="/about">
        <a>About</a>
      </Link>
      <Link href="/">
        <a>Home</a>
      </Link>
    </div>
  );
}
