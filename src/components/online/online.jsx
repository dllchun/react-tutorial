import "./online.css";
import { Users } from "/Users/vincentcheung/Desktop/Coding/react-project/social-media-clone/client/client/src/dummpyData.js";

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
