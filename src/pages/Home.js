import React, { useEffect } from "react";
import { TwitterIcon } from "../assets/icons";
import { Link, useNavigate } from "react-router-dom";
import { signUpWithGoogle, useAuth } from "../firebase/auth";

const Home = () => {
  const { authUser } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    if (authUser) {
      navigate("/dashboard");
    }
  }, [authUser, navigate]);

  return (
    <div className="flex h-screen">
      <div className="flex items-center justify-center bg-home-bg w-1/2">
        <TwitterIcon className="w-1/2 text-white" />
      </div>
      <div className="p-4 w-1/2">
        <div className="p-5 w-full">
          <TwitterIcon className="text-primary-base w-10 h-10" />
          <h1 className="my-12 text-6xl font-bold text-black">Happening now</h1>
          <h2 className="mb-8 text-3xl font-bold leading-9">
            Join Twitter today.
          </h2>
          <div>
            <div className="mb-4" onClick={signUpWithGoogle}>
              <button className="w-80 h-10 border border-l-gray-lighter px-3 py-1 rounded-full text-gray-google tracking-wide text-sm font-medium hover:bg-primary-google transition-colors duration-200">
                Sign up with Google
              </button>
            </div>
            <div className="flex items-center my-2">
              <div className="h-5  mx-1 flex flex-col items-center justify-center">
                <div className="w-36 bg-line h-px"></div>
              </div>
              <div className="mx-1 h-5 leading-5 align-middle -translate-y-0.5">
                or
              </div>
              <div className="h-5  mx-1 flex flex-col items-center justify-center">
                <div className="w-36 bg-line h-px"></div>
              </div>
            </div>

            <div className="mt-4">
              <Link to="/register">
                <button className="w-80 h-10 border px-3 py-1 rounded-full bg-primary-base text-white  font-medium hover:bg-primary-dark transition-colors duration-200">
                  Create account
                </button>
              </Link>
            </div>
            <div className="mt-10">
              <h3 className="font-semibold mb-5">Already have an account?</h3>
              <Link to="/login">
                <button className="w-80 h-10 border border-l-gray-lighter px-3 py-1 rounded-full text-primary-base tracking-wide font-semibold hover:bg-primary-lightest transition-colors duration-200">
                  Sign in
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
