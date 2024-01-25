import "./Why-nuili.css";

const Whynuili = ({ homepagedata }) => {
  return (
    <div className="whyNiulli-container">
      <h1 className="d-flex justify-content-center">
        {homepagedata?.why_niuli_headings?.heading_en}
      </h1>
      <div className="container">
        <div className="image_grid">
          {homepagedata?.why_niuli?.map((image) => (
            <div className="image_content">
              <div className=" image_inside_content d-flex flex-column">
                <img src={image?.image_url} alt="" />
                <p className="title_heading">{image?.heading_en}</p>
                <p className="content_text">{image?.content_en}</p>
              </div>
            </div>
          ))}
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Whynuili;
