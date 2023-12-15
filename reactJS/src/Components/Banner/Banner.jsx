import React, { Component } from "react";
import Slider from "react-slick";
import { sliderData } from './banner';
import './Banner.css';
export default class Banner extends Component {
  render() {
    const settings = {
        infinite: true,
        slidesToShow: 1,
        autoplay: true,
        slidesToScroll: 1,
        autoplaySpeed: 2000,
        pauseOnHover: true
      };
    return (
      <div className="slider">
        <Slider {...settings}>
        {sliderData.map((slide)=> {
            return(
                <div>
                    <img src={slide.image} alt="banner" />
                </div>
                )
            })}
        </Slider>
      </div>
    );
  }
}