import React, {useEffect, useRef} from 'react';
import Button from '../components/Button';
import arrow from '../assets/line-md_chevron-up.svg';
import listik from '../assets/listik.svg';
import {gsap} from 'gsap';
import {ScrollToPlugin} from 'gsap/ScrollToPlugin';
import {CustomEase} from 'gsap/all';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import {mobileDevice} from '../utils';
import '../styles/BoyGirl.scss';
gsap.registerPlugin(ScrollToPlugin);
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(CustomEase);
function BoyGirl() {
  const ref = useRef(null);
  const scrollToDetails = () => {
    gsap.to(window, {
      duration: 1,
      scrollTo: document.querySelector('.details'),
    });
  };
  useEffect(() => {
    gsap.set('.block-boy-girl', {
      scale: 1 + window.innerHeight * 0.001,
      y:
        mobileDevice() === 'pc'
          ? window.innerHeight * 0.2
          : window.innerWidth * 0.2,
      // x: window.innerWidth * 0.2,
    });
    gsap.to('.wrapper', {
      opacity: 1,
      duration: 3,
    });
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.boygirl',
        start: 'top 50%',
        end: '+=' + window.innerHeight * 1,
        scrub: true,
      },
    });

    tl.to('.block-boy-girl', {
      scale: 1,
      duration: 5,
      y: '40vh',
      ease: 'power1.inOut',
    });
  }, []);
  return (
    <section className="boygirl">
      <div className="block-boywrapper">
        <div className="block-boy-girl">
          <img className="listik left" src={listik} />

          <div className="invitation">Invitation on gender reveal</div>
          <div className="boygirltext">
            <span>Boy</span> <span>or</span>{' '}
            <span>
              Girl<b>?</b>
            </span>
          </div>
        </div>
      </div>
      <div className="deatfriends" ref={ref}>
        Dear Friends!
      </div>
      {mobileDevice() === 'pc' ? (
        <div className="wewould">
          We would like to share a special moment with you – the
          <br />
          gender reveal of our future baby
        </div>
      ) : (
        <div className="wewould">
          We would like to share a special moment
          <br /> with you – the gender reveal of our future <br />
          baby
        </div>
      )}
      <Button />
      <button className="scrollbtn" onClick={scrollToDetails}>
        <span>Scroll for details</span>
        <img src={arrow} />
      </button>
      <img className="listik right" src={listik} />
    </section>
  );
}

export default BoyGirl;
