import React from 'react';
import '../css sheets/LogosCarousel.css';

const logos = [
  '/slide6.png',
  '/slide5.png',
  '/slide4.png',
  '/slide3.png',
  '/slide2.png',
  '/slide7.png',
  '/slide8.png',
  '/slide9.png',
  '/slide10.png',
  '/slide11.png',
  '/slide12.png',
  '/slide13.png',
  '/slide1.png',
  '/slide14.png',
  '/slide15.png',
];

const Slideshow = () => {
  return (

    <div className="logos">
    <div className="logos-slide">
        {logos.map((logo, index) => (
        <img key={index} src={logo} alt={`Logo ${index}`} />
        ))}
    </div>
    <div className="logos-slide">
        {logos.map((logo, index) => (
        <img key={`duplicate-${index}`} src={logo} alt={`Logo ${index}`} />
        ))}
    </div>
    </div>

  );
};

export default Slideshow;
