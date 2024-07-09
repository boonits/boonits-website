import React from 'react'
import Link from 'next/link';
import { boldFont } from '../styles';

const linkStyles = `text-base-100 text-lg ${boldFont.className}`;

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