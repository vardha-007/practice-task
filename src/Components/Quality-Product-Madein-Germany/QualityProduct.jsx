import React, { useState } from "react";
import "./QualityProduct.css";
import germany_product_image1 from "../Assets/qua_germ1.png";
import germany_product_image2 from "../Assets/qua_germ2.png";
import germany_product_image3 from "../Assets/qua_germ3.png";
import germany_product_image4 from "../Assets/qua_germ4.png";
import germany_product_image5 from "../Assets/qua_germ5.png";
import germany_product_image6 from "../Assets/qua_germ6.png";
import germany_product_image7 from "../Assets/qua_germ7.png";

const QualityProduct = () => {
  const [qualityProduct, setQualityProduct] = useState([
    { germany_product_image: germany_product_image1 },
    { germany_product_image: germany_product_image2 },
    { germany_product_image: germany_product_image3 },
    { germany_product_image: germany_product_image4 },
    { germany_product_image: germany_product_image5 },
    { germany_product_image: germany_product_image6 },
    { germany_product_image: germany_product_image7 },
  ]);
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? qualityProduct.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === qualityProduct.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="main_Quality_container">
      <div className="container">
        <div className="Quality_container">
          <div className="Germany-product col-lg-6">
            <h2>Quality Made in Germany</h2>
            <p>
              Select materials, excellent workmanship, perfection in every
              detail: Niuli kitchens are developed and manufactured in
              accordance with the highest quality criteria at factories in
              Germany. The quality of products and production processes, as well
              as the utmost satisfaction of our customers, are key factors to
              our success.
            </p>
          </div>
          <div className="Germany-product-curosal-container col-lg-6">
            <div
              id="carouselExampleInterval"
              className="carousel slide"
              data-bs-ride="carousel"
            >
              <div className="carousel-inner d-block">
                {qualityProduct.map((quality, index) => (
                  <div
                    className={`carousel-item ${
                      index === activeIndex ? "active" : ""
                    }`}
                    key={index}
                  >
                    <img
                      src={quality.germany_product_image}
                      alt="German-quality-images"
                    />
                  </div>
                ))}
              </div>
              <button
                // className="carousel-control-prev w-100"
                type="button"
                data-bs-target="#carouselExampleInterval"
                data-bs-slide="prev"
                onClick={handlePrev}
              >
                <span
                  className="carousel-control-prev-icon"
                  // aria-hidden="true"
                ></span>
                {/* <span className="visually-hidden">Previous</span> */}
              </button>
              <button
                // className="carousel-control-next w-100"
                type="button"
                data-bs-target="#carouselExampleInterval"
                data-bs-slide="next"
                onClick={handleNext}
              >
                <span
                  className="carousel-control-next-icon"
                  // aria-hidden="true"
                ></span>
                {/* <span className="visually-hidden">Next</span> */}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QualityProduct;