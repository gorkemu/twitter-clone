import React, { useState } from "react";
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
const Banner = () => {
  const [active, setActive] = useState("Home");

  const handleMenuItemClick = (name) => {
    setActive(name);
  };

  return (
    <header className="sticky top-0 w-20 h-screen flex-col px-2 justify-center">
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
    </header>
  );
};

export default Banner;
