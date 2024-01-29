import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Banner/Banner.css";
import Book_now from "../Assets/bookNowEn.png";

const Banner = ({ homepagedata }) => {
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
      <div className="Book_now_content">
       <div>
       <img
          src="https://niuli-images.gumlet.io/Catalogue_english.png?w=1700&dpr=2.0"
          alt="check_the_catalogue"
        />
       </div>

      <div>
      <img src={Book_now} alt="Book_now" />
      </div>
      </div>
    </div>
  );
};

export default Banner;
