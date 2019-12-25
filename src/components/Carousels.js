import React from "react";
import { Carousel } from "react-bootstrap";
import Content from "../data/carousel.json";

function Carousels() { 
  const loadContent = JSON.parse(JSON.stringify(Content));
  const content = loadContent.carouselData;

  return (
    <Carousel style={carouselWrapper}>
      {content.map((el, i) => ( 
        <Carousel.Item key={i}>
          <img
            style={imgBackground}
            className="d-block w-100"
            src={el.img}
          />
          <Carousel.Caption style={captionBg}>
            <h3 className="font-weight-bolder">{el.header}</h3>
            <p className="font-weight-bolder">{el.comment}</p>
          </Carousel.Caption>
        </Carousel.Item>  
      ))} 
    </Carousel>
  );
}

const carouselWrapper= {
  marginTop: "100px"
}

const imgBackground = {
  height: "300px",
  objectFit: "cover"
};

const captionBg = {
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  backgroundColor: "rgba(0,0,0,.5)",
  right: "0px",
  left: "0px",
  bottom: "0px",
  top: "0px",
  zIndex: 1
};

export default Carousels;
