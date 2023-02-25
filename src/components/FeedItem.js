import React from "react";
import {
  LikeIcon,
  ReplyIcon,
  RetweetIcon,
  ShareIcon,
  ThreeDotsIcon,
  ViewIcon,
} from "../assets/icons";
import ReactTimeAgo from "react-time-ago";

const FeedItem = ({ content, imageUrl, createdAt }) => {
  return (
    <article className="flex space-x-3 border-b border-l-gray-lighter px-4 py-3 cursor-pointer hover:bg-gray-lightest">
      {/* <img src={avatar} alt="Profile" className="w-12 h-12 rounded-full" /> */}
      <div className="flex-1">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            {/* <h4 className="font-bold hover:underline">{displayName}</h4>
            <span className="ml-2 text-gray-dark">{username}</span> */}
            <div className="mx-2 bg-gray-dark h-1 w-1 border rounded-full" />
            <span className="text-gray-dark hover:underline">
              {createdAt && (
                <ReactTimeAgo date={createdAt.toDate()} timeStyle="twitter" />
              )}
            </span>
          </div>
          <div className="group flex items-center justify-center w-9 h-9 rounded-full hover:bg-primary-lighter">
            <ThreeDotsIcon className="w-5 h-5 text-gray-dark group-hover:text-primary-base" />
          </div>
        </div>
        <p className="">{content} </p>
        {imageUrl !== "" && (
          <img
            src={imageUrl}
            alt="Tweeted Pic"
            className="rounded-xl max-h-96"
          />
        )}
        <ul className="flex justify-between mt-1 -ml-2 max-w-lg">
          <li className="group flex items-center space-x-1">
            <div className="flex items-center justify-center w-9 h-9 rounded-full group-hover:bg-primary-lighter">
              <ReplyIcon className="w-5 h-5 text-gray-dark group-hover:text-primary-base" />
            </div>
            <span className="group-hover:text-primary-base">7</span>
          </li>
          <li className="group flex items-center space-x-1">
            <div className="     flex items-center justify-center w-9 h-9 rounded-full group-hover:bg-green-light">
              <RetweetIcon className="w-5 h-5 text-gray-dark group-hover:text-green-dark" />
            </div>
            <span className="group-hover:text-green-dark">7</span>
          </li>
          <li className="group flex items-center space-x-1">
            <div className="     flex items-center justify-center w-9 h-9 rounded-full group-hover:bg-pink-light">
              <LikeIcon className="w-5 h-5 text-gray-dark group-hover:text-pink-dark" />
            </div>
            <span className="group-hover:text-pink-dark">7</span>
          </li>
          <li className="group flex items-center space-x-1">
            <div className="     flex items-center justify-center w-9 h-9 rounded-full group-hover:bg-primary-lighter">
              <ViewIcon className="w-5 h-5 text-gray-dark group-hover:text-primary-base" />
            </div>
            <span className="group-hover:text-primary-base">7</span>
          </li>
          <li className="group flex items-center space-x-1">
            <div className="     flex items-center justify-center w-9 h-9 rounded-full group-hover:bg-primary-lighter">
              <ShareIcon className="w-5 h-5 text-gray-dark group-hover:text-primary-base" />
            </div>
            <span className="group-hover:text-primary-base">7</span>
          </li>
        </ul>
      </div>
    </article>
  );
};

export default FeedItem;
