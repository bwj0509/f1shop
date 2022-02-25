import React, { Component } from "react";
import Slider from "react-slick";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div>
        <h2> 인트로듀스에 멜세데스 팀의 사진을 넣고 그위에 글자 버튼을 넣을 예정이다</h2>
        <Slider {...settings}>
          <div>
            <h3>첫번째 사진 넣는곳</h3>
          </div>
          <div>
            <h3>두번째 사진 넣는곳</h3>
          </div>
          <div>
            <h3>세번째 사진 넣는곳</h3>
          </div>
        </Slider>
      </div>
    );
  }
}