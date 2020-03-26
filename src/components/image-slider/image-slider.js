import React from "react";
import "./image-slider.css";
import SimpleImageSlider from "react-simple-image-slider";

class ImageSlider extends React.Component {
  render() {
    const images = [
      { url: require("./images6.jpg") },
      { url: require("./images1.jpg") },
      { url: require("./images3.jpg") },
      { url: require("./images4.jpg") },
      { url: require("./images5.jpg") },
      { url: require("./images2.jpg") }
    ];

    return (
      <div className="image-slider">
        <SimpleImageSlider width={796} height={450} images={images} />
      </div>
    );
  }
}

export default ImageSlider;
