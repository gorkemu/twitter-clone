import { getAuth, GoogleAuthProvider } from "firebase/auth";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { TwitterIcon } from "../assets/icons";
import { deactivateAccount, useAuth } from "../firebase/auth";

const Deactivate = () => {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const auth = getAuth();
  const user = auth.currentUser;
  const provider = user.providerData[0].providerId;
  const handleDeactivate = async () => {
    await deactivateAccount(password);
    navigate("/deactivated");
  };

  const cancelDeactivate = () => {
    navigate("/dashboard");
  };

  return (
    <div className="h-screen bg-[#00000066] flex flex-col items-center justify-center">
      <div className="w-80 p-8 mb-2 flex flex-col rounded-2xl  text-xl bg-white rounde">
        <TwitterIcon className="mb-4 h-10 mx-auto text-primary-base" />
        <h1 className="h-6 mb-2 font-bold">Deactivate your account?</h1>
        <div className="mb-6 font-normal text-[15px] text-[#536471] leading-5">
          You can always sign up at any time. If you just want to log out, you
          can do that by clicking on Log out.
        </div>
        {provider !== "google.com" && (
          <div className="max-w-sm py-3 px-2 border b-gray-light rounded-md">
            <div>
              <input
                className="w-full outline-none"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
        )}
        <button
          className="h-11 px-6 my-3 text-white text-[15px] bg-[#0f1419] font-bold border border-l-black rounded-full cursor-pointer hover:bg-[#272c30] transform transition-colors duration-200"
          onClick={handleDeactivate}
        >
          Deactivate Account
        </button>
        <button
          onClick={cancelDeactivate}
          className="h-11 px-6  text-[#0f1419] text-[15px] font-bold border border-l-[#cfd9de] rounded-full cursor-pointer hover:bg-[#0f19141a] transform transition-colors duration-200"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default Deactivate;
