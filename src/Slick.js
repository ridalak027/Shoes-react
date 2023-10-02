import React from "react";
import Slider from "react-slick";

import "./App.css";

const Slick = () => {
  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
  };
  return (
    <div>
      <Slider className="slick" {...settings}>
      <div>
          <p>Fre StandÜd Shipping All Orders</p>
        </div>
        <div>
          <p>The FalMinter '23 is Take a look.</p>
        </div>
        <div>
          <p>æcome a GREATS Ambassador & Receive Rewards. JOIN NOW.</p>
        </div>
        <div>
          <p>The Friends & Family Sale: 25% Off Select styles with code FRENDS25.</p>
        </div>
        <div>
        <p>Fre StandÜd Shipping All Orders</p>
        </div>
        <div>
        <p>The FalMinter '23 is Take a look.</p>
        </div>
      </Slider>
    </div>
  );
};

export default Slick;
