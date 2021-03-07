import React from 'react';

const Header = () => {
  return (
    <header className="navbar">
      <div className="nav-wrapper">
        <div className="nav-logo">
          <a href="/">Josteph</a>
        </div>
        <ul className="nav-link">
          <li className="nav-item">
            <a href="/">Home</a>
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
