import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="navbar">
      <div className="nav-wrapper">
        <div className="nav-logo">
          <Link href="/">Josteph</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
