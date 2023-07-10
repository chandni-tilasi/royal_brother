import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class Fleet extends React.Component {
  getScooters() {
    var settings = {
      slidesToShow: 4,
      slidesToScroll: 1,
      arrows: true
    };

    return (
      <div className="mdl-cell mdl-cell--12-col card-slider">
        <Slider {...settings}>
          <div className="demo-card-square mdl-card mdl-shadow--2dp sub-viewcard">
            <div className="mdl-card__title mdl-card--expand section-one-card">
              <a href="">
                <img src="https://d3vp2rl7047vsp.cloudfront.net/bike_models/images/000/000/250/medium/yo-bykes-drift.png?1564149864" />
              </a>
            </div>
            <div className="mdl-card__actions mdl-card--border section-two-card">
              <div class="fleet-info">
                <p class="fleet-name">Yobykes Drift (electric) </p>
                <p class="fleet-price">Starts at ₹ 10/hr</p>
              </div>
            </div>
          </div>

          <div className="demo-card-square mdl-card mdl-shadow--2dp sub-viewcard">
            <div className="mdl-card__title mdl-card--expand section-one-card">
              <a href="">
                <img src="https://d3vp2rl7047vsp.cloudfront.net/bike_models/images/000/000/262/medium/Epluto-image.png?1570980637" />
              </a>
            </div>
            <div className="mdl-card__actions mdl-card--border section-two-card">
              <div class="fleet-info">
                <p class="fleet-name">Pure EV Epluto (electric) </p>
                <p class="fleet-price">Starts at ₹ 10/hr</p>
              </div>
            </div>
          </div>

          <div className="demo-card-square mdl-card mdl-shadow--2dp sub-viewcard">
            <div className="mdl-card__title mdl-card--expand section-one-card">
              <a href="">
                <img src="https://d3vp2rl7047vsp.cloudfront.net/bike_models/images/000/000/002/medium/Activa_3G-min_2.png?1519738389" />
              </a>
            </div>
            <div className="mdl-card__actions mdl-card--border section-two-card">
              <div class="fleet-info">
                <p class="fleet-name">Honda Activa 3G</p>
                <p class="fleet-price">Starts at ₹ 13/hr</p>
              </div>
            </div>
          </div>

          <div className="demo-card-square mdl-card mdl-shadow--2dp sub-viewcard">
            <div className="mdl-card__title mdl-card--expand section-one-card">
              <a href="">
                <img src="https://d3vp2rl7047vsp.cloudfront.net/bike_models/images/000/000/251/medium/Activa-acitvely-disabled.png?1562927774" />
              </a>
            </div>
            <div className="mdl-card__actions mdl-card--border section-two-card">
              <div class="fleet-info">
                <p class="fleet-name">
                  Honda Activa - Assisted (Specially abled)
                </p>
                <p class="fleet-price">Starts at ₹ 13/hr</p>
              </div>
            </div>
          </div>

          <div className="demo-card-square mdl-card mdl-shadow--2dp sub-viewcard">
            <div className="mdl-card__title mdl-card--expand section-one-card">
              <a href="">
                <img src="https://d3vp2rl7047vsp.cloudfront.net/bike_models/images/000/000/053/medium/Aviator.._.png?1504095942" />
              </a>
            </div>
            <div className="mdl-card__actions mdl-card--border section-two-card">
              <div class="fleet-info">
                <p class="fleet-name">Honda Aviator</p>
                <p class="fleet-price">Starts at ₹ 15/hr</p>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    );
  }

  render() {
    return (
      <div className="mdl-tabs mdl-js-tabs mdl-js-ripple-effect">
        <div className="mdl-cell mdl-cell--12-col">
          <div className="our-fleet--heading">
            Our Fleet <hr className="hr-bottom" />
          </div>
          <div className="mdl-tabs mdl-js-tabs fleet_tabs">
            <div className="mdl-tabs__tab-bar fleet-btn-div">
              <a
                href="#bikesless"
                className="mdl-tabs__tab fleet-btn"
                id="bikeless"
              >
                Bikes {"<"} 250cc
              </a>
              <a
                href="#scooters"
                className="mdl-tabs__tab fleet-btn is-active"
                id="scooters"
              >
                Scooters
              </a>
              <a
                href="#bikesmore"
                className="mdl-tabs__tab fleet-btn"
                id="bikesmore"
              >
                Bikes > 250cc
              </a>
            </div>

            <div className="mdl-cell mdl-cell--12-col view-main-cards">
              {this.getScooters()}
            </div>
          </div>
          <button className="mdl-button mdl-js-button view-fleet">
            View all fleet
          </button>
        </div>
      </div>
    );
  }
}
