import React from "react";
import ImageSlider from "../image-slider/image-slider";
import "./header.css";

const Header = () => (
  <div className="header">
    <div className="slider">
      <ImageSlider />
    </div>
    <div className="header-h1">
      <div className="first-div">
        <h1>Produse</h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries
        </p>
        <img
          style={{ width: "20vw", borderRadius: "1%" }}
          src={require("./images1.jpg")}
        />
      </div>
      <div className="second-div">
        <h1>Servicii</h1>{" "}
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries
        </p>
        <img
          style={{ width: "20vw", borderRadius: "1%" }}
          src={require("./images5.jpg")}
        />
      </div>
      <div className="third-div">
        <h1>Video</h1>{" "}
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries
        </p>
        <img
          style={{ width: "20vw", borderRadius: "1%" }}
          src={require("./image2.jpg")}
        />
      </div>
    </div>
    <div className="blue-container-div">
      <div className="p-description">
        <p>
          Kröne-Profile reprezintă un producător de profile din aluminiu și
          profile de gipscarton de calitate superioară din localitatea Bistrița,
          județul Bistrița-Năsăud.
        </p>
      </div>
    </div>
  </div>
);

export default Header;
