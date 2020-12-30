import React from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";

const GradientLink = ({ to, text, size }) => {
  const classes = classNames({
    "flex items-center justify-center rounded-full py-2 px-6 text-mygreen bg-white focus:ouline-none transform hover:rotate-12 transition duration-300 ease-in-out": true,
    "text-xl": size === "lg",
  });
  return (
    <Link to={to} className={classes}>
      {text}
    </Link>
  );
};

export default GradientLink;
