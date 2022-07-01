import React from "react";
import Slider from "react-slick";
//
export default function SliderItem({ children, ...props }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 3,
    slidesToScroll: 1,
  
  };

  return (
      <Slider {...settings} {...props}>
        {children}
      </Slider>
  );
}
