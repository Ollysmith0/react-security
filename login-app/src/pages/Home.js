import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import logo from "../assets/images/logo.svg";
import homeBG from "../assets/images/homeBG.jpeg";
import { Link } from "react-router-dom";
import GradientButton from "../components/common/GradientButton";

const Home = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();
  return (
    <>
      <div className="w-full top-0 bg-mygreen px-10 py-5">
        <div className="grid grid-cols-3 grid-rows-1">
          <img className="inline-block w-12 h-full" src={logo} alt="logo" />
          <div className="flex items-center justify-center">
            <h2 className="inline-block text-white text-3xl">
              React Authentication App
            </h2>
          </div>
          <div className="flex items-center justify-end">
            <Link
              to="/signup"
              className="text-white mr-6 text-lg transform hover:scale-125 transition duration-300 ease-in-out"
            >
              Sign Up
            </Link>
            {isAuthenticated ? (
              <GradientButton to="/dashboard" text="Go to Dashboard" />
            ) : (
              <GradientButton
                className="bg-white text-mygreen"
                onClick={loginWithRedirect}
                text="Log in"
              />
            )}
          </div>
        </div>
      </div>
      <div className="h-full bg-mygreen-900">
        <div className="opacity-90">
          <img className="object-full w-full" src={homeBG} alt="homebg" />
        </div>
        <div className="absolute left-0 top-0 mt-32 lg:mt-48 px-12">
          <div className="w-full lg:w-2/3">
            <h1 className="text-white text-2xl lg:leading-tight lg:text-6xl sm:text-5xl font-bold">
              Sales Data Management That Works For Your Team
            </h1>
            <h2 className="text-white text-md sm:text-2xl sm:mt-10 mt-4">
              Take the pain out of managing your sales data
            </h2>
            <div className="mt-4 sm:mt-10 w-48">
              {isAuthenticated ? (
                <GradientButton to="/dashboard" text="Go to Dashboard" />
              ) : (
                <GradientButton
                  className="bg-white text-mygreen"
                  onClick={loginWithRedirect}
                  text="Get Started"
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
