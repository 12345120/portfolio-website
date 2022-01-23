import React from "react";
import "../styles/Home.css";
import Waterdrop from "./Waterdrop";

function Home() {
  return (
    <div className="Home">

      <div className="Home_header">HEON YIM</div>
      <div className="Home_content">
        <Waterdrop/>
        <Waterdrop/>
        <Waterdrop/>
        <Waterdrop/>
      </div>
      
      
    </div>
  );
}

export default Home;
