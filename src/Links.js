import React from "react";
import "./index.css";
import "./Links.css";
import Slack from "./slack.png";
import Github from "./github.png";

function Links() {
  return (
    <div>
      <div id="links">
        <a
          href="https://twitter.com/reachbenjamin/"
          id="btn_zuri"
          className="links"
        >
          Twitter Link
        </a>
        <br />
        <a href="https://training.zuri.team/" id="btn_zuri" className="links">
          Zuri Team
        </a>
        <br />
        <a href="https://books.zuri.team/" id="books" className="links">
          Zuri Books
        </a>
        <br />
        <a
          href="https://books.zuri.team/python-for-beginners?ref_id=bhenjameen"
          id="book_python"
          className="links"
        >
          Python Books
        </a>
        <br />
        <a href="https://background.zuri.team/" id="pitch" className="links">
          Background Check for Coders
        </a>
        <br />
        <a
          href="https://books.zuri.team/design-rules"
          id="book_design"
          className="links"
        >
          Design Books
        </a>
      </div>
      <div id="socials">
        <img src={Slack} alt="" />
        <img src={Github} alt="" />
      </div>
    </div>
  );
}

export default Links;
