import { useState } from "react";
import "../styles/Waterdrop.css";

function Waterdrop() {
  const [clicked, setClicked] = useState(false);
  const [hovered, setHovered] = useState(false);
  

  return (
    <div className="Waterdrop">
      <div
        className={`Waterdrop_body ${
          clicked ? "Waterdrop_body__opac" : ""
        }`}
      ></div>
      
      
      <svg className="Waterdrop_svg" viewBox="0 0 500 500">
        <path id="curve" d="M73.2,148.6c4-6.1,65.5-96.8,178.6-95.6c111.3,1.2,170.8,90.3,175.1,97">
          <text>
            <textpath></textpath>
          </text>
        </path>
      </svg>
      
      <h1 className={`Waterdrop_text ${
        hovered ? 'Waterdrop_text___unblur' : ''
      } ${
        clicked ? 'Waterdrop_text___fadeOut' : ''
      }`}>Click!</h1>
      
      <h1 className="Waterdrop_loadingText">Loading</h1>
      
      <div
        className={`Waterdrop_circleWrapper ${
          clicked ? "Waterdrop_circleWrapper___bounce" : ""
        }`}
      >
        <div
          className={`Waterdrop_circle ${
            clicked ? "Waterdrop_circle___expand" : ""
          }`}
          onClick={() => setClicked(true)}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        ></div>
      </div>
    </div>
  );
}

export default Waterdrop;
