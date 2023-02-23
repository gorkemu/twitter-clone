import React, { useState } from "react";
import {
  EmojiIcon,
  GifIcon,
  LocationIcon,
  MediaIcon,
  PollIcon,
  ScheduleIcon,
} from "../assets/icons";
import { db, storage } from "../firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import {
  getDownloadURL,
  ref,
  uploadBytes,
  uploadBytesResumable,
} from "firebase/storage";

const TweetBox = () => {
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);
  const [error, setError] = useState(null);

  const types = ["image/png", "image/jpeg"];

  const sendTweet = async () => {
    if (content !== "") {
      try {
        const imagesRef = ref(storage, "images");
        const uploadedImage = uploadBytesResumable(imagesRef, image);
        uploadedImage.on(
          "state_changed",
          (snapshot) => {
            console.log("Uploading image");
          },
          (err) => {
            setError(err);
          },
          async () => {
            await getDownloadURL(uploadedImage.snapshot.ref).then((url) => {
              const docRef = addDoc(collection(db, "feed"), {
                displayName: "Görkem Ünal",
                username: "@gorkemu",
                content,
                createdAt: serverTimestamp(),
                avatar:
                  "https://pbs.twimg.com/profile_images/1624130756829233153/ZEBsJDiR_400x400.jpg",
                image: url,
              });
              console.log("Tweet added: ", docRef.id);
              setContent("");
              setImage(null);
            });
          }
        );
      } catch (e) {
        console.error("Error adding tweet: ", e);
      }
    }
  };

  const changeHandler = (e) => {
    let selected = e.target.files[0];

    if (selected && types.includes(selected.type)) {
      setImage(selected);
      setError("");
    } else {
      setImage(null);
      setError("Please select an image file (png or jpeg)");
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
      <div className="output">
        {error && <div className="error"> {error} </div>}
        {image && <div> {image.name} </div>}
      </div>
      <div className="flex items-center justify-between">
        <div className="flex -ml-2">
          <div className="flex items-center justify-center w-9 h-9 rounded-full cursor-pointer hover:bg-primary-lighter">
            <label htmlFor="file" className="cursor-pointer">
              <MediaIcon className="w-5 h-5 text-primary-base" />
            </label>
            <input
              type="file"
              id="file"
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
          onClick={sendTweet}
        >
          Tweet
        </button>
      </div>
    </div>
  );
};

export default TweetBox;
