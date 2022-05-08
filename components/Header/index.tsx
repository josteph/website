import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="navbar">
      <nav className="nav-wrapper">
        <div className="nav-logo">
          <Link href="/">Josteph</Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
