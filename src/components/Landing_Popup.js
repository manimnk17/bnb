import React from "react";
import "./../img.css";
import F1 from "../assets/ImageSlider/pexels-archie-binamira-1027811.jpg";
import F2 from "../assets/ImageSlider/pexels-brent-keane-1702373.jpg";
import F3 from "../assets/ImageSlider/pexels-daria-shevtsova-1070850.jpg";
import F4 from "../assets/ImageSlider/pexels-energepiccom-159887.jpg";
import BgImage from "../assets/ImageSlider/pexels-pixabay-276514.jpg";

export default function Landing_Popup() {
  var counter = 1;
  setInterval(function () {
    document.getElementById("radio" + counter).checked = true;
    counter++;
    if (counter > 4) {
      counter = 1;
    }
  }, 5000);

  return (
    <div
      style={{
        paddingTop: "100px",
        position: "absolute",
        width: "100%",
        height: "100%",
      }}
    >
      <div style={{ backgroundImage: `url(${BgImage})` }}>
        <table
          style={{
            marginLeft: "auto",
            marginRight: "auto",
            paddingTop: "10px",
          }}
        >
          <tr className="body1">
            <div display="flex">
            <h1 style={{color:"white"}}>Welcome to Bake n Bite</h1>

            </div>
                        <div className="slider">
              <div className="slides">
                <input type="radio" name="radio-btn" id="radio1" />
                <input type="radio" name="radio-btn" id="radio2" />
                <input type="radio" name="radio-btn" id="radio3" />
                <input type="radio" name="radio-btn" id="radio4" />

                <div className="slide first">
                  <img src={F1} alt="" />
                </div>
                <div className="slide">
                  <img src={F2} alt="" />
                </div>
                <div className="slide">
                  <img src={F3} alt="" />
                </div>
                <div className="slide">
                  <img src={F4} alt="" />
                </div>

                <div className="navigation-auto">
                  <div className="auto-btn1"></div>
                  <div className="auto-btn2"></div>
                  <div className="auto-btn3"></div>
                  <div className="auto-btn4"></div>
                </div>
              </div>

              <div className="navigation-manual">
                <label for="radio1" className="manual-btn"></label>
                <label for="radio2" className="manual-btn"></label>
                <label for="radio3" className="manual-btn"></label>
                <label for="radio4" className="manual-btn"></label>
              </div>
            </div>
          </tr>
        </table>
      </div>
    </div>
  );
}
