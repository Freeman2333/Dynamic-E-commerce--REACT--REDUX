import React from "react";
import { Carousel } from "react-bootstrap";

function Header() {
  return (
    <Carousel style={carouselWrapper}>
      <Carousel.Item>
        <img
          style={imgBackground}
          className="d-block w-100"
          src="https://ribbonsandballoons.com/frontassets/images/slider/1.jpg"
          alt="First slide"
        />
        <Carousel.Caption style={captionBg}>
          <h3 className="font-weight-bolder">CAKES</h3>
          <p className="font-weight-bolder">Because you are worth it!</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          style={imgBackground}
          className="d-block w-100"
          src="https://www.nicewallpapers.net/background/muffins-color.jpg"
          alt="Third slide"
        />

        <Carousel.Caption style={captionBg}>
          <h3 className="font-weight-bolder">COOKIES</h3>
          <p className="font-weight-bolder">
            Because that is the way the cookies crumbles!
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          style={imgBackground}
          className="d-block w-100"
          src="https://preppykitchen.com/wp-content/uploads/2018/03/Blueberry-Lavendar-Muffins-feature.jpg"
          alt="Third slide"
        />

        <Carousel.Caption style={captionBg}>
          <h3 className="font-weight-bolder">MUFFINS</h3>
          <p className="font-weight-bolder">Lev nu dö sen!</p>
        </Carousel.Caption>
      </Carousel.Item>
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

export default Header;
