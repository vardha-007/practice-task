// import React from "react";
// import "./NuiliProcess.css";

// const NuiliProcess = ({ homepagedata }) => {
//   return (
//    <>
//     <div className="main_Niulli_process">
//       <h1 className="heading_how_niuli_works">
//         {homepagedata?.how_niuli_works_headings?.heading_en}
//       </h1>
//       <div className="container">
//       <div className="row">
     
       
//           <div className="col-6">
//            <div className="niuli_works_process">
//            <div className="box">
//               <div className="up_content">
//                 <span className="one">1</span>
//                 <img
//                   src={homepagedata?.how_niuli_works?.step_one_image_url}
//                   alt="image"
//                 />
//               </div>
//               <div className="en_description">
//                 <p>{homepagedata?.how_niuli_works?.step_one_en}</p>
//               </div>
//             </div>
//             <div className="box">
//               <div className="up_content">
//                 <span className="two">2</span>
//                 <img
//                   src={homepagedata?.how_niuli_works?.step_two_image_url}
//                   alt="image"
//                 />
//               </div>
//               <div className="en_description">
//                 <p>{homepagedata?.how_niuli_works?.step_two_en}</p>
//               </div>
//             </div>
//             <div className="box">
//               <div className="up_content">
//                 <span className="three">3</span>
//                 <img
//                   src={homepagedata?.how_niuli_works?.step_three_image_url}
//                   alt="image"
//                 />
//               </div>
//               <div className="en_description">
//                 <p>{homepagedata?.how_niuli_works?.step_three_en}</p>
//               </div>
//             </div>
//             <div className="box">
//               <div className="up_content">
//                 <span className="four">4</span>
//                 <img
//                   src={homepagedata?.how_niuli_works?.step_four_image_url}
//                   alt="image"
//                 />
//               </div>
//               <div className="en_description">
//                 <p>{homepagedata?.how_niuli_works?.step_four_en}</p>
//               </div>
//             </div>
//             <div className="box">
//               <div className="up_content">
//                 <span className="five">5</span>
//                 <img
//                   src={homepagedata?.how_niuli_works?.step_five_image_url}
//                   alt="image"
//                 />
//               </div>
//               <div className="en_description">
//                 <p>{homepagedata?.how_niuli_works?.step_five_en}</p>
//               </div>
//             </div>
//             <div className="box">
//               <div className="up_content">
//                 <span className="six">6</span>
//                 <img
//                   src={homepagedata?.how_niuli_works?.step_six_image_url}
//                   alt="image"
//                 />
//               </div>
//               <div className="en_description">
//                 <p>{homepagedata?.how_niuli_works?.step_six_en}</p>
//               </div>
//             </div>
//            </div>
//           </div>
//           <div className="col-6 niuli_works_image_content">
//           <iframe src="https://player.vimeo.com/video/798642270/?autoplay=1&muted=1" className="iframe-video-niulli"></iframe>
//         </div>
//       </div>
//     </div>
//     </div>
//    </>
//   );
// };

// export default NuiliProcess;

import React from "react";
import "./NuiliProcess.css";
const NuiliProcess = ({ homepagedata }) => {
  return (
   <>
    <div className="main_Niulli_process">
      <h1 className="heading_how_niuli_works">
        {homepagedata?.how_niuli_works_headings?.heading_en}
      </h1>
      <div className="container">
      <div className="row">
          <div className="col-lg-6 ">
           <div className="niuli_works_process">
           <div className="box">
              <div className="up_content">
                <span className="one">1</span>
                <img
                  src={homepagedata?.how_niuli_works?.step_one_image_url}
                  alt="image"
                />
              </div>
              <div className="en_description">
                <p>{homepagedata?.how_niuli_works?.step_one_en}</p>
              </div>
            </div>
            <div className="box">
              <div className="up_content">
                <span className="two">2</span>
                <img
                  src={homepagedata?.how_niuli_works?.step_two_image_url}
                  alt="image"
                />
              </div>
              <div className="en_description">
                <p>{homepagedata?.how_niuli_works?.step_two_en}</p>
              </div>
            </div>
            <div className="box">
              <div className="up_content">
                <span className="three">3</span>
                <img
                  src={homepagedata?.how_niuli_works?.step_three_image_url}
                  alt="image"
                />
              </div>
              <div className="en_description">
                <p>{homepagedata?.how_niuli_works?.step_three_en}</p>
              </div>
            </div>
            <div className="box">
              <div className="up_content">
                <span className="four">4</span>
                <img
                  src={homepagedata?.how_niuli_works?.step_four_image_url}
                  alt="image"
                />
              </div>
              <div className="en_description">
                <p>{homepagedata?.how_niuli_works?.step_four_en}</p>
              </div>
            </div>
            <div className="box">
              <div className="up_content">
                <span className="five">5</span>
                <img
                  src={homepagedata?.how_niuli_works?.step_five_image_url}
                  alt="image"
                />
              </div>
              <div className="en_description">
                <p>{homepagedata?.how_niuli_works?.step_five_en}</p>
              </div>
            </div>
            <div className="box">
              <div className="up_content">
                <span className="six">6</span>
                <img
                  src={homepagedata?.how_niuli_works?.step_six_image_url}
                  alt="image"
                />
              </div>
              <div className="en_description">
                <p>{homepagedata?.how_niuli_works?.step_six_en}</p>
              </div>
            </div>
           </div>
          </div>
          <div className="col-lg-6 niuli_works_image_content">
          <iframe src="https://player.vimeo.com/video/798642270/?autoplay=1&muted=1" className="iframe-video-niulli"></iframe>
        </div>
      </div>
    </div>
    </div>
   </>
  );
};
export default NuiliProcess;
