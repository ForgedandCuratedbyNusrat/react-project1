import One from "../src/assets/one.png";
import Two from "../src/assets/two.png";
import Three from "../src/assets/three.png";
import Four from "../src/assets/four.png";
import Five from "../src/assets/five.png";
import Six from "../src/assets/six.png";
import Seven from "../src/assets/seven.png";
import Eight from "../src/assets/eight.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import React from "react";
// App.jsx
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Container } from "react-bootstrap";

// Custom Prev Arrow
const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="custom-arrow prev" onClick={onClick}>
      <FaChevronLeft />
    </div>
  );
};

// Custom Next Arrow
const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="custom-arrow next" onClick={onClick}>
      <FaChevronRight />
    </div>
  );
};


function App() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  var settingsone = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  

  return (
 <>
 <div className="banner">
 <Slider {...settings}>
 <div className="picture-div">
<img src={One} alt="" />
</div>
<div className="picture-div">
<img src={Two} alt="" />
</div>
<div className="picture-div">
<img src={Three} alt="" />
</div>
<div className="picture-div">
<img src={Four} alt="" />
</div>
<div className="picture-div">
<img src={Five} alt="" />
</div>
<div className="picture-div">
<img src={Six} alt="" />
</div>
<div className="picture-div">
<img src={Seven} alt="" />
</div>
<div className="picture-div">
<img src={Eight} alt="" />
</div>
 </Slider>
 <Container>
 <Slider {...settingsone}>
<div className="picture-div">
<img src={One} alt="" />
</div>
<div className="picture-div">
<img src={Two} alt="" />
</div>
<div className="picture-div">
<img src={Three} alt="" />
</div>
<div className="picture-div">
<img src={Four} alt="" />
</div>
<div className="picture-div">
<img src={Five} alt="" />
</div>
<div className="picture-div">
<img src={Six} alt="" />
</div>
<div className="picture-div">
<img src={Seven} alt="" />
</div>
<div className="picture-div">
<img src={Eight} alt="" />
</div>
</Slider>
 </Container>
</div>
  </>
  )
}

export default App
