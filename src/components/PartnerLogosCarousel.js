// src/components/PartnerLogosCarousel.js
import React from 'react';
import Slider from 'react-slick';

function PartnerLogosCarousel() {
  // Slick slider settings
  const settings = {
    dots: false,              // Show navigation dots (true/false)
    infinite: true,           // Infinite loop sliding
    speed: 500,               // Transition speed (ms)
    slidesToShow: 4,          // How many logos to show at once
    slidesToScroll: 1,        // How many logos to scroll each time
    autoplay: true,           // Auto-slide
    autoplaySpeed: 2000,      // 2 seconds
    responsive: [
      {
        breakpoint: 768,      // Screen width < 768px
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 480,      // Screen width < 480px
        settings: {
          slidesToShow: 1
        }
      }
    ]
  };

  const partnerLogos = [
    'CNET',
    'Yahoo! Finance',
    'Business Insider',
    'Bloomberg',
    'CNET',
    'WSJ',
    'Reuters'
    // Add as many as you like
  ];

  return (
    <Slider {...settings}>
      {partnerLogos.map((logo, index) => (
        <div key={index}>
          <div className="partner-logo-slide">
            {logo}
          </div>
        </div>
      ))}
    </Slider>
  );
}

export default PartnerLogosCarousel;
