import React from "react";
import Profile_Img from "./me.jpg";
import "./index.css";
import "./Profile.css";

function Profile() {
  return (
    <div id="profile">
      <a href="#">
        <img src={Profile_Img} alt="Profile" id="profile_img" />
      </a>
      <p id="twitter">Benjamin Patrick Eyoh</p>
      <p id="slack">Bhenjameen</p>
    </div>
  );
}

export default Profile;
