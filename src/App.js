import React from "react";
import Profile from "./Profile";
import Links from "./Links";
import Footer from "./Footer";
import "./ResponsiveCSS/Links.css";
import "./ResponsiveCSS/Footer.css";
import "./ResponsiveCSS/Profile.css";
import "./index.css";
import "./App.css";

function App() {
  return (
    <div id="App">
      <Profile />
      <Links />
      <Footer />
    </div>
  );
}

export default App;
