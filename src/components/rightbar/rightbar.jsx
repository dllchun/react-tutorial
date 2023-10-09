import React from "react";
import "./rightbar.css";
import { Users } from "/Users/vincentcheung/Desktop/Coding/react-project/social-media-clone/client/client/src/dummpyData.js";
import Online from "../online/online";

export default function Rightbar() {
  return (
    <div className="rightBarContainer">
      <div className="rightBarWrapper">
        <div className="birthdayContainer">
          <img src="/assets/gift.png" alt="" className="birthdayImg" />
          <span className="birthdayText">
            <b>vincent</b> and <b>3 other friends</b> have a birthday today
          </span>
        </div>
        <img src="/assets/ad.png" alt="" className="rightBarAd" />
        <h4 className="rightBarTitle">Online Friends</h4>
        <ul className="rightBarFriendList">
          {Users.map((user) => {
            return (
              <Online
                key={user.id}
                username={user.username}
                profilePicture={user.profilePicture}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
}
