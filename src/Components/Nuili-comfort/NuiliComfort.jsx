
import "./NuiliComfort.css";

const NuiliComfort = ({ homepagedata }) => {
  

  return (
    
      <div className="Niulli-comfort-container">
        <div className="container">
        <div className="classic_container_nuili">
        <h1 className="Nuili_comfort-heading d-flex justify-content-center">
          {homepagedata?.kitchen_category_contents?.heading_en}
        </h1>
        <p className="kitchen_category_description">{homepagedata?.kitchen_category_contents?.description_en}</p>
        <div className=" small_image-content d-flex justify-content-center g-3">
        {
          homepagedata?.kitchen_category_list?.map((items)=>
          <>
       
          <div className="classic_image">
            <img src={items.banner_image} alt="" />
            <div className="image_text">
            <h6>Nuili</h6>
            <p>{items?.category_name}</p>
            <p></p>
          </div>
          </div>
         
 
          </>
          )
        }
        </div>
      </div>
    </div>
      </div>
  );
};

export default NuiliComfort;


