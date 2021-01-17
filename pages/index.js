import React from 'react';
import { GitHub, Twitter, Linkedin } from 'react-feather';
import { styMainContainer, styMainInfo, styContactInfo } from '@styles/home.page.module.scss';

export default function Home() {
  return (
    <main className={styMainContainer}>
      <div className={styMainInfo}>
        <h1>Joshua Stephen</h1>
        <h3>
          Software Engineer
          <br />
          Web Platform
        </h3>
        <p className="text-secondary">
          Hello, pleased to meet you!
          <br />
          I mainly deal with Javascript and stuffs related with web.
          <br />
          Currently working at <a href="https://www.tokopedia.com">Tokopedia</a> in the web platform team.
          <br />
          <br />
          Feel free to reach me anytime and have a nice chat together 🍻
        </p>
      </div>
      <div className={`${styMainInfo} ${styContactInfo}`}>
        <h1>Get In Touch</h1>
        <p className="text-secondary">
          The universe is a pretty big place.
          <br />
          You can find me on:
          <ul>
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
            <li>
              <a href="https://www.linkedin.com/in/josteph22/">
                <Linkedin /> @josteph22
              </a>
            </li>
          </ul>
        </p>
      </div>
    </main>
  );
}
