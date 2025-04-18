import React, {useEffect} from 'react';
import img from '../assets/photocamera.png';
import '../styles/Photos.scss';
import gsap from 'gsap';
import {CustomEase} from 'gsap/all';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import {mobileDevice} from '../utils';
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(CustomEase);

function Photos() {
  useEffect(() => {
    mobileDevice() === 'pc'
      ? gsap.to('.photosright img', {
          x: 0,
          y: 0,
          opacity: 1,
          ease: CustomEase.create('custom', 'M0,0,C0,0,1,1,1,1'),
          stagger: 0.01,
          scrollTrigger: {
            trigger: '.photos',
            // start: 'top 100%',
            start: 'top 100%',
            end: `+=${window.innerHeight * 0.5}`,
            scrub: 1,
          },
        })
      : gsap.to('.photosright img', {
          x: 0,
          y: 0,
          opacity: 1,
          ease: CustomEase.create('custom', 'M0,0,C0,0,1,1,1,1'),
          stagger: 0.01,
          scrollTrigger: {
            trigger: '.photos',
            start: 'top -70%',
            end: `+=${window.innerHeight * 0.5}`,
            scrub: 1,
          },
        });
  }, []);
  return (
    <section className="photos">
      <div className="photosleft">
        <div className="photosheader">Photos</div>
        <div className="photostext">
          You can view the photos from the gender party at the button below
        </div>
        <button>watch photos</button>
      </div>
      <div className="photosright">
        <div className="border" />
        <img loading="lazy" src={img} />
      </div>
    </section>
  );
}

export default Photos;
