import React, { useState, useEffect } from "react";
import Divider from "../components/Divider";
import TweetBox from "../components/TweetBox";
import FeedList from "../components/FeedList";
import { useAuth } from "../firebase/auth";
import { getTweets } from "../firebase/firestore";

const Feed = ({ avatar }) => {
  const { authUser } = useAuth();
  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    if (authUser) {
      getTweets(authUser.uid, setTweets);
    }
  }, [authUser]);

  return (
    <main className="flex-1 flex-col border-r border-l border-gray-lighter">
      <header className="sticky top-0 p-4 border-b border-gray-lightest bg-white z-10">
        <span className="font-bold text-xl text-black">Home</span>
      </header>
      <div className="flex px-4 py-3 space-x-4">
        <img
          src={avatar}
          alt="Profile"
          className="w-12 h-12 rounded-full hover:opacity-90 cursor-pointer"
        />
        <TweetBox />
      </div>
      <Divider />
      <FeedList tweets={tweets} avatar={avatar} />
    </main>
  );
};

export default Feed;
