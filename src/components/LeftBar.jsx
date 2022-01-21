import { useState } from "react";
import "../styles/LeftBar.css";
import { ReactComponent as Arrow } from "../assets/icons/arrow.svg";

function LeftBar() {
  const [topHover, setTopHover] = useState(false);

  return (
    <div className="LeftBar">
      <div
        className="LeftBar_name"
        style={topHover ? { opacity: "0" } : { opacity: "1" }}
      >
        HEON YIM
      </div>
      <div
        className="LeftBar_shape"
        style={topHover ? { opacity: "0" } : { opacity: "1" }}
      ></div>

      <Arrow
        className={`LeftBar_topArrow ${topHover ? 'LeftBar___hover' : ''}`}
      />
      <div
        className="LeftBar_btn"
        onMouseEnter={() => setTopHover(true)}
        onMouseLeave={() => setTopHover(false)}
        style={topHover ? {transform: 'scale(1.35)'} : {}}
      >
        TOP
      </div>
    </div>
  );
}

export default LeftBar;
