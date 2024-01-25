import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Banner/Banner.css";


const Banner = ({homepagedata}) => {
 

  return (
    <div>
      <div
        id="carouselExampleSlidesOnly"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          {homepagedata?.banner_list?.map((value, index) => (
            <div
              key={index}
              className={`carousel-item ${index === 0 ? "active" : ""}`}
            >
              <img
                src={value?.banner_image}
                className="item d-block w-100"
                alt="..."
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Banner;