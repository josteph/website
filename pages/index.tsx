import React from 'react';
import { GitHub, Twitter, Linkedin } from 'react-feather';
import styles from '@styles/home.page.module.scss';

export default function Home() {
  return (
    <main className="main-container">
      <div className={styles.styMainInfo}>
        <h1>
          Hi, I am <span className="main-gradient">Joshua</span>
        </h1>
        <h3 className="main-gradient">
          Software Engineer
          <br />
          Web Platform
        </h3>
        <p className="text-secondary">
          Pleased to meet you!
          <br />
          I mainly deal with Javascript and stuffs related with web.
          <br />
          Currently building great stuffs with the awesome team at <a href="https://www.tokopedia.com">Tokopedia</a>.
          <br />
          <br />
          Feel free to reach me anytime to have a nice chat together 🍻
        </p>
      </div>
      <div className={`${styles.styMainInfo} ${styles.styContactInfo}`}>
        <h2 className="main-gradient">Get In Touch</h2>
        <p className="text-secondary">
          The universe is a pretty big place.
          <br />
          You can find me on:
          <ul>
            <li>
              <a href="https://www.linkedin.com/in/josteph22/">
                <Linkedin /> @josteph22
              </a>
            </li>
            <li>
              <a href="https://github.com/josteph">
                <GitHub /> @josteph
              </a>
            </li>
            <li>
              <a href="https://twitter.com/jostephhh">
                <Twitter /> @jostephhh
              </a>
            </li>
          </ul>
        </p>
      </div>
    </main>
  );
}
