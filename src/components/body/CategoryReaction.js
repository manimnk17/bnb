
import React, {useState} from 'react'
import BgCate from '../../assets/7930-removebg-preview.png';
export default function CategoryReaction(props) {

    const [active, setActive] = useState(false);

  const handleChangeActive = () => {
    setActive((previousStar) => {
      return !previousStar;
    });
  };


  return (
    <div>
      <div className="toggle-wrapper" style={{display:"flex"}}>
        {active ? (<div style={{position : "relative"}}>
          <img
            className="active"
            src={props.Active}
            alt="yellow star"
            onMouseLeave={() => handleChangeActive()}
            height = "100%"
            width = "100%"
            style = {{opacity : "30%"}}
            ></img>
            <div style={{position: "absolute",width:"250px", height:"100px", top: "50%",left : "50%", transform: "translate(-50%, -50%)"}}>
              <img src = {BgCate} style={{position : "absolute", width : "100%",height:"100%"}}/>
              <h1 className="ui header h1" style={{color:"black", paddingTop:"8px", paddingLeft:"35px"}}>
              {props.Category}
              </h1>
              <h6>

              </h6>
            </div>
            </div>
        ) : (
          <img
            className="inactive"
            src={props.Active}
            alt="black and white star"
            onMouseEnter={() => handleChangeActive()}
            height = "100%"
            width = "100%"

          />
        )}
      </div>
    </div>
  )
}
