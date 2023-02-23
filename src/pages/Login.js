import React from "react";
import { TwitterIcon } from "../assets/icons";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="flex">
      <div className="flex items-center justify-center bg-home-bg w-1/2">
        <TwitterIcon className="w-1/2 text-white" />
      </div>
      <div className="p-4 w-1/2">
        <div className="p-5 w-full">
          <TwitterIcon className="text-primary-base w-10 h-10" />
          <h2 className="my-12 text-4xl font-bold text-black">
            Sign in to Twitter
          </h2>
          <form>
            <div className="mb-4">
              <div className="max-w-sm py-3 px-2 border b-gray-light rounded-md">
                <div>
                  <input
                    className="w-full outline-none"
                    type="email"
                    placeholder="Email"
                  />
                </div>
              </div>
            </div>
            <div>
              <div className="max-w-sm py-3 px-2 border b-gray-light rounded-md">
                <div>
                  <input
                    className="w-full outline-none"
                    type="password"
                    placeholder="Password"
                  />
                </div>
              </div>
            </div>
            <div className="mt-4">
              <button
                className="w-80 h-10 border px-3 py-1 rounded-full bg-primary-base text-white  font-medium hover:bg-primary-dark transition-colors duration-200"
                type="submit"
              >
                Log in
              </button>
            </div>
          </form>
          <div>
            <div className="mt-10">
              <h3 className="font-semibold mb-5">Don't have an account?</h3>
              <Link to="/register">
                <button className="w-80 h-10 border border-l-gray-lighter px-3 py-1 rounded-full text-primary-base tracking-wide font-semibold hover:bg-primary-lightest transition-colors duration-200">
                  Sign up
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
