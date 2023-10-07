import React from "react";
import "./sidebar.css";
import {
  RssFeed,
  Message,
  PlayCircle,
  Group,
  Bookmark,
  HelpOutline,
  WorkOutline,
  Event,
  School,
} from "@mui/icons-material";

export default function Sidebar() {
  return (
    <div className="sideBarContainer">
      <div className="sideBarWrapper">
        <ul className="sideBarList">
          <li className="sideBarListItem">
            <RssFeed className="sideBarListItemIcon" />
            <span className="sideBarListItemText">Feed</span>
          </li>
          <li className="sideBarListItem">
            <Message className="sideBarListItemIcon" />
            <span className="sideBarListItemText">Chats</span>
          </li>
          <li className="sideBarListItem">
            <PlayCircle className="sideBarListItemIcon" />
            <span className="sideBarListItemText">Videos</span>
          </li>
          <li className="sideBarListItem">
            <Group className="sideBarListItemIcon" />
            <span className="sideBarListItemText">Groups</span>
          </li>
          <li className="sideBarListItem">
            <Bookmark className="sideBarListItemIcon" />
            <span className="sideBarListItemText">Bookmarks</span>
          </li>
          <li className="sideBarListItem">
            <HelpOutline className="sideBarListItemIcon" />
            <span className="sideBarListItemText">Questions</span>
          </li>
          <li className="sideBarListItem">
            <WorkOutline className="sideBarListItemIcon" />
            <span className="sideBarListItemText">Jobs</span>
          </li>
          <li className="sideBarListItem">
            <Event className="sideBarListItemIcon" />
            <span className="sideBarListItemText">Events</span>
          </li>
          <li className="sideBarListItem">
            <School className="sideBarListItemIcon" />
            <span className="sideBarListItemText">Courses</span>
          </li>
        </ul>
        <button className="sideBarButton">Show More</button>
        <hr className="sideBarHr" />
        <ui className="sideBarFriendList">
          <li className="sideBarFriend">
            <img
              src="/assets/person/2.jpeg"
              alt=""
              className="sideBarFriendImg"
            />
            <span className="sideBarFriendName">Jan Doe</span>
          </li>
          <li className="sideBarFriend">
            <img
              src="/assets/person/2.jpeg"
              alt=""
              className="sideBarFriendImg"
            />
            <span className="sideBarFriendName">Jan Doe</span>
          </li>
          <li className="sideBarFriend">
            <img
              src="/assets/person/2.jpeg"
              alt=""
              className="sideBarFriendImg"
            />
            <span className="sideBarFriendName">Jan Doe</span>
          </li>
          <li className="sideBarFriend">
            <img
              src="/assets/person/2.jpeg"
              alt=""
              className="sideBarFriendImg"
            />
            <span className="sideBarFriendName">Jan Doe</span>
          </li>
          <li className="sideBarFriend">
            <img
              src="/assets/person/2.jpeg"
              alt=""
              className="sideBarFriendImg"
            />
            <span className="sideBarFriendName">Jan Doe</span>
          </li>
          <li className="sideBarFriend">
            <img
              src="/assets/person/2.jpeg"
              alt=""
              className="sideBarFriendImg"
            />
            <span className="sideBarFriendName">Jan Doe</span>
          </li>
          <li className="sideBarFriend">
            <img
              src="/assets/person/2.jpeg"
              alt=""
              className="sideBarFriendImg"
            />
            <span className="sideBarFriendName">Jan Doe</span>
          </li>
          <li className="sideBarFriend">
            <img
              src="/assets/person/2.jpeg"
              alt=""
              className="sideBarFriendImg"
            />
            <span className="sideBarFriendName">Jan Doe</span>
          </li>
          <li className="sideBarFriend">
            <img
              src="/assets/person/2.jpeg"
              alt=""
              className="sideBarFriendImg"
            />
            <span className="sideBarFriendName">Jan Doe</span>
          </li>
          <li className="sideBarFriend">
            <img
              src="/assets/person/2.jpeg"
              alt=""
              className="sideBarFriendImg"
            />
            <span className="sideBarFriendName">Jan Doe</span>
          </li>
          <li className="sideBarFriend">
            <img
              src="/assets/person/2.jpeg"
              alt=""
              className="sideBarFriendImg"
            />
            <span className="sideBarFriendName">Jan Doe</span>
          </li>
          <li className="sideBarFriend">
            <img
              src="/assets/person/2.jpeg"
              alt=""
              className="sideBarFriendImg"
            />
            <span className="sideBarFriendName">Jan Doe</span>
          </li>
          <li className="sideBarFriend">
            <img
              src="/assets/person/2.jpeg"
              alt=""
              className="sideBarFriendImg"
            />
            <span className="sideBarFriendName">Jan Doe</span>
          </li>
        </ui>
      </div>
    </div>
  );
}
