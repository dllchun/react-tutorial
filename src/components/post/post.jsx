import { useState } from "react";
import "./post.css";
import { MoreVert } from "@mui/icons-material";
import { Users } from "/Users/vincentcheung/Desktop/Coding/react-project/social-media-clone/client/client/src/dummpyData.js";

export default function Post(props) {
  const [like, setLike] = useState(props.like);
  const [islike, setIsLiked] = useState(false);

  const likeHandler = () => {
    setLike(islike ? like - 1 : like + 1);
    setIsLiked(!islike);
  };
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              className="postProfileImg"
              src={Users.filter((u) => u.id === props.userId)[0].profilePicture}
              alt=""
            />
            <span className="postProfileName">
              {Users.filter((u) => u.id === props.userId)[0].username}
            </span>
            <span className="postDate">{props.date}</span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{props.desc}</span>
          <img className="postImg" src={props.photo} alt={props.desc} />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img
              className="likeIcon"
              src="/assets/like.png"
              onClick={likeHandler}
            />
            <img
              className="likeIcon"
              src="/assets/heart.png"
              alt=""
              onClick={likeHandler}
            />
            <span className="postLikeCounter">{like} people liked it</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">{props.comment} comments</span>
          </div>
        </div>
      </div>
    </div>
  );
}
