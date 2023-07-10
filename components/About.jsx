import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class About extends React.Component {
  constructor(props) {
    super(props);
    this.populateTemplate = this.populateTemplate.bind(this);
  }

  populateTemplate() {
    var settings = {
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true
    };

    return (
      <div className="mdl-cell mdl-cell--12-col about_slider">
        <Slider {...settings}>
          <div className="about_image1"> </div>
          <div className="about_image2"> </div>
          <div className="about_image3"> </div>
        </Slider>
      </div>
    );
  }
  render() {
    return (
      <div className="mdl-grid mdl-grid--no-spacing">
        <div className="mdl-cell mdl-cell--12-col about_container">
          <div className="about_heading">
            WE BELIEVE IN QUALITY
            <hr className="hr-bottom" />
          </div>
          {this.populateTemplate()}
        </div>
      </div>
    );
  }
}
