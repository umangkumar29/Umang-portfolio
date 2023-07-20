import React from "react";
import "./AboutContent.css";
import { Link } from "react-router-dom";
import react1 from "../assests/reactimg-1.jpg"
import react3 from "../assests/reactimg-3.png"
const AboutContent = () => {
  return (
    <div className="about">
      <div className="left">
        <h1 className="heading1">Who Am I</h1>
        <p>
          I am a react front end developer and I have also some knowledge about
          backend development and worked on backend application such as Nodejs, ExpressJs and
          Socket.io. <br /> <br />
          Skills:
        <br></br>
        <div className="info">
        Frontend :- HTML , CSS , Javascript <br />
        Backend :- Nodejs, Socket.io , Express.js <br />
        Database :- MongoDb , MySql

        </div>
        

        </p>
        <Link to="/contact">
            <button className="btn">Contact</button>
        </Link>
      </div>
      <div className="right">
        <div className="img-container">
            <div className="image-stack top">
                <img src={react1} className="img" alt="true"></img>
            </div>
            <div className="image-stack bottom">
                <img src={react3} className="img" alt="true"></img>
            </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
