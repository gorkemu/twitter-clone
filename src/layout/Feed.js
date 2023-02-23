import React, { useState, useEffect } from "react";
import Divider from "../components/Divider";
import TweetBox from "../components/TweetBox";
import { db } from "../firebase/firebase";
import { collection, onSnapshot, query, orderBy } from "firebase/firestore";
import FeedList from "../components/FeedList";

const Feed = () => {
  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    const q = query(collection(db, "feed"), orderBy("createdAt", "desc"));
    onSnapshot(q, (snapshot) =>
      setTweets(snapshot.docs.map((doc) => doc.data()))
    );
  }, []);

  console.log(tweets);

  return (
    <main className="flex-1 flex-col border-r border-l border-gray-lighter">
      <header className="sticky top-0 p-4 border-b border-gray-lightest bg-white z-10">
        <span className="font-bold text-xl text-black">Home</span>
      </header>
      <div className="flex px-4 py-3 space-x-4">
        <img
          src="https://pbs.twimg.com/profile_images/1624130756829233153/ZEBsJDiR_400x400.jpg"
          alt="Profile"
          className="w-12 h-12 rounded-full"
        />
        <TweetBox />
      </div>
      <Divider />
      <FeedList tweets={tweets} />
    </main>
  );
};

export default Feed;
