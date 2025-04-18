import React, {useEffect} from 'react';
import listik from '../assets/listik.svg';
import gsap from 'gsap';
import {CustomEase} from 'gsap/all';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import {mobileDevice} from '../utils';
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(CustomEase);

import '../styles/Requests.scss';
function Requests() {
  useEffect(() => {
    gsap.set('.requestsleft', {
      x: -window.innerWidth * 0.2,
      // y: window.innerHeight * 0.2,
      opacity: 0,
    });

    gsap.set('.requestsright', {
      x: window.innerWidth * 0.2,
      // y: window.innerHeight * 0.2,
      opacity: 0,
    });
    mobileDevice() === 'pc'
      ? (gsap.to('.requestsleft', {
          x: 0,
          y: 0,
          opacity: 1,
          ease: CustomEase.create('custom', 'M0,0,C0,0,1,1,1,1'),
          stagger: 0.01,
          scrollTrigger: {
            trigger: '.location',
            start: window.innerWidth < 950 ? 'top 40%' : 'top 20%',
            end: `+=${window.innerHeight * 0.7}`,
            scrub: 2,
          },
        }),
        gsap.to('.requestsright', {
          x: 0,
          y: 0,
          opacity: 1,
          ease: CustomEase.create('custom', 'M0,0,C0,0,1,1,1,1'),
          stagger: 0.01,
          scrollTrigger: {
            trigger: '.location',
            start: window.innerWidth < 950 ? 'top 40%' : 'top 20%',
            end: `+=${window.innerHeight * 0.7}`,
            scrub: 2,
          },
        }))
      : (gsap.to('.requestsleft', {
          x: 0,
          y: 0,
          opacity: 1,
          ease: CustomEase.create('custom', 'M0,0,C0,0,1,1,1,1'),
          stagger: 0.01,
          scrollTrigger: {
            trigger: '.location',
            start: 'top -100%',
            end: `+=${window.innerHeight * 0.7}`,
            scrub: 2,
          },
        }),
        gsap.to('.requestsright', {
          x: 0,
          y: 0,
          opacity: 1,
          ease: CustomEase.create('custom', 'M0,0,C0,0,1,1,1,1'),
          stagger: 0.01,
          scrollTrigger: {
            trigger: '.location',
            start: 'top -100%',
            end: `+=${window.innerHeight * 0.7}`,
            scrub: 2,
          },
        }));
  }, []);
  return (
    <section className="requests">
      <div className="requestsleft">
        <img src={listik} className="listik left" />
        <div className="requestsheader">Dress Code</div>
        <div className="requeststext">
          We would be happy if you choose light shades for your outfit (beige,
          white) or a color corresponding to the baby’s expected gender.
        </div>
      </div>

      <div className="requestsright">
        <img src={listik} className="listik right" />
        <div className="requestsheader">Party’s Rule</div>
        <div className="requeststext">
          Please do not bring baby toys as gifts! The best present for us at
          this time would be financial support.
        </div>
      </div>
    </section>
  );
}

export default Requests;
