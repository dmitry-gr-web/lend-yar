import React, {useEffect} from 'react';
import img from '../assets/PhotoParent.png';
import img2 from '../assets/photo2.png';
import gsap from 'gsap';
import {CustomEase} from 'gsap/all';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import {mobileDevice} from '../utils';
import '../styles/About.scss';

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(CustomEase);
function About() {
  useEffect(() => {
    gsap.to(
      '.blockimg img',
      {
        x: 0,
        y: 0,
        opacity: 1,
        ease: CustomEase.create('custom', 'M0,0,C0,0,1,1,1,1'),
        stagger: 0.01,
        scrollTrigger: {
          trigger: '.blockimg',
          start: `top 70%`,
          end: `+=${window.innerHeight * 0.6}`,
          scrub: true,
        },
      },
      0,
    );
    gsap.to(
      '.aboutheader , .abouttext',
      {
        ease: CustomEase.create('custom', 'M0,0,C0,0,1,1,1,1'),
        stagger: 0.01,
        x: 0,
        scrollTrigger: {
          trigger: '.blockimg',
          start: `top 70%`,
          end: `+=${window.innerHeight * 0.6}`,
          scrub: true,
        },
      },
      0,
    );
    gsap.to('.aboutheader , .abouttext', {
      opacity: 1,
      ease: CustomEase.create('custom', 'M0,0,C0,0,1,1,1,1'),
      scrollTrigger: {
        trigger: '.about',
        start: `top 80%`,
        end: `+=${window.innerHeight * 0.4}`,
        scrub: true,
      },
    });
  }, []);
  return (
    <section className="about">
      <div className="aboutheader">About Parents</div>
      <div className="abouttext">
        <div>
          Our story began many years ago, when we were just little kids —
          unaware that one day, our paths would cross again and we’d begin
          building a life together. <br />
          We’ve been through a lot: challenges, changes, and meaningful moments
          that have only brought us closer and made our bond stronger.
        </div>
        <div>
          Our family isn’t always filled with just laughter and joy — there are
          difficult times too.But we go through them together, always supporting
          each other and standing strong side by side. And that’s where our
          strength lies.
        </div>
      </div>
      <div className="blockimg">
        <div className="border" />
        {mobileDevice() === 'pc' ? (
          <img loading="lazy" src={img} />
        ) : (
          <img loading="lazy" src={img2} />
        )}
      </div>
    </section>
  );
}

export default About;
