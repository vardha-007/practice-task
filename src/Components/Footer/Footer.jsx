import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import footer_en_logo from '../Assets/footer-logo.png';
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <>
      <div className="container-fluid footer_part p-0">
     
        <div className="inner_footer_part d-flex gap-4">
         

          <div className="left_container col-lg-5 col-md-8 col-sm-10">
           
          <div>
            <img src={footer_en_logo} alt="" className="footer_en_logo"/>
            </div>
          
            <p>
              Instead of visiting showrooms around, let your kitchen come to
              you. Niuli helps you save time, money, and effort. From the moment
              of booking your free design consultation to installation, we help
              you build your dream kitchen through a completely online
              experience. We have only two showrooms, our website and app.
            </p>
            <div className="d-flex gap-3">
              <FontAwesomeIcon icon={faFacebook} />
              <FontAwesomeIcon icon={faInstagram} />
              <FontAwesomeIcon icon={faTwitter} />
            </div>
          </div>
          <div className=" socialmedia_footer_part col-lg-7">
            <div className="d-flex flex-wrap gap-5">
              <div>
                <p>Nuili's concept</p>
                <p>F.A.Q</p>
                <p>Support Center</p>
                <p>Mobile App</p>
                <p>Be a Nuili Designer</p>
              </div>
              <div>
                <p>Kitchens</p>
                <p>Appliances</p>
                <p>Worktops</p>
                <p>catalogs</p>
              </div>
              <div>
                <p>Contact us</p>
                <p>terns & conditions</p>
                <p>Privacy & policy</p>
                <p>VAT Certificate</p>
                <p></p>
              </div>
            </div>
          </div>
        </div>
        <div className="lower_footer">
          <p>© Niuli, CR: 1010717764, Copyright© 2021</p>
        </div>
        
      </div>
    </>
  );
};

export default Footer;
