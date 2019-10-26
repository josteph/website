import React, { useEffect, useRef } from 'react';

const Home = props => {
  const vantaEffect = useRef();
  const myRef = useRef();

  useEffect(() => {
    if (!vantaEffect.current) {
      vantaEffect.current = window.VANTA.NET({
        el: myRef.current,
        color: 0x0,
        backgroundColor: 0xffffff,
        points: 15.0,
      });
    }

    return () => {
      if (vantaEffect.current) vantaEffect.current.destroy();
    };
  }, [vantaEffect]);

  return (
    <div id="home" className="home-container" ref={myRef}>
      <p>Foreground content goes here</p>
    </div>
  );
};

export default Home;
