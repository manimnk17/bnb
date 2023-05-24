import React from "react";

export default function search() {
  return (
    <div style={{margin:'auto', padding:'10px'}}>
    <div className="ui action input">
      <input type="text" placeholder="Search..." />
      <button className="ui icon button">
        <i className="search icon"></i>
      </button>
    </div>
    </div>
  );
}
