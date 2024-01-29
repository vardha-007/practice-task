

import React, { useState } from "react";
import "./Content.css";
import { Tabs } from "antd";

const Content = ({ homepagedata }) => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  const handleTabChange = (key) => {
    // Update the active tab index when the tab changes
    setActiveTabIndex(parseInt(key.substring(3)) - 1);
  };

  return (
    <div className="main_container">
      <div className="container">
        <h1 className="d-flex justify-content-center pb-5">
          {homepagedata?.ideas_behind_niuli_headings?.heading_en}
        </h1>
        <div className="row">
          <div className="col-12 col-md-5">
            <div
              id="carouselExampleFade"
              className="carousel slide carousel-fade"
              data-bs-ride="carousel"
            >
              {homepagedata?.ideas_behind_niuli?.map((value, index) => (
                <div
                  key={index}
                  className={`carousel-item ${index === activeTabIndex ? "active" : ""}`}
                >
                  <img
                    src={value?.image_url}
                    className="curosal-images d-block"
                    alt="..."
                    style={{ width: "100%" }}
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="col-12 col-md-7">
            <Tabs
              defaultActiveKey={`tab${activeTabIndex + 1}`}
              type="line"
              className="second_div"
              onChange={handleTabChange}
            >
              {homepagedata?.ideas_behind_niuli?.map((items, index) => (
                <Tabs.TabPane
                  key={`tab${index + 1}`}
                  tab={<span className="heading_span">{items?.heading_en}</span>}
                >
                  <div>
                    <p className="item_content">{items?.content_en}</p>
                  </div>
                </Tabs.TabPane>
              ))}
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;