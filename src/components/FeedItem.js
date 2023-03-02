import React, { useRef, useState } from "react";
import {
  LikeIcon,
  ReplyIcon,
  RetweetIcon,
  ShareIcon,
  ThreeDotsIcon,
  ViewIcon,
} from "../assets/icons";
import ReactTimeAgo from "react-time-ago";
import { useAuth } from "../firebase/auth";
import DeleteTweetModal from "./DeleteTweetModal";
import useOnClickOutside from "../hooks/useOnClickOutside";

const FeedItem = ({ content, imageUrl, createdAt, avatar, tweetId }) => {
  const ref = useRef();
  const { authUser } = useAuth();
  const [modal, setModal] = useState(false);
  const toggleModal = (e) => {
    setModal(!modal);
  };
  useOnClickOutside(ref, () => setModal(false));

  return (
    <article
      className={`flex space-x-3 border-b border-l-gray-lighter px-4 py-3 cursor-pointer transform transition-colors duration-200 ${
        modal ? "" : "hover:bg-gray-lightest"
      } `}
    >
      <img
        src={avatar}
        alt="Profile"
        className="w-12 h-12 rounded-full hover:opacity-90"
      />
      <div className="flex-1">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            {authUser.username && (
              <h4 className="font-bold hover:underline">
                {authUser.username.charAt(0).toUpperCase() +
                  authUser.username.slice(1)}
              </h4>
            )}
            {authUser.username && (
              <span className="ml-2 text-gray-dark">
                {"@" + authUser.username}
              </span>
            )}

            <div className="mx-2 bg-gray-dark h-1 w-1 border rounded-full" />
            <span className="text-gray-dark hover:underline">
              {createdAt && (
                <ReactTimeAgo date={createdAt.toDate()} timeStyle="twitter" />
              )}
            </span>
          </div>

          <div
            className="group relative flex items-center justify-center w-9 h-9 rounded-full hover:bg-primary-lighter"
            onClick={toggleModal}
          >
            {modal && (
              <div ref={ref}>
                <DeleteTweetModal
                  className={toggleModal}
                  tweetId={tweetId}
                  imageUrl={imageUrl}
                />
              </div>
            )}

            <ThreeDotsIcon className="w-5 h-5 text-gray-dark group-hover:text-primary-base" />
          </div>
        </div>
        <p className="break-all">{content} </p>
        {imageUrl !== "" && (
          <img
            src={imageUrl}
            alt="Tweeted Pic"
            className="rounded-xl max-h-96 mt-3"
          />
        )}
        <ul className="flex justify-between mt-1 -ml-2 max-w-lg">
          <li className="group flex items-center space-x-1">
            <div className="flex items-center justify-center w-9 h-9 rounded-full group-hover:bg-primary-lighter">
              <ReplyIcon className="w-5 h-5 text-gray-dark group-hover:text-primary-base" />
            </div>
            <span className="group-hover:text-primary-base"></span>
          </li>
          <li className="group flex items-center space-x-1">
            <div className="     flex items-center justify-center w-9 h-9 rounded-full group-hover:bg-green-light">
              <RetweetIcon className="w-5 h-5 text-gray-dark group-hover:text-green-dark" />
            </div>
            <span className="group-hover:text-green-dark"></span>
          </li>
          <li className="group flex items-center space-x-1">
            <div className="     flex items-center justify-center w-9 h-9 rounded-full group-hover:bg-pink-light">
              <LikeIcon className="w-5 h-5 text-gray-dark group-hover:text-pink-dark" />
            </div>
            <span className="group-hover:text-pink-dark"></span>
          </li>
          <li className="group flex items-center space-x-1">
            <div className="     flex items-center justify-center w-9 h-9 rounded-full group-hover:bg-primary-lighter">
              <ViewIcon className="w-5 h-5 text-gray-dark group-hover:text-primary-base" />
            </div>
            <span className="group-hover:text-primary-base"></span>
          </li>
          <li className="group flex items-center space-x-1">
            <div className="     flex items-center justify-center w-9 h-9 rounded-full group-hover:bg-primary-lighter">
              <ShareIcon className="w-5 h-5 text-gray-dark group-hover:text-primary-base" />
            </div>
            <span className="group-hover:text-primary-base"></span>
          </li>
        </ul>
      </div>
    </article>
  );
};

export default FeedItem;
