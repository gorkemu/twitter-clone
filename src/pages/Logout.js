import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { TwitterIcon } from "../assets/icons";
import { useAuth } from "../firebase/auth";

const Logout = () => {
  const { authUser, isLoading, signOut } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    if (!authUser) {
      navigate("/");
    }
  }, [authUser, isLoading, navigate]);

  const cancelLogout = () => {
    navigate("/dashboard");
  };

  return (
    <div className="h-screen bg-[#00000066] flex flex-col items-center justify-center">
      <div className="w-80 p-8 mb-2 flex flex-col rounded-2xl  text-xl bg-white rounde">
        <TwitterIcon className="mb-4 h-10 mx-auto text-primary-base" />
        <h1 className="h-6 mb-2 font-bold">Log out of Twitter?</h1>
        <div className="mb-6 font-normal text-[15px] text-[#536471] leading-5">
          You can always log back in at any time. If you just want to switch
          accounts, you can do that by adding an existing account.
        </div>
        <button
          className="h-11 px-6 mb-3 text-white text-[15px] bg-[#0f1419] font-bold border border-l-black rounded-full cursor-pointer hover:bg-[#272c30] transform transition-colors duration-200"
          onClick={signOut}
        >
          Log out
        </button>
        <button
          onClick={cancelLogout}
          className="h-11 px-6  text-[#0f1419] text-[15px] font-bold border border-l-[#cfd9de] rounded-full cursor-pointer hover:bg-[#0f19141a] transform transition-colors duration-200"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default Logout;
