import React from "react";
import "./Designers.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as faStarSharp } from "@fortawesome/free-solid-svg-icons";

const Designers = ({ homepagedata }) => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const activeDesigners = Array.isArray(homepagedata?.active_designer_list)
    ? homepagedata.active_designer_list
    : [];

  return (
    <div className="Designer_container">
      <div className="container-fluid">
        <div className="Designers-heading-part">
          <h1>Meet Our Designers</h1>
          <p>
            Hundereds of designers are ready to visit you and help in assessing  
            <span>your needs and organizing your space.</span>
            </p>
        </div>
        <div className="col-12">
          <div className="inner-card-element">
            <Carousel
              responsive={responsive}
              // removeArrowOnDeviceType={["tablet", "mobile"]}
              infinite={true}
            >
              {activeDesigners?.map((image) => (
                <>
                  <div className="card">
                    <div className="card-body">
                      <div className="">{/* additional space */}</div>
                      <div className="span-div ps-5 py-2">
                        <div className="product-image">
                          <img
                            src={image?.profile_image}
                            alt="Designer-image"
                          />
                        </div>
                        <h5 className="Designer_name">{image?.name}</h5>
                        <span className="Designer">Designer</span>
                        <div className="d-flex gap-1 Designer_rating">
                          <span>
                            <FontAwesomeIcon
                              icon={faStarSharp}
                              style={{ color: "#FFD43B" }}
                            />
                          </span>
                          <p>0.0</p>
                        </div>
                      </div>
                    </div>
                    <div className="straight-line position-absolute">
                        
                    </div>
                  </div>
                </>
              ))}
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Designers;

