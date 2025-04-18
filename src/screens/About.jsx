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
          Urna turpis nibh nulla ornare ut. Tristique et, et in enim ultrices
          convallis. Risus mi, tellus dapibus morbi neque id et purus. Mi
          tincidunt commodo mattis tortor, est.
        </div>
        <div>
          Tortor, pharetra, maecenas nec bibendum lorem egestas. Velit nisl a
          viverra diam, id blandit nisl, tempor. Iaculis et ipsum, dui
          venenatis. Mi ultricies gravida sit semper lobortis id laoreet. Lacus,
          scelerisque libero phasellus non egestas condimentum et nunc.
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
