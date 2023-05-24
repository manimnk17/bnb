import React from "react";
import Naked from "../../assets/naked chocolate cake with fruit_.jfif";
import CategoryReaction from "./CategoryReaction";
import Choco from "../../assets/Nutella-Schoko-Torte - Emma's Lieblingsstücke.jfif";
import Fancy from "../../assets/17 Steal-Worthy Wedding Cake Ideas for a Parisian-Themed Summer Wedding.jfif";
import Forest from "../../assets/Black Forest Cheesecake.png";
import Cream from "../../assets/HOLI Thandai Spring Cake with Rose Swiss Meringue Buttercream and Strawberry-Rose Petal Jam - Jam Lab.jfif";
import Jelly from "../../assets/jelly_island_cake-1-of-1.jpg";
export default function Category() {
  return (
    <div style={{ marginLeft: "auto", marginRight: "auto" }}>
      <table style={{ width: "100%" }}>
        <tbody>
          <tr>
            <td>
            <div style={{ height: "20px" }}></div>
            </td>
          </tr>
          <tr>
            <td colSpan="4" style={{ width: "100%", textAlign: "center" }}>
              <h1>CATEGORY</h1>
            </td>
          </tr>
          <tr>
            <td>
              <div
                className="ui link cards"
                style={{ paddingLeft: "55px", paddingTop: "10px" }}
              >
                <div className="card">
                  <div className="image">
                    <CategoryReaction Active={Naked} Category={"NAKED CAKE"} />
                  </div>
                </div>
              </div>
            </td>
            <td>
              <div className="ui link cards">
                <div className="card">
                  <div className="image">
                    <CategoryReaction Active={Fancy} Category={"FANCY CAKE"} />
                  </div>
                </div>
              </div>
            </td>
            <td>
              <div className="ui link cards">
                <div className="card">
                  <div className="image">
                    <CategoryReaction Active={Choco} Category={"CHOCO CAKE"} />
                  </div>
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div
                className="ui link cards"
                style={{ paddingLeft: "55px", paddingTop: "10px" }}
              >
                <div className="card">
                  <div className="image">
                    <CategoryReaction
                      Active={Forest}
                      Category={"FOREST CAKE"}
                    />
                  </div>
                </div>
              </div>
            </td>
            <td>
              <div className="ui link cards">
                <div className="card">
                  <div className="image">
                    <CategoryReaction Active={Cream} Category={"CREAM CAKE"} />
                  </div>
                </div>
              </div>
            </td>
            <td>
              <div className="ui link cards">
                <div className="card">
                  <div className="image">
                    <CategoryReaction Active={Jelly} Category={"JELLY CAKE"} />
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
