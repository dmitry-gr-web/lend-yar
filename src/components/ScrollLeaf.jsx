import React, {useRef, useEffect} from 'react';
import gsap from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import listik from '../assets/Listik.svg';

gsap.registerPlugin(ScrollTrigger);

const ScrollLeaf = ({position = 'right'}) => {
  const leafRef = useRef(null);

  useEffect(() => {
    const leaf = leafRef.current;
    gsap.set(leaf, {
      // x: window.innerWidth * 0.3,
      x: gsap.utils.random(0, window.innerWidth),
      y: 0,
      rotation: gsap.utils.random(-200, 200),
      scale: gsap.utils.random(0.8, 1.2),
    });
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: 'body',
        start: `top top`,
        end: `bottom bottom`,
        scrub: 1.3,
        markers: false,
      },
    });
    const totalHeight = document.body.scrollHeight * 0.1;
    tl.to(
      leaf,
      {
        y: `+=${totalHeight}`,
        x: gsap.utils.random(0, window.innerWidth),
        rotation: gsap.utils.random(180, 360),
        opacity: 1,
        ease: 'none',
      },
      0,
    );

    return () => {
      ScrollTrigger.getAll().forEach(st => st.kill());
    };
  }, [position]);

  return (
    <img ref={leafRef} className="listik-scroll" src={listik} alt="Листик" />
  );
};

export default ScrollLeaf;
