import React from "react";
import Banner from "./Banner";
import Fleet from "./Fleet";
import About from "./About";
import Feature from "./Feature";
import Footer from "./Footer";
import $ from "jquery";

export default class HomePageLayout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cityData: [
        {
          image:
            "https://d3vp2rl7047vsp.cloudfront.net/cities/round_images/000/000/039/original/Agra_new.jpg?1558599458",
          text: "Agra"
        },
        {
          image:
            "https://d3vp2rl7047vsp.cloudfront.net/cities/round_images/000/000/023/original/Ahmedabad_b8d1eb5783c996a077aff887d35e4168.jpg?1558599488",
          text: "Ahmedabad"
        },
        {
          image:
            "https://d3vp2rl7047vsp.cloudfront.net/cities/round_images/000/000/022/original/Alleppy_817ae817e23cf6708ce38c850cc42e6d.jpg?1558599504",
          text: "Alleppey"
        },
        {
          image:
            "https://d3vp2rl7047vsp.cloudfront.net/cities/round_images/000/000/101/original/Amritsar.jpg?1568037649",
          text: "Amritsar"
        },
        {
          image:
            "https://d3vp2rl7047vsp.cloudfront.net/cities/round_images/000/000/017/original/Andaman-_-Nicobar_b5a3ba5c464968f274dfb7a98bcc4dbc.jpg?1558599551",
          text: "Andaman Nicobar"
        },
        {
          image:
            "https://d3vp2rl7047vsp.cloudfront.net/cities/round_images/000/000/001/original/Bangalore_1cf1aa53741a94edc3532f7b2b583c52.jpg?1558599565",
          text: "Bangalore"
        },
        {
          image:
            "https://d3vp2rl7047vsp.cloudfront.net/cities/round_images/000/000/028/original/Bankok_efd1b11328e1ac61488cac98a15dc584.jpg?1558599580",
          text: "Bangkok"
        },
        {
          image:
            "https://d3vp2rl7047vsp.cloudfront.net/cities/round_images/000/000/103/original/Belagaum_%E2%80%93_2.jpg?1572353444",
          text: "Belagavi"
        }
      ]
    };

    this.showLocation = this.showLocation.bind(this);
    this.getLocation = this.getLocation.bind(this);
    this.getlocationModal = this.getlocationModal.bind(this);
  }

  showLocation() {
    return (
      <div id="locationModal" className="modal locationModal hidden">
        <div className="modal-content">
          <div className="modal-header">
            <img src="https://d36g7qg6pk2cm7.cloudfront.net/assets/icons/logo-b03af389c15608bf4fa52378f448a48a9c8f92f70242cc88340e971e7599d6ae.png" />
            {"|"}
            <div className="modal-heading-text">
              <span>Bike Rentals</span>
            </div>

            <span
              className="close-icon"
              id="close"
              onClick={this.getlocationModal}
            >
              <i className="material-icons">close</i>
            </span>
          </div>
          <div className="input-field">
            <i className="material-icons prefix search">search</i>
            <input
              type="text"
              aria-label="city input"
              id="autocomplete-input"
              className="search-text"
              placeholder="Search or type city to select"
            />
            <i className="close-icon clear-all-btn">Clear</i>
          </div>
          <div className="modal-body mdl-grid mdl-cell--12-col">
            {this.state.cityData.map((item) => (
              <div className="mdl-cell mdl-cell--3-col city-icons" key={item}>
                <a href="" className="city-iconImg">
                  <img src={item.image} />
                  <p>{item.text}</p>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  getlocationModal() {
    $("body").removeClass("fixed");
    $("#locationModal").addClass("hidden");
  }

  getLocation() {
    $("body").addClass("fixed");
    $("#locationModal").removeClass("hidden");
  }

  render() {
    return (
      <div className="mdl-layout mdl-js-layout">
        <header className="mdl-layout__header mdl-layout--fixed-header main-header">
          <div className="mdl-layout__header-row sub-contact-header">
            <div>
              <span>
                <i className="material-icons phone-icon">call</i>
              </span>
              <a href="">+918061996011</a>
              {"/"}
              <a href="">+91 1246236747 </a>
            </div>
          </div>
          <div className="mdl-layout__header-row sub-main-header">
            <a href="" className="mdl-navigation__Link">
              <img
                src="https://d36g7qg6pk2cm7.cloudfront.net/assets/icons/sidenav-c7ead1a665e60b9d9c16560111f4e4a2561c85b41fb42b83aa879b11056eec14.png"
                className="horizontal-menu"
              />
            </a>
            <a href="" className="mdl-navigation__Link">
              <img
                src="https://d36g7qg6pk2cm7.cloudfront.net/assets/icons/logo-b03af389c15608bf4fa52378f448a48a9c8f92f70242cc88340e971e7599d6ae.png"
                className="logo-menu"
              />
            </a>
            <a className="mdl-navigation__link menu-link" href="">
              Tariff
            </a>
            <a className="mdl-navigation__link menu-link" href="">
              Riding Gears
            </a>
            <a className="mdl-navigation__link menu-link" href="">
              Offers
            </a>
            <a className="mdl-navigation__link menu-link" href="">
              Partner With Us
            </a>
            <a className="mdl-navigation__link menu-link" href="">
              Search
            </a>
            <div className="mdl-layout-spacer" />

            <nav className="mdl-navigation mdl-layout--large-screen-only">
              <div>
                <span className="location" onClick={this.getLocation}>
                  <img src="https://d36g7qg6pk2cm7.cloudfront.net/assets/icons/location-71f31ec08c06cf6736a1d12d6381dfc5786c237acdb690006334bd670e011904.png" />
                  <span> Bangalore </span>
                  <img src="https://d36g7qg6pk2cm7.cloudfront.net/assets/icons/arrow-down-3548e3549fe7bc5cef0875b187abda4f7ab493450041e3d6f0d54e1158798ec0.png" />
                </span>
                {this.showLocation()}
              </div>
              <a className="mdl-navigation__link menu-link login" href="">
                Login
              </a>
              <a className="mdl-navigation__link menu-link signup" href="">
                Sign up
              </a>
            </nav>
          </div>
        </header>

        <main className="mdl-layout__content">
          <Banner />
          <Fleet />
          <About />
          <Feature />
          <Footer />
        </main>
      </div>
    );
  }
}
