import React from "react";
import {
  AnalyticsIcon,
  AppsAndSessionsIcon,
  BookmarksIcon,
  CalendarIcon,
  ChangePasswordIcon,
  CheckIcon,
  CloseIcon,
  CollapseIcon,
  ConnectedAccountsIcon,
  CreatorDashboardIcon,
  DeactivateAccountIcon,
  DisplayIcon,
  DownIcon,
  DownloadIcon,
  EmojiIcon,
  ExpandIcon,
  ExploreIcon,
  EyeIcon,
  FiltersIcon,
  GifIcon,
  HelpCenterIcon,
  HomeIcon,
  KeyboardShortcutsIcon,
  LeftArrow,
  LikeIcon,
  ListsIcon,
  LocationIcon,
  MediaIcon,
  MessagesIcon,
  MonetizationIcon,
  MoreIcon,
  NewMessageIcon,
  NotificationIcon,
  PlusIcon,
  PollIcon,
  PreferencesIcon,
  ProfileIcon,
  RepliedIcon,
  ReplyIcon,
  RetweetIcon,
  RightIcon,
  ScheduleIcon,
  SearchIcon,
  SecurityIcon,
  SettingsAndPrivacyIcon,
  ShareIcon,
  SubscriptionsIcon,
  ThreeDotsIcon,
  TopicsIcon,
  TweetDeckIcon,
  TweetIcon,
  TwitterAdsIcon,
  TwitterBlueIcon,
  TwitterCircleIcon,
  TwitterForProfessionalsIcon,
  TwitterIcon,
  UpArrowIcon,
  UpIcon,
  UpRightArrow,
  VerifiedAccountIcon,
  ViewIcon,
  WorldIcon,
} from "../assets/icons";

const Banner = () => {
  return (
    <header className="w-20 flex-col px-2">
      <div className="p-3 w-12 h-12 my-1  text-primary-base rounded-full cursor-pointer mx-auto flex items-center justify-center  hover:bg-primary-light">
        <TwitterIcon />
      </div>
      <div className="p-3 w-12 h-12 rounded-full cursor-pointer mx-auto flex items-center justify-center  hover:bg-gray-light">
        <HomeIcon />
      </div>
      <div className="p-3 w-12 h-12 rounded-full cursor-pointer mx-auto flex items-center justify-center  hover:bg-gray-light">
        <ExploreIcon />
      </div>
      <div className="p-3 w-12 h-12 rounded-full cursor-pointer mx-auto flex items-center justify-center  hover:bg-gray-light">
        <NotificationIcon />
      </div>
      <div className="p-3 w-12 h-12 rounded-full cursor-pointer mx-auto flex items-center justify-center  hover:bg-gray-light">
        <MessagesIcon />
      </div>
      <div className="p-3 w-12 h-12 rounded-full cursor-pointer mx-auto flex items-center justify-center  hover:bg-gray-light">
        <TwitterBlueIcon />
      </div>
      <div className="p-3 w-12 h-12 rounded-full cursor-pointer mx-auto flex items-center justify-center  hover:bg-gray-light">
        <ProfileIcon />
      </div>
      <div className="p-3 w-12 h-12 rounded-full cursor-pointer mx-auto flex items-center justify-center  hover:bg-gray-light">
        <MoreIcon />
      </div>
      <div className="p-3 w-12 h-12 my-2  bg-primary-base text-white rounded-full cursor-pointer hover:bg-primary-dark mx-auto flex items-center justify-center  hover:bg-gray-light">
        <TweetIcon />
      </div>
    </header>
  );
};

export default Banner;
