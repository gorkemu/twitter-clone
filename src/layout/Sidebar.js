import React from "react";
import { SearchIcon, ThreeDotsIcon } from "../assets/icons";

const Sidebar = () => {
  return (
    <aside className="w-80 bg-white p-4 ">
      <div className="mb-3 bg-gray-lightest rounded-full">
        <form>
          <label className="flex">
            <div className="w-11 flex items-center justify-center text-gray-600">
              <SearchIcon className="w-5 h-5" />
            </div>
            <input
              className="p-3 text-base outline-none bg-gray-lightest placeholder:text-gray-600"
              placeholder="Search Twitter"
            ></input>
          </label>
        </form>
      </div>

      <div className="mb-4 bg-gray-lightest rounded-2xl">
        <h2 className="py-3 px-4 font-bold text-xl">Trends for you</h2>
        <div className="py-3 px-4 hover:bg-gray-lighter cursor-pointer">
          <div className="flex justify-between">
            <div>
              <div className="text-sm h-4 text-gray-500">
                Trending in Turkey
              </div>
              <div className="h-5 mt-[2px] text-base font-bold">#Sandıkta</div>
              <div className="h-4 mt-1 text-sm text-gray-500">2,351 Tweets</div>
            </div>
            <div className="group flex items-center justify-center w-9 h-9 rounded-full hover:bg-primary-lighter cursor-pointer">
              <ThreeDotsIcon className="w-5 h-5 text-gray-dark group-hover:text-primary-base" />
            </div>
          </div>
        </div>
        <div className="py-3 px-4 hover:bg-gray-lighter cursor-pointer">
          <div className="flex justify-between">
            <div>
              <div className="text-sm h-4 text-gray-500">
                Politics - Trending
              </div>
              <div className="h-5 mt-[2px] text-base font-bold">
                #Devlet Bey
              </div>
              <div className="h-4 mt-1 text-sm text-gray-500">16.4K Tweets</div>
            </div>
            <div className="group flex items-center justify-center w-9 h-9 rounded-full hover:bg-primary-lighter cursor-pointer">
              <ThreeDotsIcon className="w-5 h-5 text-gray-dark group-hover:text-primary-base" />
            </div>
          </div>
        </div>
        <div className="py-3 px-4 hover:bg-gray-lighter cursor-pointer">
          <div className="flex justify-between">
            <div>
              <div className="text-sm h-4 text-gray-500">Sports - Trending</div>
              <div className="h-5 mt-[2px] text-base font-bold">#Beşiktaş</div>
              <div className="h-4 mt-1 text-sm text-gray-500">13.6K Tweets</div>
            </div>
            <div className="group flex items-center justify-center w-9 h-9 rounded-full hover:bg-primary-lighter cursor-pointer">
              <ThreeDotsIcon className="w-5 h-5 text-gray-dark group-hover:text-primary-base" />
            </div>
          </div>
        </div>
        <div className="py-3 px-4 hover:bg-gray-lighter cursor-pointer rounded-b-2xl">
          <div className="flex justify-between text-primary-base">
            Show more
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
