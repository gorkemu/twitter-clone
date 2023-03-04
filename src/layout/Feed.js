import React, { useState, useEffect, useRef } from "react";
import Divider from "../components/Divider";
import TweetBox from "../components/TweetBox";
import FeedList from "../components/FeedList";
import { useAuth } from "../firebase/auth";
import { getTweets } from "../firebase/firestore";
import useOnClickOutside from "../hooks/useOnClickOutside";
import ProfileModalHome from "../components/ProfileModalHome";

const Feed = ({ avatar }) => {
  const { authUser } = useAuth();
  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    if (authUser) {
      getTweets(authUser.uid, setTweets);
    }
  }, [authUser]);

  const ref = useRef();
  const [modal, setModal] = useState(false);
  const handleModal = (e) => {
    setModal(!modal);
  };
  useOnClickOutside(ref, () => setModal(false));

  return (
    <main className="flex-1 flex-col border-r border-l border-gray-lighter">
      <header className="sticky top-0 p-4 border-b border-gray-lightest bg-white z-10 flex justify-between items-center">
        <div className="font-bold text-xl text-black">Home</div>
        {modal && (
          <div ref={ref} className="sm:hidden">
            <ProfileModalHome />
          </div>
        )}
        <div
          onClick={handleModal}
          className="mb-2 p-3 flex items-center justify-center hover:bg-gray-light rounded-full w-13 h-13 cursor-pointer transform transition-colors duration-200 sm:hidden"
        >
          <img src={avatar} alt="Profile" className="w-10 h-10 rounded-full" />
        </div>
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
