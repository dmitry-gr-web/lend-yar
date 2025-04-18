import React, {useRef, useEffect} from 'react';
import gsap from 'gsap';
import listik from '../assets/Listik.svg';
const FallingLeaf = () => {
  const leafRef = useRef(null);

  useEffect(() => {
    const drop = () => {
      const leaf = leafRef.current;
      const wrapper = document.querySelector('.wrapper');
      const targetY = wrapper.offsetHeight + 300;

      const startX = gsap.utils.random(
        0,
        document.querySelector('.wrapper').offsetWidth,
      );
      const duration = 30;

      // создаём Timeline с автозапуском drop() по окончании
      const tl = gsap.timeline({
        onComplete: drop,
        repeat: -1,
      });

      // сбрасываем начальные свойства
      tl.set(leaf, {
        x: startX,
        y: -100,
        rotation: gsap.utils.random(-180, 180),
        opacity: 1,
        scale: gsap.utils.random(0.8, 1.2),
      });

      // вертикальный Tween: чистое падение
      tl.to(
        leaf,
        {
          y: targetY,
          duration,
          ease: 'none',
        },
        0,
      );
      tl.to(
        leaf,
        {
          x: `+=${gsap.utils.random(-120, 120)}`,
          duration: 4,
          ease: 'sine.inOut',
          yoyo: true,
          repeat: Math.floor(duration / 1.5),
        },
        0,
      );
      tl.to(
        leaf,
        {
          rotation: `+=${gsap.utils.random(45, 85)}`,
          duration: 5,
          ease: 'sine.inOut',
          yoyo: true,
          repeat: Math.floor(duration / 2),
        },
        0,
      );
      tl.to(
        leaf,
        {
          opacity: 0,
          scale: 0.5,
          duration: duration,
          ease: 'power1.in',
        },
        0,
      );
    };

    drop();
  }, []);

  return <img ref={leafRef} className="listik-down" src={listik} />;
};

export default FallingLeaf;
