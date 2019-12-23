import React from 'react';
import Slider, { Settings } from 'react-slick';

interface CaroucelProps {
  children: React.ReactNode;
}

const Caroucel: React.FC<CaroucelProps & Settings> = ({ children }) => {
  const sliderSettings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="caroucelContainer">
      <Slider {...sliderSettings} className="hskCaroucel">
        {children}
      </Slider>

      <div className="slickScrollbar">
        <div className="slickScrollbar__current"></div>
      </div>
    </div>
  );
};

export default Caroucel;
