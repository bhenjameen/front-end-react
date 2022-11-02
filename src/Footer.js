import React from "react";
import "./Footer.css";
import Zuri from "./zuri.png";
import I4G from "./I4G.png";

function Footer() {
  return (
    <div>
      <hr id="line" />
      <div id="footer">
        <img src={Zuri} alt="Zuri Internship" id="zuri" />
        <p>HNG Internship 9 Frontend Task</p>
        <img src={I4G} alt="Ingressive For Good" id="i4g" />
      </div>
    </div>
  );
}

export default Footer;
