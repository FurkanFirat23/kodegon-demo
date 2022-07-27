import React from "react";
import { Carousel } from "react-responsive-carousel";
import "./style.css";

const CaroseulPage = () => {
  return (
    <Carousel
      className="carousel"
      width={1440}
      renderIndicator={(clickHandler, isSelected) => {
        return (
          <div
            className="carouselstyle"
            style={{
              width: 10,
              height: 10,
              borderRadius: 10,
              border: `2px solid ${isSelected ? "red" : "white"}`,
            }}
            onClick={clickHandler}
          />
        );
      }}
      showThumbs={false}
      showStatus={false}
      renderArrowNext={(clickHandler) => {
        return (
          <div onClick={clickHandler} className="next">
            next
          </div>
        );
      }}
      renderArrowPrev={(clickHandler) => {
        return (
          <div onClick={clickHandler} className="prev">
            prev
          </div>
        );
      }}
    >
      <div>
        <img alt="1" src="img/Banner.png" />
      </div>
      <div>
        <img alt="2" src="img/Banner.png" />
      </div>
      <div>
        <img alt="3" src="img/Banner.png" />
      </div>
      <div>
        <img alt="3" src="img/Banner.png" />
      </div>
      <div>
        <img alt="3" src="img/Banner.png" />
      </div>
    </Carousel>
  );
};

export default CaroseulPage;
