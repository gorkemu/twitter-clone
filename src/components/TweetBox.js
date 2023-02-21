import React, { useState } from "react";
import {
  EmojiIcon,
  GifIcon,
  LocationIcon,
  MediaIcon,
  PollIcon,
  ScheduleIcon,
} from "../assets/icons";
import { db } from "../firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

const TweetBox = () => {
  const [content, setContent] = useState("");

  const sendTweet = async () => {
    if (content !== "") {
      try {
        const docRef = await addDoc(collection(db, "feed"), {
          displayName: "Görkem Ünal",
          username: "@gorkemu",
          content,
          createdAt: serverTimestamp(),
          avatar:
            "https://pbs.twimg.com/profile_images/1624130756829233153/ZEBsJDiR_400x400.jpg",
        });
        console.log("Tweet added: ", docRef.id);
        setContent("");
      } catch (e) {
        console.error("Error adding tweet: ", e);
      }
    }
  };

  return (
    <div className="flex flex-col flex-1 mt-2 px-2">
      <textarea
        className="w-full text-xl placeholder-gray-placeholder outline-none overflow-hidden resize-none bg-transparent"
        placeholder="What's happening?"
        onChange={(e) => setContent(e.target.value)}
        value={content}
      />
      <div className="flex items-center justify-between">
        <div className="flex -ml-2">
          <div className="flex items-center justify-center w-9 h-9 rounded-full cursor-pointer hover:bg-primary-lighter">
            <MediaIcon className="w-5 h-5 text-primary-base" />
          </div>
          <div className="flex items-center justify-center w-9 h-9 rounded-full cursor-pointer hover:bg-primary-lighter">
            <GifIcon className="w-5 h-5 text-primary-base" />
          </div>
          <div className="flex items-center justify-center w-9 h-9 rounded-full cursor-pointer hover:bg-primary-lighter">
            <PollIcon className="w-5 h-5 text-primary-base" />
          </div>
          <div className="flex items-center justify-center w-9 h-9 rounded-full cursor-pointer hover:bg-primary-lighter">
            <EmojiIcon className="w-5 h-5 text-primary-base" />
          </div>
          <div className="flex items-center justify-center w-9 h-9 rounded-full cursor-pointer hover:bg-primary-lighter">
            <ScheduleIcon className="w-5 h-5 text-primary-base" />
          </div>
          <div className="flex items-center justify-center w-9 h-9 rounded-full cursor-pointer hover:bg-primary-lighter">
            <LocationIcon className="w-5 h-5 text-primary-base" />
          </div>
        </div>
        <button
          className="bg-primary-base text-white rounded-full px-5 py-2 font-medium hover:bg-primary-dark"
          onClick={sendTweet}
        >
          Tweet
        </button>
      </div>
    </div>
  );
};

export default TweetBox;
