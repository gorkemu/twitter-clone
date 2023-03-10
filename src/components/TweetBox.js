import React, { useState } from "react";
import {
  CloseIcon,
  EmojiIcon,
  GifIcon,
  LocationIcon,
  MediaIcon,
  PollIcon,
  ScheduleIcon,
} from "../assets/icons";
import { serverTimestamp } from "firebase/firestore";
import { useAuth } from "../firebase/auth";
import { addTweetWithImage, addTweetWithoutImage } from "../firebase/firestore";
import { uploadImage } from "../firebase/storage";

const TweetBox = () => {
  const { authUser } = useAuth();
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);
  const [error, setError] = useState("");

  const types = ["image/png", "image/jpeg"];

  const handleSubmit = async () => {
    try {
      if (content !== "") {
        if (image) {
          const bucket = await uploadImage(image, authUser.uid);
          await addTweetWithImage(
            authUser.uid,
            content,
            serverTimestamp(),
            bucket
          );
        } else {
          await addTweetWithoutImage(authUser.uid, content, serverTimestamp());
        }
        setContent("");
        setImage(null);
      }
    } catch (error) {
      console.error("Error adding tweet: ", error);
    }
  };

  const changeHandler = (e) => {
    let selected = e.target.files[0];

    if (selected && types.includes(selected.type)) {
      setImage(selected);
      setError("");
    } else if (selected && !types.includes(selected.type)) {
      setImage(null);
      setError("Please select an image file (png or jpeg)");
    } else {
      setImage(null);
      setError("You must select an image for now");
    }
  };

  return (
    <div className="flex flex-col flex-1 mt-2 px-2">
      <div className="text-xl h-13 py-3">
        <textarea
          className="w-full h-7  placeholder-gray-placeholder outline-none overflow-hidden resize-none bg-transparent"
          placeholder="What's happening?"
          onChange={(e) => setContent(e.target.value)}
          value={content}
        />
      </div>
      <div className="mb-3 mt-1">
        {error && <div className="text-red-600"> {error} </div>}
        {image && (
          <div className="relative">
            <div onClick={() => setImage(null)}>
              <CloseIcon className="h-9 p-2 absolute top-1 left-1 text-white bg-[#0f1419bf] hover:bg-[#272c30bf] rounded-full cursor-pointer" />
            </div>
            <img
              src={URL.createObjectURL(image)}
              alt="newtweetimage"
              className="rounded-2xl max-h-96  cursor-pointer"
            ></img>
          </div>
        )}
      </div>
      <div className="flex items-center justify-between">
        <div className="flex -ml-2">
          <div className="flex items-center justify-center w-9 h-9 rounded-full cursor-pointer hover:bg-primary-lighter">
            <label htmlFor="image-input" className="cursor-pointer">
              <MediaIcon className="w-5 h-5 text-primary-base" />
            </label>
            <input
              type="file"
              id="image-input"
              className="hidden"
              onChange={changeHandler}
            />
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
          onClick={handleSubmit}
        >
          Tweet
        </button>
      </div>
    </div>
  );
};

export default TweetBox;
