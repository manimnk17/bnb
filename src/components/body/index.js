import React from "react";
import Category from "./Category";
import TopSelling from "./TopSelling";
import New from "./New";
export default function index() {
  return (
    <div style={{ paddingTop: "100px", position: "absolute", width: "100%" }}>
      <div>
        <table
          style={{
            marginLeft: "auto",
            marginRight: "auto",
            paddingTop: "10px",
          }}
        >
          <tbody>
            <tr>
              <td>
                <TopSelling />
              </td>
            </tr>
            <tr>
              <td>
                <New />
              </td>
            </tr>
            <tr>
              <td>
                <Category />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
