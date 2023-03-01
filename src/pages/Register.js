import React, { useState } from "react";
import { TwitterIcon } from "../assets/icons";
import { Link } from "react-router-dom";
import { registerWithEmailAndPassword } from "../firebase/auth";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const register = async () => {
    await registerWithEmailAndPassword(email, password, username);
  };

  return (
    <div className="flex h-screen">
      <div className="flex items-center justify-center bg-home-bg w-1/2">
        <TwitterIcon className="w-1/2 text-white" />
      </div>
      <div className="p-4 w-1/2">
        <div className="p-5 w-full">
          <TwitterIcon className="text-primary-base w-10 h-10" />
          <h2 className="my-10 text-4xl font-bold text-black">
            Create your account
          </h2>
          <div>
            <div className="mb-4">
              <div className="max-w-sm py-3 px-2 border b-gray-light rounded-md">
                <div>
                  <input
                    className="w-full outline-none"
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <div className="mb-4">
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
            <div className="mt-4">
              <button
                className="w-80 h-10 border px-3 py-1 rounded-full bg-primary-base text-white  font-medium hover:bg-primary-dark transition-colors duration-200"
                onClick={register}
              >
                Create account
              </button>
            </div>
          </div>
          <div>
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

export default Register;
