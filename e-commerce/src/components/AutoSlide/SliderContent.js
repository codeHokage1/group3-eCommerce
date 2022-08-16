import React from "react";

function SliderContent({ activeIndex, sliderImage }) {
  return (
    <section>
      {sliderImage.map((slide, index) => (
        <div
          key={index}
          className={`${
            index === activeIndex ? "slides active" : "inactive"
          } bg-dark`}
          style={{ background: "black", color: "white" }}
        >
          {/* <img className="slide-image" src={slide.urls} alt="" /> */}
          {/* <h2 className="slide-title">{slide.title}</h2> */}
          <div className="slide-text fs-4">
          <p className="text-light fst-italic">{slide.description}</p>
          <p className="text-lg mb-0">{slide.name}</p>
          <p className=" text-light fs-6">{slide.who}</p>
          </div>
          
        </div>
      ))}
    </section>
  );
}

export default SliderContent;
