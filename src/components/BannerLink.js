import React from "react";

export const BannerLink = ({ name, Icon, active, onMenuItemClick }) => {
  const isActive = active === name;
  return (
    <li className="group cursor-pointer" onClick={() => onMenuItemClick(name)}>
      <a href={name.toLowerCase()} className="pointer-events-none">
        <div
          className={`"flex items-center group-hover:bg-gray-light rounded-full p-3 w-12 h-12 mx-auto "
          
          ${isActive ? "text-primary-base" : ""}
          `}
        >
          <Icon />
        </div>
      </a>
    </li>
  );
};
