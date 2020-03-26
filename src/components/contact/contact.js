import React from "react";
import "./contact-page.css";
import Nav from "../navbar/navbar";
import Footer from "../footer/footer";

const Contact = () => (
  <div className="contact-page">
    <div className="nav-contact">
      <Nav />
    </div>
    <div className="contact-page-body">
      <div class="card front">
        <div class="blue"></div>
        <div class="yellow"></div>
        <div class="pink"></div>
        <div class="dots"></div>
        <div class="personal-intro">
          <p>Nelu Știr</p>
          <p>Administrator</p>
        </div>
      </div>
      <div class="card back">
        <div class="yellow"></div>
        <div class="top dots"></div>
        <div class="personal-info">
          <p style={{ margin: "25px 0px 4px 0px " }}>Nelu Știr</p>
          <p style={{ margin: "5px 0px" }}>Administrator</p>
          <p style={{ margin: "10px 0px" }}>Strada Mușcatei</p>
          <p> Bistrița-Năsăud, Bistrița</p>
          <p>kroneprofile@gmail.com</p>
          <p>0730980986</p>
        </div>
        <div class="bottom dots"></div>
        <div class="pink"></div>
      </div>
    </div>
    <div className="footer-contact">
      <Footer />
    </div>
  </div>
);

export default Contact;
