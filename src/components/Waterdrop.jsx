import { forwardRef, useEffect, useRef, useState } from "react";
import "../styles/Waterdrop.css";

export default function Waterdrop() {
  const [clicked, setClicked] = useState(false);
  const [hovered, setHovered] = useState(false);
  const charRef = useRef(null);
  const pathRef = useRef(null);
  const [pathLength, setPathLength] = useState(0);

  useEffect(() => {
    setPathLength(pathRef.current.getTotalLength());
  }, [pathRef]);

  return (
    <div className="Waterdrop">
      <div
        className={`Waterdrop_body ${clicked ? "Waterdrop_body__opac" : ""}`}
      ></div>

      <h1
        className={`Waterdrop_text ${
          hovered ? "Waterdrop_text___unblur" : ""
        } ${clicked ? "Waterdrop_text___fadeOut" : ""}`}
      >
        Click!
      </h1>

      <svg visibility={"hidden"} style={{ position: "absolute" }}>
        <path
          ref={pathRef}
          d="M 0 0 C 85.5 -25.2 102 50 8 88 C -86 117 -190 -43 -2.1 -86.4 L 193 -88"
        ></path>
      </svg>
      <h1 className="Waterdrop_loadingText">
        <TextSplit text={"Loading"} ref={charRef} pathLength={pathLength} />
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

const TextSplit = forwardRef(({ text, pathLength }, ref) => {
  const fullText = text;
  let characters = [];
  const numChars = fullText.length;
  for (let i = 0; i < fullText.length; i++) {
    characters.push(fullText.charAt(i));
  }

  const [width, setWidth] = useState("");

  useEffect(() => {
    setWidth(ref.current.offsetWidth);
  }, [ref]);

  console.log("width: ", width);
  console.log("path length: ", pathLength);

  return (
    <span className="word">
      {characters.map((c, index) => (
        <span
          key={index}
          ref={ref}
          className="char"
          style={{
            "--char-index": index,
            "--char-width": width + "px",
            "--num-chars": numChars,
            "--path-len": pathLength + "px",
          }}
        >
          {c}
        </span>
      ))}
    </span>
  );
});
