import "../styles/SquareSpinner.css";

export default function SquareSpinner({ style, timeScale }) {
  
  
  return (
    <div className="SquareSpinner_squareWrapper" style={style}>
      <div
        className="SquareSpinner_bigSquare"
        style={{ "--tilt": "30deg", "--direction": "1", "--time": `${20*timeScale}s` }}
      >
        <div
          className="SquareSpinner_innerSquare"
          style={{ "--tilt": `10deg`, "--direction": "1", "--time": `${16*timeScale}s` }}
        ></div>
        <div
          className="SquareSpinner_innerSquare"
          style={{
            "--tilt": `70deg`,
            "--direction": "-1",
            "--time": `${10*timeScale}s`,
          }}
        ></div>
      </div>
    </div>
  );
}
