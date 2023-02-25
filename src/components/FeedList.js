import React from "react";
import FeedItem from "./FeedItem";

const FeedList = ({ tweets }) => {
  return (
    <div>
      {tweets.map((tweet) => (
        <FeedItem {...tweet} key={tweet.id} />
      ))}
    </div>
  );
};

export default FeedList;
