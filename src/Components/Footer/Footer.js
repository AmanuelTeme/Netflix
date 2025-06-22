import React from "react";
import "./footer.css";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";

const Footer = () => {
  return (
    <div>
      <div className="footer_outer_container">
        <div className="footer_inner_container">
          <div className="footer_icons">
            <FacebookRoundedIcon />
            <InstagramIcon />
            <YouTubeIcon />
          </div>
          <div className="footer_data">
<<<<<<< HEAD
            <div>
=======
            <div className="footer_link">
>>>>>>> 5664f830ce40df7116e81f99558864f1a9983494
              <ul>
                <li>Audio Description</li>
                <li>Investor Relations</li>
                <li>Legal Notice</li>
              </ul>
            </div>
            <div>
              <ul>
                <li>Help Center</li>
                <li>Jobs</li>
                <li>Cookie preferences</li>
              </ul>
            </div>
            <div>
              <ul>
                <li>Gift Cards</li>
                <li>Terms of Use</li>
                <li>Corporate Information</li>
              </ul>
            </div>
            <div>
              <ul>
                <li>Media Center</li>
                <li>Privacy</li>
                <li>Contact Us</li>
              </ul>
            </div>
          </div>
<<<<<<< HEAD
          {/* <div className='service_code'>
=======

          <div className='service_code'>
>>>>>>> 5664f830ce40df7116e81f99558864f1a9983494
                <p>
                  service  Code
                </p>

<<<<<<< HEAD
                </div> */}
          <button className="servcie-code-btn"> Service Code</button>
=======
                </div>
          {/* <button className="servcie-code-btn"> Service Code</button> */}
>>>>>>> 5664f830ce40df7116e81f99558864f1a9983494
          <br />
          <div className="copy_write">© copy; 1997-2025 Netflix, Inc.</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
