import React from "react";
import "../App.css";
import { Carousel } from "react-bootstrap";
// import  image1 from '../assest/images/darsh.jpg'
import image2 from '../assest/images/jay.jpg'
// import  image3 from '../assest/images/noodel.jpeg'
// import  image4 from '../assest/images/shamee.jpg'
import image5 from '../assest/images/sylwia.jpg'
import image6 from '../assest/images/zakaria.jpg'



const CarouselContainer = () => {
  return (
    <Carousel fade={true} pause={false}>
      <Carousel.Item interval={2000} >
        <img
          className="d-block w-100"
          src={image2}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100 h-50"
          src={image5}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="d-block mw-100"
          src={image6}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>

  )
}
export default CarouselContainer;