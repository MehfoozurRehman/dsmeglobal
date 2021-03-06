import React from 'react';
import {HomeJumbotron} from '../components/HomeJumbotron';
import {IndustryFeatrues} from '../components/IndustryFeatrues';
import industries from '../assets/industry.webp';
import {Bounce} from 'react-reveal';

export default function Industry() {
  return (
    <>
      <div className="container">
        <HomeJumbotron
          taglinesLine="From startup to enterprise, the full range of engineering services your company needs"
          info="Choose a software development partner that knows the realities of your business. We foster innovation across various industries, from healthcare, retail, insurance, e-commerce, recruitment, food, real estate, and travel to entertainment."
          img={industries}
          talk={true}
        />
      </div>
      <Bounce left>
        {' '}
        <div className="industry__software__solutions">
          Software solutions for<span>industry leaders</span> 
        </div>
      </Bounce>
      <Bounce up>
        {' '}
        <div className="industry__software__solutions__content">
          Need a software solution that’s right for you? Choose a digital
          product crafted to answer the challenges of your industry. Small or
          big, startup, or enterprise – we partner with companies of various
          sizes and profiles on their way to innovation and growth. Empower your
          business with a state-of-the-art digital solution, tailored to your
          needs and expectations.
        </div>
      </Bounce>
      <IndustryFeatrues />
    </>
  );
}
