import "../styles/SquareSpinner.css";

export default function SquareSpinner({
  wrapperStyle,
  timeScale,
  borderScale,
}) {
  return (
    <div className="SquareSpinner_squareWrapper" style={wrapperStyle}>
      <div
        className="SquareSpinner_bigSquare"
        style={{
          "--tilt": "30deg",
          "--direction": "1",
          "--time": `${20 * timeScale}s`,
          "--border-scale": borderScale,
        }}
      >
        <div
          className="SquareSpinner_innerSquare"
          style={{
            "--tilt": `10deg`,
            "--direction": "1",
            "--time": `${16 * timeScale}s`,
            "--border-scale": borderScale,
          }}
        ></div>
        <div
          className="SquareSpinner_innerSquare"
          style={{
            "--tilt": `70deg`,
            "--direction": "-1",
            "--time": `${10 * timeScale}s`,
            "--border-scale": borderScale,
          }}
        ></div>
      </div>
    </div>
  );
}
