import React from "react";
import FeedItem from "./FeedItem";

const FeedList = ({ tweets, avatar }) => {
  return (
    <div>
      {tweets.map((tweet) => (
        <FeedItem {...tweet} avatar={avatar} key={tweet.id} />
      ))}
    </div>
  );
};

export default FeedList;
