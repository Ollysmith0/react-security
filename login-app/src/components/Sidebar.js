import React, { useContext } from "react";
import classNames from "classnames";
import users from "../assets/images/users.svg";
import account from "../assets/images/account.svg";
import settings from "../assets/images/settings.svg";
import inventory from "../assets/images/inventory.svg";
import dashboard from "../assets/images/dashboard.svg";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/images/logo.svg";
import { AuthContext } from "./../context/AuthContext";

const navItems = [
  {
    label: "Dashboard",
    path: "dashboard",
    icon: dashboard,
    allowedRoles: ["user", "admin"],
  },
  {
    label: "Inventory",
    path: "inventory",
    icon: inventory,
    allowedRoles: ["admin"],
  },
  {
    label: "Account",
    path: "account",
    icon: account,
    allowedRoles: ["user", "admin"],
  },
  {
    label: "Settings",
    path: "settings",
    icon: settings,
    allowedRoles: ["user", "admin"],
  },
  {
    label: "Users",
    path: "users",
    icon: users,
    allowedRoles: ["user", "admin"],
  },
];

const NavItem = ({ navItem }) => {
  const location = useLocation();
  const isCurrentRoute = location.pathname === `/${navItem.path}`;
  const classes = classNames({
    "px-2 sm:px-6 justify-center sm:justify-start py-3 rounded-full flex": true,
    "text-gray-600 hover:text-mygreen transform hover:translate-x-1 transition ease-in-out duration-100": !isCurrentRoute,
    "bg-mygreen text-white shadow-lg": isCurrentRoute,
  });
  return (
    <Link to={navItem.path} className={classes}>
      <div className="flex items-center">
        <div className="mr-0 sm:mr-4">
          <img
            className="w-6 sm:w-6 sm:h-4"
            src={navItem.icon}
            alt={`${navItem.icon}`}
          />
        </div>
        <span className="hidden sm:block">{navItem.label}</span>
      </div>
    </Link>
  );
};

const NavItemContainer = ({ children }) => <div>{children}</div>;

const Sidebar = () => {
  const auth = useContext(AuthContext);
  const { role } = auth.authState.userInfo;
  return (
    <section className="h-screen">
      <div className="w-16 sm:w-24 m-auto">
        <img src={logo} rel="logo" alt="Logo" />
      </div>
      <div className="mt-20">
        {navItems.map((navItem, i) => (
          <NavItemContainer key={i}>
            {navItem.allowedRoles.includes(role) && (
              <NavItem navItem={navItem} />
            )}
          </NavItemContainer>
        ))}
      </div>
    </section>
  );
};

export default Sidebar;
