import React from "react";
import { Link } from "react-router-dom";

const HyperLink = ({ text, to }) => (
  <Link
    to={to}
    className="font-medium text-mygreen hover:opacity-50 focus:outline-none focus:underline transition ease-in-out duration-150"
  >
    {text}
  </Link>
);

export default HyperLink;
