import React, { Component } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bannerDefault } from "./bannerDefault";
import {bannerChristmas} from "./bannerChristmas"
import Slider from 'react-slick'
import './Banner.css'
export default function Banner() {
  const layout = useSelector((state) => state.layoutState.layout);
  let sliderData={}
  if (layout) sliderData=bannerChristmas
  else sliderData=bannerDefault
  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 2000,
    pauseOnHover: true
  };
return (
  <div className="slider" id='banner_slide'>
    
    <Slider {...settings}>
    {sliderData.map((slide)=> {
        return(
            <div >
                <img src={slide.image} alt="banner" />
            </div>
            )
        })}
    </Slider>

  </div>
);
}