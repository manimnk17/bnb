import React, {useState} from "react";
import Inactive from "../../assets/icons8-plus-50.png";
import Active from "../../assets/double-tick.png";



function ToggleLike() {

  const [active, setActive] = useState(false);

  const handleChangeActive = () => {
    setActive((previousStar) => {
      return !previousStar;
    });
  };


  return (
    <>
      <div className="toggle-wrapper" >
        {active ? (<div style={{display:'flex'}}>
            <h4 style={{paddingTop:'8px', paddingRight:'3px', color:'black'} } onClick={() => handleChangeActive()}>Added to cart </h4>
          <img
            className="active"
            src={Active}
            alt="yellow star"
            onClick={() => handleChangeActive()}
            height={30}
            width={30}
          /></div>
        ) : (
            <div style={{display:'flex'}}>
            <h4 style={{paddingTop:'8px', paddingRight:'3px', color:'black'}} onClick={() => handleChangeActive()}>Add to cart </h4>
          <img
            className="inactive"
            src={Inactive}
            alt="black and white star"
            onClick={() => handleChangeActive()}
            height={30}
            width={30}
          />
          </div>
        )}
      </div>
    </>
  );
}

export default ToggleLike;