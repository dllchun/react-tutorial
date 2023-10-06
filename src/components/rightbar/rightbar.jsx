import React from "react";
import "./rightbar.css";

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
          <li className="rightBarFriend">
            <div className="rightBarProfileImgContainer">
              <img
                src="/assets/person/3.jpeg  "
                alt=""
                className="rightBarProfileImg"
              />
              <span className="rightBarOnline"></span>
            </div>
            <span className="rightBarUserName">John Carter</span>
          </li>
          <li className="rightBarFriend">
            <div className="rightBarProfileImgContainer">
              <img
                src="/assets/person/3.jpeg  "
                alt=""
                className="rightBarProfileImg"
              />
              <span className="rightBarOnline"></span>
            </div>
            <span className="rightBarUserName">John Carter</span>
          </li>
          <li className="rightBarFriend">
            <div className="rightBarProfileImgContainer">
              <img
                src="/assets/person/3.jpeg  "
                alt=""
                className="rightBarProfileImg"
              />
              <span className="rightBarOnline"></span>
            </div>
            <span className="rightBarUserName">John Carter</span>
          </li>
          <li className="rightBarFriend">
            <div className="rightBarProfileImgContainer">
              <img
                src="/assets/person/3.jpeg  "
                alt=""
                className="rightBarProfileImg"
              />
              <span className="rightBarOnline"></span>
            </div>
            <span className="rightBarUserName">John Carter</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
