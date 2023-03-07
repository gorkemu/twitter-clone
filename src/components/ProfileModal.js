import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../firebase/auth";
import { uploadAvatar } from "../firebase/storage";
const ProfileModal = () => {
  const { authUser } = useAuth();
  const [image, setImage] = useState(null);
  const [error, setError] = useState("");

  const handleSubmit = async () => {
    try {
      if (image) {
        await uploadAvatar(image, authUser.uid);
      }
      setImage(null);
    } catch (error) {
      console.log(error);
    }
  };

  const types = ["image/png", "image/jpeg"];

  const changeHandler = (e) => {
    let selected = e.target.files[0];

    if (selected && types.includes(selected.type)) {
      setImage(selected);
    } else if (selected && !types.includes(selected.type)) {
      setError("It should be png or jpg...  ");
      setImage(null);
    } else {
      setImage(null);
    }
  };

  return (
    <div className="py-3 border rounded-2xl shadow-md z-10 w-72 bg-white text-gray-dark font-semibold absolute bottom-20 left-1.5">
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
          <>
            {error ? (
              <div className="flex justify-between w-full">
                <div className="text-red-600 font-normal">{error}</div>
                <button
                  onClick={() => {
                    setError("");
                  }}
                  className="bg-primary-base text-white rounded-full px-3 py-1 text-sm hover:bg-primary-dark"
                >
                  OK
                </button>
              </div>
            ) : (
              <div className="w-full justify-self-stretch flex">
                <label
                  htmlFor="avatar-input"
                  className="cursor-pointer w-full justify-self-stretch"
                >
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
          </>
        )}
      </div>
      <Link
        to="/logout"
        className="px-4 py-3 h-11 hover:bg-gray-lightest cursor-pointer flex flex-col items-start justify-center"
      >
        <div>Log out</div>
      </Link>
      <Link
        to="/deactivate"
        className="px-4 py-3 h-11 hover:bg-gray-lightest cursor-pointer flex flex-col items-start justify-center"
      >
        <div>Deactivate Account</div>
      </Link>
    </div>
  );
};

export default ProfileModal;
