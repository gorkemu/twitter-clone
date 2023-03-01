import React, { useRef, useState } from "react";
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
import { BannerLink } from "../components/BannerLink";
import ProfileModal from "../components/ProfileModal";
import useOnClickOutside from "../hooks/useOnClickOutside";
const bannerLinks = [
  {
    name: "Home",
    icon: HomeIcon,
  },
  {
    name: "Explore",
    icon: ExploreIcon,
  },
  {
    name: "Notification",
    icon: NotificationIcon,
  },
  {
    name: "Messages",
    icon: MessagesIcon,
  },
  {
    name: "Profile",
    icon: ProfileIcon,
  },
  {
    name: "More",
    icon: MoreIcon,
  },
];
const Banner = ({ avatar }) => {
  const ref = useRef();
  const [active, setActive] = useState("Home");
  const [modal, setModal] = useState(false);

  const handleMenuItemClick = (name) => {
    setActive(name);
  };

  const handleModal = (e) => {
    setModal(!modal);
  };

  useOnClickOutside(ref, () => setModal(false));

  return (
    <header className="sticky z-20 top-0 w-50 h-screen flex flex-col px-2 justify-between items-center">
      <div className="flex flex-col justify-center">
        <div className="p-3 w-12 h-12 my-1  text-primary-base rounded-full cursor-pointer mx-auto flex-col items-center justify-center  hover:bg-primary-lighter">
          <TwitterIcon />
        </div>
        <nav className="w-12 mx-auto">
          <ul>
            {bannerLinks.map(({ name, icon }) => (
              <BannerLink
                key={name}
                name={name}
                Icon={icon}
                active={active}
                onMenuItemClick={handleMenuItemClick}
              />
            ))}
          </ul>
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
