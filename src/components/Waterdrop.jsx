import { forwardRef, useEffect, useRef, useState } from "react";
import "../styles/Waterdrop.css";

export default function Waterdrop({children }) {
  const [clicked, setClicked] = useState(false);
  const [hovered, setHovered] = useState(false);

  return (
    <div className="Waterdrop">
      <div
        className={`Waterdrop_body ${clicked ? "Waterdrop_body__opac" : ""}`}
      >
        {children}
      </div>

      <h1
        className={`Waterdrop_text ${
          hovered ? "Waterdrop_text___unblur" : ""
        } ${clicked ? "Waterdrop_text___fadeOut" : ""}`}
      >
        Click!
      </h1>

      <h1 className="Waterdrop_loadingText">
        <TextSplit text={"Loading!"} clicked={clicked}/>
      </h1>

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

const TextSplit = ({ text, clicked }) => {
  const [width, setWidth] = useState("");
  
  const fullText = text;
  let characters = [];
  const numChars = fullText.length;
  for (let i = 0; i < fullText.length; i++) {
    characters.push(fullText.charAt(i));
  }

  const scalePath = (path, scale) => {
    const pathElements = path.split(/\s+/);
    const pathReducer = (prevVal, currVal) => {
      if (isNaN(currVal)) {
        return prevVal + " " + currVal;
      } else {
        return prevVal + " " + currVal * scale;
      }
    }
    const scaledPath = pathElements.reduce(pathReducer);
    return scaledPath; 
  }
  
  const path = "M 0 0 C 126 -66 78 85 8 88 C -58 64 -65 50 -90 13 C -130 -97 -87 -90 114 -83"
  const scale = 1.4;
  const scaledPath = scalePath(path, scale);
  
  return (
    <span className="word">
      {characters.map((c, index) => (
        <span
          key={index}
          className={`char ${clicked ? 'char-animation' : ''}`}
          style={{
            "--char-index": `${index}`,
            "--char-width": 20 + "px",
            "--num-chars": numChars,
            "--path": `"${scaledPath}"`
          }}
        >
          {c}
        </span>
      ))}
      
    </span>
  );
};
