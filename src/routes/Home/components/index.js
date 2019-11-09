import React, { useEffect, useRef } from 'react';

const Home = () => {
  const vantaEffect = useRef();
  const myRef = useRef();

  useEffect(() => {
    if (!vantaEffect.current) {
      vantaEffect.current = window.VANTA.NET({
        el: myRef.current,
        color: 0x33b377,
        backgroundColor: 0x100c22,
        points: 15.0,
      });
    }

    return () => {
      if (vantaEffect.current) vantaEffect.current.destroy();
    };
  }, [vantaEffect]);

  return (
    <div className="home-container" ref={myRef}>
      <div className="foreground-container"></div>
    </div>
  );
};

export default Home;
