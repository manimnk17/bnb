import React from "react";
import Profile from '../../assets/user.png'
export default function profile() {
  return (
    <div style={{margin:'auto', padding:'10px'}}>

    
      <div className="item" >
        <img
          className="ui mini circular image"
          src={Profile}
        />
        
      </div>
    </div>
  );
}
