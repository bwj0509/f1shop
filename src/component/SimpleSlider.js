import React, { Component } from "react";
import Slider from "react-slick";

export default class AutoPlay extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      speed: 500,
      autoplaySpeed: 2000,
      cssEase: "linear"
    };
    return (
      <div>
        <Slider {...settings}>
          <div>
            <h3><img src="../introduce0.jpg" className="imgsize19201080"></img></h3>
          </div>
          <div>
            <h3><img src="../introduce1.jpg" className="imgsize19201080"></img></h3>
          </div>
          <div>
            <h3><img src="../introduce2.jpg" className="imgsize19201080"></img></h3>
          </div>
        </Slider>
      </div>
    );
  }
}