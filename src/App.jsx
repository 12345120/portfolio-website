import { useEffect } from "react";
import "./App.css";
import Home from "./components/Home";
import LeftBar from "./components/LeftBar";
import { useStateValue } from "./context/StateProvider";

function App() {
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
        {/* Navbar */}

        {/* Left Bar */}
        <LeftBar></LeftBar>

        {/* Main Content */}
        <Home></Home>

        {/* Footer */}
      </div>

      <div
        className={`App_pointer ${trigger ? "App_pointer___focused" : ""}`}
      ></div>
    </div>
  );
}

export default App;
