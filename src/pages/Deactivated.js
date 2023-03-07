import React from "react";
import { useNavigate } from "react-router-dom";
import { TwitterIcon } from "../assets/icons";

const Deactivated = () => {
  const navigate = useNavigate();
  const handleGoHome = () => {
    navigate("/");
  };

  return (
    <div className="h-screen bg-[#00000066] flex flex-col items-center justify-center">
      <div className="w-80 p-8 mb-2 flex flex-col rounded-2xl  text-xl bg-white rounde">
        <TwitterIcon className="mb-4 h-10 mx-auto text-primary-base" />
        <h1 className="mb-2 font-bold">
          Your account has been deactivated successfully
        </h1>
        <div className="mb-6 font-normal text-[15px] text-[#536471] leading-5">
          You can always get back by signing up again. Enjoy your freedom.
        </div>
        <button
          onClick={handleGoHome}
          className="h-11 px-6  text-[#0f1419] text-[15px] font-bold border border-l-[#cfd9de] rounded-full cursor-pointer hover:bg-[#0f19141a] transform transition-colors duration-200"
        >
          Go to Home
        </button>
      </div>
    </div>
  );
};

export default Deactivated;
