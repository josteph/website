import React, { useEffect, useRef, useState } from 'react';

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
        }, 500);
      }
    }

    return () => {
      if (vantaEffect.current) vantaEffect.current.destroy();
      if (pollTimer.current) pollTimer.current.destroy();
    };
  }, []);

  return (
    <div className="home-container" ref={mainContainer}>
      {!initLoading && <div className="foreground-container"></div>}
    </div>
  );
};

export default Home;
