import React, { useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import {
  ExploreIcon,
  HomeIcon,
  MessagesIcon,
  MoreIcon,
  NotificationIcon,
  ProfileIcon,
  TwitterIcon,
  TweetIcon,
} from "../assets/icons";
import ProfileModal from "../components/ProfileModal";
import useOnClickOutside from "../hooks/useOnClickOutside";

const Banner = ({ avatar }) => {
  const ref = useRef();
  const [modal, setModal] = useState(false);
  const handleModal = (e) => {
    setModal(!modal);
  };
  useOnClickOutside(ref, () => setModal(false));

  return (
    <header className="sticky z-20 top-0 w-50 h-screen flex-col px-2 justify-between items-center hidden sm:flex">
      <div className="flex flex-col justify-center">
        <div className="p-3 w-12 h-12 my-1  text-primary-base rounded-full cursor-pointer mx-auto flex-col items-center justify-center hover:bg-primary-lighter transform transition-colors duration-200">
          <TwitterIcon />
        </div>
        <nav className="w-12 mx-auto">
          <NavLink className="landscape:hidden md:hidden group cursor-pointer ">
            <HomeIcon className="flex items-center group-hover:bg-gray-light rounded-full p-3 w-12 h-12 mx-auto transform transition-colors duration-200" />
          </NavLink>
          <NavLink className="landscape:hidden group cursor-pointer ">
            <ExploreIcon className="flex items-center group-hover:bg-gray-light rounded-full p-3 w-12 h-12 mx-auto transform transition-colors duration-200" />
          </NavLink>
          <NavLink className="group cursor-pointer ">
            <NotificationIcon className="flex items-center group-hover:bg-gray-light rounded-full p-3 w-12 h-12 mx-auto transform transition-colors duration-200" />
          </NavLink>
          <NavLink className="group cursor-pointer ">
            <MessagesIcon className="flex items-center group-hover:bg-gray-light rounded-full p-3 w-12 h-12 mx-auto transform transition-colors duration-200" />
          </NavLink>
          <NavLink className="group cursor-pointer ">
            <ProfileIcon className="flex items-center group-hover:bg-gray-light rounded-full p-3 w-12 h-12 mx-auto transform transition-colors duration-200" />
          </NavLink>
          <NavLink className="group cursor-pointer ">
            <MoreIcon className="flex items-center group-hover:bg-gray-light rounded-full p-3 w-12 h-12 mx-auto transform transition-colors duration-200" />
          </NavLink>
        </nav>
        <button className="p-3 w-12 h-12 my-2 bg-primary-base text-white rounded-full cursor-pointer hover:bg-primary-dark mx-auto flex items-center justify-center shadow-lg transform transition-colors duration-200">
          <TweetIcon />
        </button>
      </div>
      {modal && (
        <div ref={ref}>
          <ProfileModal />
        </div>
      )}
      <div
        onClick={handleModal}
        className="mb-2 p-3 flex items-center justify-center hover:bg-gray-light rounded-full w-13 h-13 cursor-pointer transform transition-colors duration-200"
      >
        <img src={avatar} alt="Profile" className="w-10 h-10 rounded-full" />
      </div>
    </header>
  );
};

export default Banner;
