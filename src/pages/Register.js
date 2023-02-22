import React from "react";
import { TwitterIcon } from "../assets/icons";

const Register = () => {
  return (
    <div className="flex">
      <div className="flex items-center justify-center bg-home-bg w-1/2 h-screen">
        <TwitterIcon className="w-1/2 text-white" />
      </div>
      <div className="p-4 w-full">
        <div className="p-5 w-full">
          <TwitterIcon className="text-primary-base w-10 h-10" />
          <h1 className="my-12 text-6xl font-bold">Happening now</h1>
          <h2>Join Twitter today</h2>
          <button>Create account</button>
          <p>Already have an account?</p>
          <button>Sign in</button>
        </div>
      </div>
    </div>
  );
};

export default Register;
