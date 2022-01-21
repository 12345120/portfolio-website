import { useState } from "react";
import "../styles/Waterdrop.css";

function Waterdrop() {
  const [clicked, setClicked] = useState(false);

  return (
    <div className="Waterdrop">
      <div
        className={`Waterdrop_body ${
          clicked ? "Waterdrop_body__opac" : ""
        }`}
      ></div>
      
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
        ></div>
      </div>
    </div>
  );
}

export default Waterdrop;
