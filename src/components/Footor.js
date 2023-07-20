import React from "react";
import "./Footor.css";
import {
  FaHome,
  FaLinkedin,
  FaMailBulk,
  FaPhone,
  FaTwitter,
} from "react-icons/fa";
const Footor = () => {
  return (
    <div className="footor">
      <div className="footor-container">
        <div className="left">
          <div className="location">
            <FaHome size={20} style={{ color: "white", marginRight: "2rem" }} />
            <div>
              <p>947 , Abhimanyu Nagar</p>
              <p>Bokaro Steel City</p>
            </div>
          </div>
          <div className="phone">
            <h4>
              <FaPhone
                size={20}
                style={{ color: "white", marginRight: "2rem" }}
              />
              7484970945
            </h4>
          </div>

          <div className="email">
            <h4>
              <FaMailBulk
                size={20}
                style={{ color: "white", marginRight: "2rem" }}
              />
              umangidea9@gmail.com
            </h4>
          </div>
        </div>

        <div className="right">
          <h4>About myself</h4>
          <p>
            Seeking an entry-level position to pursue a highly rewarding career
            and healthy work environment where I can utilize my skills and
            knowledge efficiently for organizational growth. Highly motivated
            and detail-oriented web developer seeking a challenging position in
            web development.
            <div className="social">
              <FaTwitter
                size={30}
                style={{ color: "white", marginRight: "2rem" }}
              />

              <a
                href="https://www.linkedin.com/in/umang-kumar-a0438522a/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin
                  size={30}
                  style={{ color: "white", marginRight: "2rem" }}
                />
              </a>
            </div>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footor;
