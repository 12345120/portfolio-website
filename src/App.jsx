import { useEffect } from "react";
import "./App.css";
import Home from "./components/Home";
import LeftBar from "./components/LeftBar";
import SquareSpinner from "./components/SquareSpinner";
import { useStateValue } from "./context/StateProvider";

export default function App() {
  const [{ trigger }] = useStateValue();

  useEffect(() => {
    document.addEventListener("mousemove", function (e) {
      const el = document.querySelector(".App_pointer");
      el.style.left = e.clientX + "px";
      el.style.top = e.clientY + "px";
    });
  }, []);

  return (
    <div className="App" id="app">
      <div className="App_content">
        {/*  Square Spinners Top Right */}
        <SquareSpinner
          wrapperStyle={{ top: "0", right: "0", width: "30vw", height: "30vw" }}
          timeScale={1.8}
          borderScale={1}
        />

        {/* Square Spinners Left Low */}
        <SquareSpinner
          wrapperStyle={{ top: "450px", left: "100px", width: "15vw", height: "15vw" }}
          timeScale={0.7}
          borderScale={0.6}
        />

        {/* Left Bar */}
        <LeftBar></LeftBar>

        {/* Main Content */}
        <Home></Home>

        {/* Footer/ContactMe */}
      </div>

      <div
        className={`App_pointer ${trigger ? "App_pointer___focused" : ""}`}
      ></div>
    </div>
  );
}
