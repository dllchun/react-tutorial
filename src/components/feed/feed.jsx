import React from "react";
import "./feed.css";
import Share from "../share/share";
import Post from "../post/post";
import {
  Posts,
  Users,
} from "/Users/vincentcheung/Desktop/Coding/react-project/social-media-clone/client/client/src/dummpyData.js";

export default function Feed() {
  return (
    <div className="feedContainer">
      <div className="feedWrapper">
        <Share />
        {Posts.map((post) => (
          <Post
            id={post.id}
            desc={post.desc}
            comment={post.comment}
            like={post.like}
            photo={post.photo}
            userId={post.userId}
          />
        ))}
      </div>
    </div>
  );
}
