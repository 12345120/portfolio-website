import { useState } from "react";
import "../styles/LeftBar.css";
import { ReactComponent as Arrow } from "../assets/icons/arrow.svg";
import { useStateValue } from "../context/StateProvider";

function LeftBar() {
  const [topHover, setTopHover] = useState(false);
  const [, dispatch] = useStateValue();

  const scrollToTop = () => {
    document.getElementById("app").scrollIntoView({ behavior: "smooth" });
  };

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
        className={`LeftBar_topArrow ${topHover ? "LeftBar___hover" : ""}`}
      />
      <div
        className="LeftBar_btn"
        onMouseEnter={() => {
          setTopHover(true);
          dispatch({
            type: "MOUSE_EVENT",
            trigger: true,
          });
        }}
        onMouseLeave={() => {
          setTopHover(false);
          dispatch({
            type: "MOUSE_EVENT",
            trigger: false,
          });
        }}
        style={topHover ? { transform: "scale(1.35)" } : {}}
        onClick={() => scrollToTop()}
      >
        TOP
      </div>
    </div>
  );
}

export default LeftBar;
