import React from "react";
import DiscountBadge from "../DiscountBadge";

function SliderContent({ activeIndex, sliderImage }) {
  return (
    <section>
      {sliderImage.map((slide, index) => (
        <div
          key={index}
          className={`${index === activeIndex ? "slides active" : "inactive"} bg-white`}
          style={{background: "black", color: "white"}}
        >
          {/* <img className="slide-image" src={slide.urls} alt="" /> */}
          {/* <h2 className="slide-title">{slide.title}</h2> */}
          <p className="slide-text">{slide.description}</p>
          <DiscountBadge title="20%" />
        </div>
      ))}
    </section>
  );
}

export default SliderContent;
