import React from "react";
import classNames from "classnames";

const GradientButton = ({ type, text, size, loading, onClick }) => {
  const classes = classNames({
    "flex rounded-full items-center py-2 px-6 bg-white focus:outline-none shadow-lg text-mygreen transition transform hover:-rotate-6": true,
    "text-2xl": size === "lg",
  });

  return (
    <button type={type} className={classes} onClick={onClick}>
      {loading ? (
        <span className="flex items-center">
          <span className="animate-spin" />
          <span className="ml-2">Loading...</span>
        </span>
      ) : (
        <span>{text}</span>
      )}
    </button>
  );
};

export default GradientButton;
