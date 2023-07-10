import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class Banner extends React.Component {
  constructor(props) {
    super(props);
    this.bannerSlider = this.bannerSlider.bind(this);
  }

  bannerSlider() {
    var settings = {
      // dots: true,
      infinite: true,
      slidesToShow: 1.5,
      slidesToScroll: 1,
      autoplay: true
    };

    return (
      <div className="mdl-cell mdl-cell--12-col-desktop mdl-cell--4-col-phone banner_slider">
        <Slider {...settings}>
          <div>
            <img src="https://d36g7qg6pk2cm7.cloudfront.net/assets/icons/paypal_with_riding_gear-27019f64ab59c2acc30261fd7921df92976f8c54490c215f3d113b7375d8ee80.jpg" />
          </div>
          <div>
            <img src="https://d36g7qg6pk2cm7.cloudfront.net/assets/icons/riding_gear_with_paypal-6b1c9eb2d784e3fdcea65e23b8a618cf67786ca39c58d0e448e61d65b888e176.jpg" />
          </div>
        </Slider>
      </div>
    );
  }

  render() {
    return (
      <div className="mdl-grid mdl-grid--no-spacing">
        <div className="mdl-cell mdl-cell--12-col-desktop mdl-cell--4-col-phone banner-img">
          <div className="mdl-cell mdl-cell--3-col-desktop mdl-cell--4-col-phone form-banner">
            <div className="sub-form-banner">
              <h6>Search your next ride</h6>
              <div className="form-label">Pickup</div>
              <input type="text" className="input-text" />

              <div className="form-label">Dropoff</div>
              <input type="text" className="input-text" />
              <div>
                <button class="mdl-button mdl-js-button mdl-button--raised search-btn">
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
        <div>{this.bannerSlider()}</div>
      </div>
    );
  }
}
