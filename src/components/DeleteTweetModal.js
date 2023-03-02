import React from "react";
import { deleteTweet } from "../firebase/firestore";
import { deleteImage } from "../firebase/storage";

const DeleteTweetModal = ({ tweetId, imageUrl }) => {
  const onDeleteTweet = () => {
    deleteTweet(tweetId);
    deleteImage(imageUrl);
  };

  return (
    <div className="border rounded-2xl shadow-md z-50 w-72 bg-white text-gray-dark font-semibold absolute bottom-5 right-5">
      <div
        className="px-4 py-3 h-11 rounded-2xl hover:bg-gray-lightest cursor-pointer flex flex-col items-start justify-center transform duration-200 transition-colors"
        onClick={onDeleteTweet}
      >
        <div className="cursor-pointer">Delete</div>
      </div>
    </div>
  );
};

export default DeleteTweetModal;
