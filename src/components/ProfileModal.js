import React, { useState } from "react";
import { useAuth } from "../firebase/auth";
import { uploadAvatar } from "../firebase/storage";

const ProfileModal = () => {
  const { authUser, signOut } = useAuth();
  const [image, setImage] = useState(null);

  const handleSubmit = async () => {
    try {
      if (image) {
        await uploadAvatar(image, authUser.uid);
      }
      setImage(null);
    } catch (error) {
      console.error("Error updating avatar: ", error);
    }
  };

  const types = ["image/png", "image/jpeg"];
  const changeHandler = (e) => {
    let selected = e.target.files[0];

    if (selected && types.includes(selected.type)) {
      setImage(selected);
    } else {
      setImage(null);
    }
  };

  return (
    <div className="py-3 border rounded-2xl shadow-md z-50 w-72 bg-white text-gray-dark font-semibold absolute bottom-20 left-1.5">
      <div className="px-4 py-3 h-11 hover:bg-gray-lightest cursor-pointer flex flex-col items-start justify-center transform transition-colors duration-200">
        {image ? (
          <div className="flex justify-between w-full">
            <div className="text-primary-base font-normal">
              {image.name.substring(0, 15) + " ..."}
            </div>
            <button
              className="bg-primary-base text-white rounded-full px-3 py-1 text-sm hover:bg-primary-dark"
              onClick={handleSubmit}
            >
              Update
            </button>
          </div>
        ) : (
          <div>
            <label htmlFor="avatar-input" className="cursor-pointer">
              Update Avatar
            </label>
            <input
              type="file"
              id="avatar-input"
              className="hidden"
              onChange={changeHandler}
            />
          </div>
        )}
      </div>
      <div
        onClick={signOut}
        className="px-4 py-3 h-11 hover:bg-gray-lightest cursor-pointer flex flex-col items-start justify-center"
      >
        <div>Log out</div>
      </div>
    </div>
  );
};

export default ProfileModal;
