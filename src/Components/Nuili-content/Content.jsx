
import "./Content.css";
import { Tabs } from "antd";

const Content = ({ homepagedata }) => {

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
                  className={`carousel-item ${index === 0 ? "active" : ""}`}
                >
                  <img
                    src={value?.image_url}
                    className="curosal-images d-block"
                    alt="..."
                    style={{ width: "100%"}}
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="col-12 col-md-7" >
            <Tabs
              defaultActiveKey="tab1"
              type="line"
              className="second_div"
             
            >
              {homepagedata?.ideas_behind_niuli?.map((items, index) => (
                <Tabs.TabPane
                  key={`tab${index + 1}`}
                  tab={<span className="heading_span">{items?.heading_en}</span>}
                >
                  <div>
                    <p
                      className="item_content"
                   
                    >
                      {items?.content_en}
                    </p>
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
