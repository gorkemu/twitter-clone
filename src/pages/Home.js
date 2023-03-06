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
      <div className="hidden md:flex items-center justify-center bg-home-bg w-1/2">
        <TwitterIcon className="w-1/2 text-white" />
      </div>
      <div className="md:p-4 w-full md:w-1/2">
        <div className="flex md:block flex-col items-center p-3 md:p-5 w-full">
          <TwitterIcon className="w-10 h-10 text-primary-base" />
          <h1 className="my-12 text-black text-5xl md:text-6xl font-bold">
            Happening now
          </h1>
          <h2 className="mb-8 text-3xl font-bold leading-9">
            Join Twitter today.
          </h2>
          <div>
            <div className="mb-4" onClick={signUpWithGoogle}>
              <button className="transition-colors duration-200 border border-l-gray-lighter rounded-full hover:bg-primary-google px-3 py-1 w-80 h-10 text-gray-google text-sm tracking-wide font-medium">
                Sign up with Google
              </button>
            </div>
            <div className="flex items-center my-2">
              <div className="flex flex-col items-center justify-center mx-1 h-5">
                <div className="bg-line w-36 h-px"></div>
              </div>
              <div className="-translate-y-0.5 mx-1 h-5 leading-5">or</div>
              <div className="flex flex-col items-center justify-center mx-1 h-5">
                <div className="bg-line w-36 h-px"></div>
              </div>
            </div>

            <div className="mt-4">
              <Link to="/register">
                <button className="transition-colors duration-200 border rounded-full bg-primary-base hover:bg-primary-dark px-3 py-1 w-80 h-10 text-white font-medium">
                  Create account
                </button>
              </Link>
            </div>
            <div className="mt-10">
              <h3 className="mb-5 font-semibold">Already have an account?</h3>
              <Link to="/login">
                <button className="transition-colors duration-200 border rounded-full border-l-gray-lighter hover:bg-primary-lightest px-3 py-1 w-80 h-10 text-primary-base tracking-wide font-semibold">
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
