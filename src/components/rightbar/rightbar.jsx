import React from "react";
import "./rightbar.css";
import { Users } from "C:/Users/info/react-project/social-media-app/social-media-app/src/dummpyData.js";
import Online from "../online/online";

export default function Rightbar(profile) {
  const HomePageRightBar = () => {
    <>
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
    </>;
  };

  const ProfileRightBar = () => {
    <>this is profile right bar</>;
  };

  return (
    <div className="rightBarContainer">
      <div className="rightBarWrapper">
        <ProfileRightBar />
      </div>
    </div>
  );
}
