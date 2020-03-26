import React from "react";
import "./despre-noi.css";
import Nav from "../navbar/navbar";
import ImageSlider from "../image-slider/image-slider";
import Footer from "../footer/footer";

const Despre = () => (
  <div className="despre-noi">
    <Nav />
    <div className="despre-noi-body">
      <div className="image-slider-despre-noi">
        <ImageSlider />
      </div>
      <div className="h1-despre-noi">
        <div className="gray-container">
          <p>
            <strong>Krone-Profile </strong>
          </p>
          <h1>
            Reprezintă o societate comercială care și-a început activitatea în
            anul 2019, și care are că scop fabricarea profilelor de aluminiu și
            profilelor de gipscarton de cea mai înalta calitate de pe piață.
            Toate produsele sunt fabricate din Aluminiu Zinc cu o grosime
            substanțială care conferă rigiditate produselor și duritate mult mai
            ridicată față de restul pieței.
          </h1>
        </div>
      </div>
    </div>
    <Footer />
  </div>
);

export default Despre;
