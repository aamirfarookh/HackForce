import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <nav className=" bg-green-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <a href="/" className="flex-shrink-0">
                <img
                  className="h-12 w-12 cursor-pointer rounded-full "
                  src="https://img.freepik.com/free-vector/cute-bot-say-users-hello-chatbot-greets-online-consultation_80328-195.jpg?q=10&h=200"
                  alt="Logo"
                />
              </a>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link
                  to="/interview"
                  className="text-teal-500 hover:bg-gray-700 hover:text-white px-4 py-2 rounded-md text-lg font-bold"
                >
                  Interview
                </Link>
                <Link
                  to="/bargraph"
                  className="text-teal-500 hover:bg-gray-700 hover:text-white px-4 py-2 rounded-md text-lg font-bold"
                >
                  ProgressBar
                </Link>
                <Link
                  to=""
                  className="text-teal-500 hover:bg-gray-700 hover:text-white px-4 py-2 rounded-md text-lg font-bold"
                >
                  Login
                </Link>
              </div>
            </div>
          </div>
          <div className="flex-grow"></div>
          <div className="-mr-2 flex md:hidden">
            <button
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white transition duration-150 ease-in-out"
              aria-label="Main menu"
              aria-expanded="false"
              onClick={handleToggle}
            >
              <svg
                className="block h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <svg
                className="hidden h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className={`${isOpen ? "block" : "hidden"} md:hidden`}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href=""
              className="text-teal-500 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-bold"
            >
              Interview
            </a>
            <a
              href="#"
              className="text-teal-500 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-bold"
            >
              ProgressBar
            </a>
            <a
              href="#"
              className="text-teal-500 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-bold"
            >
              Login
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}
