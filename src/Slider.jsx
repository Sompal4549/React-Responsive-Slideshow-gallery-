import React, { useState } from "react";

const Slider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideStyles = {
    backgroundImage: `url(${slides[currentIndex].url})`,
    width: "100%",
    height: "100%",
    borderRadius: "10px",
    backgroundPosition: "center",
    backgroundSize: "cover",
  };
  const sliderStyles = {
    position: "relative",
    height: "100%",
  };
  const leftArrowStyles = {
    position: "absolute",
    cursor: "pointer",
    top: "50%",
    transform: "translate(0, -50%)",
    left: "32px",
    fontSize: "45px",
    color: "white",
    zIndex: "1",
  };
  const rightArrowStyles = {
    position: "absolute",
    cursor: "pointer",
    top: "50%",
    transform: "translate(0, -50%)",
    right: "32px",
    fontSize: "45px",
    color: "white",
    zIndex: "1",
  };
  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  const dotsContainerStyles = {
    display: "flex",
    justifyContent: "center",
  };
  const dotStyles = {
    margin: "0 3px",
    cursor: "pointer",
    fontSize: "20px",
    width: "100px",
    height: "100px",
    marginTop: "20px",
  };
  const dotImageStyle = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    verticalAlign: "middle",
  };
  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };
  return (
    <div style={sliderStyles}>
      <div style={leftArrowStyles} onClick={goToPrevious}>
        &#10094;
      </div>
      <div style={rightArrowStyles} onClick={goToNext}>
        &#10095;
      </div>
      <div style={slideStyles}></div>
      <div style={dotsContainerStyles}>
        {slides.map((slide, slideIndex) => (
          <div
            style={dotStyles}
            onClick={() => goToSlide(slideIndex)}
            key={slideIndex}
            className={`slideshowDot${
                currentIndex === slideIndex ? " active" : ""
              }`}
          >
            <style>
              {`
                .active{
                  background-color:black;
                  opacity:0.5;
                }              
              `}
            </style>
            <img
              src={slide.url}
              style={dotImageStyle}
              alt=""
              
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
