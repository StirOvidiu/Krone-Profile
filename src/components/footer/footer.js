import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faMapSigns
} from "@fortawesome/free-solid-svg-icons";
import "./footer.css";

const Footer = () => (
  <div className="footer">
    <div className="footer-list">
      <div className="footer-list-div">
        <div className="font-awesome-map">
          <FontAwesomeIcon icon={faMapSigns} size="3x" />
        </div>
        <div className="map-list">
          <ul>
            <li>Adresa: Strada Mușcatei</li>
            <li>Județ: Bistrița-Năsăud</li>
            <li>Oraș: Bistrița</li>
          </ul>
        </div>
      </div>
      <div className="footer-list-div">
        <div className="font-awesome-mail">
          <FontAwesomeIcon icon={faEnvelope} size="3x" />
        </div>
        <p>kroneprofile@gmail.com</p>
      </div>
      <div className="footer-list-div">
        <div className="font-awesome-phone">
          <FontAwesomeIcon icon={faPhone} size="3x" />
        </div>
        <p style={{ fontSize: "20px" }}>Nelu Știr</p>
        <p style={{ fontSize: "20px" }}>0730980986</p>
      </div>
    </div>
    <div className="footer-basement">
      <div className="footer-basement-h1">
        <h1>Ovidiu-Daniel Știr © 2020 </h1>
      </div>
    </div>
  </div>
);

export default Footer;
