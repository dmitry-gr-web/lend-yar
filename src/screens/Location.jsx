import React, {useEffect} from 'react';
import LocationButton from '../components/LocationButton';
import circlelist from '../assets/CircleListik.svg';
import Rectangle7 from '../assets/Rectangle 7.png';
import Rectangle8 from '../assets/Rectangle 8.png';
import Rectangle9 from '../assets/Rectangle 9.png';
import Frame286 from '../assets/Frame 286.png';
import '../styles/Location.scss';
import gsap from 'gsap';
import {CustomEase} from 'gsap/all';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import {mobileDevice} from '../utils';
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(CustomEase);
function Location() {
  useEffect(() => {
    gsap.set('.requestsleft', {
      x: -window.innerWidth * 0.2,
      // y: window.innerHeight * 0.2,
      opacity: 0,
    });
    gsap.set('.locationimages img', {
      filter: 'grayscale(1) blur(2px)',
      // y: window.innerHeight * 0.2,
      // opacity: 0,
    });
    gsap.to(
      '.location .locationwrapper',
      {
        opacity: 1,
        ease: CustomEase.create('custom', 'M0,0,C0,0,1,1,1,1'),
        stagger: 0.01,
        scrollTrigger: {
          trigger: '.timer',
          start: `top 20%`,
          start: mobileDevice() === 'pc' ? `top 20%` : 'top -50%',
          end: `+=300px`,
          scrub: true,
        },
      },
      0,
    );
    gsap.to('.locationimages img', {
      // x: 0,
      // y: 0,
      // opacity: 1,
      filter: 'grayscale(0) blur(0px)',
      ease: CustomEase.create('custom', 'M0,0,C0,0,1,1,1,1'),
      stagger: 0.01,
      scrollTrigger: {
        trigger: '.location',
        start: mobileDevice() === 'pc' ? `top 35%` : 'top -80%',
        // start: mobileDevice() === 'pc' ? `top 35%` : 'top 0%',
        end: `+=${window.innerHeight * 0.6}`,
        // end:
        //   mobileDevice() === 'pc'
        //     ? `+=${window.innerHeight * 0.6}`
        //     : `+=${window.innerHeight}`,
        // scrub: 2,
        scrub: true,
      },
    });

  }, []);
  return (
    <section className="location">
      <div className="locationwrapper">
        <div className="locationleft">
          <div className="locationheader">
            <img src={Frame286} />
            Location
          </div>
          <div className="locationtext">
            LS Location – Where Aesthetics Meet Comfort. It is the perfect blend
            of elegance and comfort, ideal for your grand celebrations or cozy
            family retreats. With years of experience in catering for events of
            all kinds, we've seen the best and the worst in venues — which
            inspired us to create a space that checks every box for style,
            convenience, and functionality
          </div>
        </div>
        <div className="locationright">
          <div className="listblock">
            <img src={circlelist} alt="Circle List" />
            <div className="listtext">
              45, Shevchenko str.
              <br /> Sursko-Lytovske
            </div>
          </div>
          <LocationButton />
        </div>
      </div>
      <div className="locationimages">
        <img src={Rectangle7} />
        <img src={Rectangle8} />
        <img src={Rectangle9} />
      </div>
    </section>
  );
}

export default Location;
