import React, { Component } from "react";
import Slider from "react-slick";
import { sliderData } from './bannerChristmas';
import './BannerChristmas.css';
export default class BannerChristmas extends Component {
  render() {
    const settings = {
        className: "center",
        infinite: true,
        slidesToShow: 1,
        autoplay: true,
        slidesToScroll: 1,
        autoplaySpeed: 2000,
        pauseOnHover: true
      };
    return (
      <div className="slider-christmas">
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