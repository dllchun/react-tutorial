import "./online.css";
import { Users } from "C:/Users/info/react-project/social-media-app/social-media-app/src/dummpyData.js";

export default function Online(props) {
  return (
    <li className="rightBarFriend">
      <div className="rightBarProfileImgContainer">
        <img
          src={props.profilePicture}
          alt={props.username}
          className="rightBarProfileImg"
        />
        <span className="rightBarOnline"></span>
      </div>
      <span className="rightBarUserName">{props.username}</span>
    </li>
  );
}
