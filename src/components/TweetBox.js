import React, { useState, useEffect } from "react";
import {
  EmojiIcon,
  GifIcon,
  LocationIcon,
  MediaIcon,
  PollIcon,
  ScheduleIcon,
} from "../assets/icons";
import { db, storage } from "../firebase/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
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

  // const sendTweet = async () => {
  //   if (content !== "" && image) {
  //     try {
  //       const imagesRef = ref(storage, image.name);
  //       const uploadedImage = uploadBytesResumable(imagesRef, image);
  //       uploadedImage.on(
  //         "state_changed",
  //         (snapshot) => {
  //           console.log("Uploading image");
  //         },
  //         (err) => {
  //           setError(err);
  //         },
  //         async () => {
  //           await getDownloadURL(uploadedImage.snapshot.ref).then((url) => {
  //             const docRef = addDoc(collection(db, "feed"), {
  //               displayName: "Görkem Ünal",
  //               username: "@gorkemu",
  //               content,
  //               createdAt: serverTimestamp(),
  //               avatar:
  //                 "https://pbs.twimg.com/profile_images/1624130756829233153/ZEBsJDiR_400x400.jpg",
  //               image: url,
  //             });
  //             console.log("Tweet added: ", docRef.id);
  //             setContent("");
  //             setImage(null);
  //             setError("You must select an image for now");
  //           });
  //         }
  //       );
  //     } catch (e) {
  //       console.error("Error adding tweet: ", e);
  //     }
  //   }
  // };
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
      <textarea
        className="w-full text-xl placeholder-gray-placeholder outline-none overflow-hidden resize-none bg-transparent"
        placeholder="What's happening?"
        onChange={(e) => setContent(e.target.value)}
        value={content}
      />
      <div className="output">
        {error && <div className="text-red-600"> {error} </div>}
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
          onClick={handleSubmit}
        >
          Tweet
        </button>
      </div>
    </div>
  );
};

export default TweetBox;
