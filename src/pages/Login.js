import React, { useEffect, useState } from "react";
import { TwitterIcon } from "../assets/icons";
import { Link, useNavigate } from "react-router-dom";
import {
  logInWithEmailAndPassword,
  signUpWithGoogle,
  useAuth,
} from "../firebase/auth";

const Login = () => {
  const { authUser } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    if (authUser) {
      navigate("/dashboard");
    }
  }, [authUser, navigate]);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="flex h-screen">
      <div className="flex items-center justify-center bg-home-bg w-1/2">
        <TwitterIcon className="w-1/2 text-white" />
      </div>
      <div className="p-4 w-1/2">
        <div className="p-5 w-full">
          <TwitterIcon className="text-primary-base w-10 h-10" />
          <h2 className="my-8 text-4xl font-bold text-black">
            Sign in to Twitter
          </h2>
          <h3 className="font-semibold mb-3">Already signed up with Google?</h3>
          <div className="mb-4" onClick={signUpWithGoogle}>
            <button className="w-80 h-10 border border-l-gray-lighter px-3 py-1 rounded-full text-gray-google tracking-wide text-sm font-medium hover:bg-primary-google transition-colors duration-200">
              Log in with Google
            </button>
          </div>
          <div className="flex items-center my-1">
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
          <div>
            <div className="mb-2">
              <div className="max-w-sm py-3 px-2 border b-gray-light rounded-md">
                <div>
                  <input
                    className="w-full outline-none"
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
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
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <div className="mt-2">
              <button
                className="w-80 h-10 border px-3 py-1 rounded-full bg-primary-base text-white  font-medium hover:bg-primary-dark transition-colors duration-200"
                onClick={() => logInWithEmailAndPassword(email, password)}
              >
                Log in
              </button>
            </div>
          </div>
          <div>
            <div className="mt-6">
              <h3 className="font-semibold mb-3">Don't have an account?</h3>
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
