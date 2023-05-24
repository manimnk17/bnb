import React from "react";

import Nutella from "../../assets/cakeList/Nutella.jfif";
import goldenf from "../../assets/cakeList/Golden Afternoon Cake.jfif";
import OkkalaOyee from "../../assets/cakeList/okkalaOyi.jfif";
import ToggleLike from "./ToggleLike";
import strwaberryNaked from "../../assets/cakeList/Strawberry Chamomile Naked Cake_.jfif";
import AddToCart from "./addToCart";

export default function TopSelling() {
  return (
    <div style={{ paddingTop: "10px" }}>
      <table>
        <tbody>
          <tr>
            <td>
              <h1 className="ui header">TopSelling</h1>
            </td>
          </tr>
          <tr>
            <td>
              <div className="ui link cards" style={{ displya: "flex" }}>
                <div className="card">
                  <div className="image">
                    <img src={strwaberryNaked} />
                  </div>
                  <div className="content">
                    <div className="header">Strawberry Chamomile</div>
                    <div className="meta">
                      <a>Naked</a>
                    </div>
                    <div className="description">
                      Celebrate everything you love about spring with this
                      dreamy rustic naked cake...
                    </div>
                  </div>
                  <div className="extra content">
                    <span className="right floated">
                      <AddToCart></AddToCart>
                    </span>
                    <span>
                      <ToggleLike />
                    </span>
                  </div>
                </div>
                <div className="card">
                  <div className="image">
                    <img src={Nutella} />
                  </div>
                  <div className="content">
                    <div className="header">Nutella</div>
                    <div className="meta">
                      <span className="date">Choco</span>
                    </div>
                    <div className="description">
                      Nutella Chocolate Cake is a delicious combination of an
                      incredibly...
                    </div>
                  </div>
                  <div className="extra content">
                    <span className="right floated">
                      <AddToCart></AddToCart>
                    </span>
                    <span>
                      <ToggleLike />
                    </span>
                  </div>
                </div>
                <div className="card">
                  <div className="image">
                    <img src={goldenf} min-width={"100%"} max-width={"100%"} />
                  </div>
                  <div className="content">
                    <div className="header">Golden Afternoon</div>
                    <div className="meta">
                      <a>Fancy</a>
                    </div>
                    <div className="description">
                      The Golden Afternoon cake is Alice Wonderland and home to
                      singing flowers...
                    </div>
                  </div>
                  <div className="extra content">
                    <span className="right floated">
                      <AddToCart></AddToCart>
                    </span>
                    <span>
                      <ToggleLike />
                    </span>
                  </div>
                </div>
                <div className="card">
                  <div className="image" style={{ height: 435, width: 290 }}>
                    <img src={OkkalaOyee} />
                  </div>
                  <div className="content">
                    <div className="header">Cherry Forest</div>
                    <div className="meta">
                      <a>Forest</a>
                    </div>
                    <div className="description">
                      The cake is frosted with a smooth coating of a stabilized
                      whipped cream of cherry ...
                    </div>
                  </div>
                  <div className="extra content">
                    <span className="right floated">
                      <AddToCart></AddToCart>
                    </span>
                    <span>
                      <ToggleLike />
                    </span>
                  </div>
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
