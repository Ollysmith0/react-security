import React, { useEffect, useRef, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import signout from "../assets/images/signout.svg";
import downArrow from "../assets/images/downArrow.svg";

const DropdownItem = ({ item }) => {
  return (
    <button
      className="text-gray-700 flex items-center w-full"
      onClick={item.onClick}
    >
      <img className="w-5" src={item.icon} alt="logout" />
      <p className="ml-2">{item.title}</p>
    </button>
  );
};

const DropdownContent = ({ dropdownItems }) => {
  return (
    <div className="bg-white w-full absolute p-4 shadow-lg rounded-lg mt-2">
      {dropdownItems.map((item, i) => {
        return (
          <div className="mt-1" key={i}>
            <DropdownItem item={item} />
          </div>
        );
      })}
    </div>
  );
};

const AvatarDropdown = () => {
  const node = useRef();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { logout, user } = useAuth0();

  const dropdownItems = [
    {
      title: "Log Out",
      icon: signout,
      onClick: () => logout({ returnTo: window.location.origin }),
    },
  ];

  const handleClick = (e) => {
    if (!node.current.contains(e.target)) {
      setDropdownOpen(false);
    } else {
      setDropdownOpen(true);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClick);
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, []);

  return (
    <div ref={node}>
      <button
        ref={node}
        className="flex rounded-full items-center py-2 px-3 bg-mygreen focus:outline-none shadow-lg"
      >
        <img
          src={user.picture}
          className="rounded-full w-6 border-2 border-white"
          alt="Avatar"
        />
        <div className="px-3">
          <p className="text-white">{user.nickname}</p>
        </div>
        <div className="mr-1 text-white">
          <img className="white w-3" src={downArrow} alt="downArrow" />
        </div>
      </button>

      {dropdownOpen && (
        <div className="relative">
          <DropdownContent dropdownItems={dropdownItems} />
        </div>
      )}
    </div>
  );
};

export default AvatarDropdown;
