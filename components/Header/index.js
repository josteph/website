import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="navbar">
      <div className="nav-wrapper">
        <div className="nav-logo">
          <Link href="/">
            <a>Josteph</a>
          </Link>
        </div>
        <ul className="nav-link">
          <li className="nav-item">
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          {/* <li className="nav-item">
            <Link href="/blog">
              <a>Blog</a>
            </Link>
          </li> */}
        </ul>
      </div>
    </header>
  );
};

export default Header;
