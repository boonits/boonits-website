import React from 'react'
import Link from 'next/link';
import { linkStyles } from '../styles';

const Navbar = () => {
  return (
    <nav className="w-full bg-neutral p-4">
      <div className="flex justify-between items-center mx-auto">
        <div>
          <Link href="/" className={linkStyles}>Katherine Biewer</Link>
        </div>
        <div className="space-x-4">
          <Link href="/blog" className={linkStyles}>Blog</Link>
          <Link href="/contact" className={linkStyles}>Contact Me</Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar