import React, { useEffect, useRef, useState } from 'react';
import appIcon from '@assets/top-logo.svg';
import linkedInIcon from '@assets/linkedin.svg';

const Home = () => {
  const [initLoading, setInitLoading] = useState(true);
  const vantaEffect = useRef();
  const pollTimer = useRef();
  const mainContainer = useRef();

  useEffect(() => {
    const initVanta = () => {
      if (!window.THREE || !window.VANTA) {
        return null;
      }

      return window.VANTA.NET({
        el: mainContainer.current,
        color: 0x33b377,
        backgroundColor: 0x100c22,
        points: 15.0,
      });
    };

    if (!vantaEffect.current) {
      const firstTryInit = initVanta();

      if (firstTryInit) {
        vantaEffect.current = firstTryInit;
        setInitLoading(false);
      } else {
        pollTimer.current = setInterval(() => {
          const initPollAgain = initVanta();

          if (initPollAgain) {
            vantaEffect.current = initPollAgain;
            setInitLoading(false);
            clearInterval(pollTimer.current);
          }
        }, 250);
      }
    }

    return () => {
      if (vantaEffect.current) vantaEffect.current.destroy();
      if (pollTimer.current) pollTimer.current.destroy();
    };
  }, []);

  const renderContent = () => {
    return (
      <div className="foreground-container">
        <div className="desktop-sidenav">
          <img src={appIcon} alt="JS" className="logo" />
          <div className="social-icons">
            <a href="https://www.linkedin.com/in/josteph22/" target="_blank" rel="noopener noreferrer">
              <img src={linkedInIcon} alt="LinkedIn" />
            </a>
          </div>
        </div>
        <div className="main-content">
          <h1>
            JOSHUA
            <br />
            STEPHEN
          </h1>
          <h3>Front-End Developer</h3>
          <p>
            Hello, pleased to meet you! I am a developer, focusing on frontend.
            <br />
            Though I have handled several full stack projects as well.
            <br />I mainly use <strong>React</strong> to code the frontend, though <strong>Vue</strong> is also an
            option for me.
            <br />I like to explore interesting stuffs, like <strong>GraphQL</strong>, configuring <strong>SSR</strong>{' '}
            stacks, and deep dive JS topics.
            <br />
            <br />
            Proudly saying, I&apos;m currently working in <strong>Tokopedia</strong>.
            <br />
            <br />
            <strong>
              Feel free to reach me anytime!
              <br />
              Would like to know more about you as well.
            </strong>
          </p>
        </div>
      </div>
    );
  };

  return (
    <div className="home-container" ref={mainContainer}>
      {!initLoading && renderContent()}
    </div>
  );
};

export default Home;
