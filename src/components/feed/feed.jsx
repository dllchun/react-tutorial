import React from "react";
import "./feed.css";
import Share from "../share/share";

export default function Feed() {
  return (
    <div className="feedContainer">
      <div className="feedWrapper">
        <Share />
      </div>
    </div>
  );
}
