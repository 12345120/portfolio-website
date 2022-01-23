import { forwardRef, useEffect, useRef, useState } from "react";
import "../styles/Waterdrop.css";

export default function Waterdrop() {
  const [clicked, setClicked] = useState(false);
  const [hovered, setHovered] = useState(false);
  const charRef = useRef(null);

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

      <h1 className="Waterdrop_loadingText">
        <TextSplit text={"Loading"} ref={charRef} />
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

const TextSplit = forwardRef(({ text }, ref) => {
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
          }}
        >
          {c}
        </span>
      ))}
    </span>
  );
});
