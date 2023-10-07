import React from "react";
import "./rightbar.css";

export default function Rightbar() {
  const Friends = [
    {
      id: 1,
      name: "Vincent Cheung",
      img: "/assets/person/3.jpeg",
      online: true,
    },
    { id: 2, name: "Kim Mak", img: "/assets/person/4.jpeg", online: true },
    { id: 3, name: "Cherry Tang", img: "/assets/person/5.jpeg", online: false },
    { id: 4, name: "Kawing Wong", img: "/assets/person/6.jpeg", online: true },
  ];

  const Friend = (props) => {
    return (
      <li className="rightBarFriend">
        <div className="rightBarProfileImgContainer">
          <img
            src={props.img}
            alt={props.name}
            className="rightBarProfileImg"
          />
          <span className="rightBarOnline"></span>
        </div>
        <span className="rightBarUserName">{props.name}</span>
      </li>
    );
  };

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
          {Friends.map((friend) => {
            if (friend.online) {
              return (
                <Friend key={friend.id} name={friend.name} img={friend.img} />
              );
            }
          })}
        </ul>
      </div>
    </div>
  );
}
