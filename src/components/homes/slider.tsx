import React, { FC, useEffect, useRef } from 'react';
import Slider from 'react-slick';
import '../../../node_modules/slick-carousel/slick/slick.scss';

export const HeroSection: FC<{}> = () => {
  const settings = {
    arrows: false,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 5000,
    autoplay: true,
    fade: true
  };

  const HomeVisualRef: any = useRef(null);
  useEffect(() => {
    if (HomeVisualRef.current) {
      HomeVisualRef.current.classList.add('in');
    }
  }, []);

  return (
    <section className="hero-section home-visual" ref={HomeVisualRef}>
      <div className="hero-image">
        <Slider {...settings}>
          <div className="slick-image"></div>
          <div className="slick-image"></div>
          <div className="slick-image"></div>
          <div className="slick-image"></div>
        </Slider>
      </div>
    </section>
  );
};
