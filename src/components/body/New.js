import React, { useState } from "react";
import MoistCarrot from "../../assets/cakeList/MOIST Carrot Cake With Cream Cheese Frosting _ Butternut Bakery.png";
import Paradise from "../../assets/cakeList/Paradise-Island-Cake-Art.jfif";
import RedVelvet from "../../assets/cakeList/Red Velvet cake.jfif";
import BlackLavender from "../../assets/cakeList/Blackberry Lavender Naked Cake with White Chocolate Buttercream_.jfif";
import ToggleLike from "./ToggleLike";
import AddToCart from "./addToCart"
export default function New() {
  

  return (
    <div style={{paddingTop:"10px"}}>
      <table>
        <tbody>
        <tr>
          <td>
            <h1 className="ui header">New</h1>
          </td>
        </tr>
        <tr>
          <td>
            <div className="ui link cards" style={{ displya: "flex" }}>
              <div className="card">
                <div className="image">
                  <img src={MoistCarrot} />
                </div>
                <div className="content">
                  <div className="header">Moist Carrot</div>
                  <div className="meta">
                    <a>Cream</a>
                  </div>
                  <div className="description">
                  Carrot cake is carrots mixed into the batter and white cream cheese frosting...
                  </div>
                </div>
                <div className="extra content">
                  <span className="right floated"><AddToCart></AddToCart></span>
                  <span>
                    <ToggleLike/>
                  </span>
                </div>
              </div>
              <div className="card">
                <div className="image">
                  <img src={Paradise} />
                </div>
                <div className="content">
                  <div className="header">Paradise Island</div>
                  <div className="meta">
                    <span className="date">Jelly</span>
                  </div>
                  <div className="description">
                  Realistic Paradise Island Cakes Almost Too Beautiful To Eat.
                  </div>
                </div>
                <div className="extra content">
                  <span className="right floated"><AddToCart></AddToCart></span>
                  <span>
                    <ToggleLike />
                  </span>
                </div>
              </div>
              <div className="card">
                <div className="image">
                  <img src={RedVelvet} min-width={"100%"} max-width={"100%"} />
                </div>
                <div className="content">
                  <div className="header">Red Velvet</div>
                  <div className="meta">
                    <a>Cream</a>
                  </div>
                  <div className="description">
                  Red Velvet Cake with Cream Cheese Frosting! Fluffy, soft, buttery...
                  </div>
                </div>
                <div className="extra content">
                  <span className="right floated"><AddToCart></AddToCart></span>
                  <span>
                    <ToggleLike
                      
                    />
                  </span>
                </div>
              </div>
              <div className="card">
                <div className="image">
                  <img src={BlackLavender} />
                </div>
                <div className="content">
                  <div className="header">Black Lavender</div>
                  <div className="meta">
                    <a>Forest</a>
                  </div>
                  <div className="description">
                  Blackberry Lavender Naked Cake with White Chocolate Buttercream...
                  </div>
                </div>
                <div className="extra content">
                  <span className="right floated"><AddToCart></AddToCart></span>
                  <span>
                    <ToggleLike
                      
                    />
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
