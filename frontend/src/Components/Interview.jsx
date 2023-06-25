import React, { useState } from "react";
import Footer from "./Footer";

export default function Interview() {
  const [showOptions, setShowOptions] = useState(false);

  const handleToggleOptions = () => {
    setShowOptions(!showOptions);
  };

  return (
    <>
      <div className=" mt-10 w-full h-96 bg-black bg-opacity-50 flex items-center justify-center">
        <div className="flex flex-col items-center justify-center bg-gradient-to-t">
          <h1 className="text-xl font-bold mb-8">Interview</h1>
          <div className="flex gap-4">
            <button className=" shahid hover:from-purple-700 hover:to-purple-900 text-white font-bold py-2 px-4 rounded">
              Non-Technical Round
            </button>
            <div className="relative">
              <button
                className=" shahid hover:from-purple-700 hover:to-purple-900 text-white font-bold py-2 px-4 rounded"
                onClick={handleToggleOptions}
              >
                Technical Round
              </button>
              {showOptions && (
                <div className="absolute left-0 mt-2 w-48 bg-white border border-gray-300 rounded-md shadow-lg">
                  <ul className="py-1">
                    <li className="hover:bg-teal-100 px-4 py-2 cursor-pointer">
                      MERN
                    </li>
                    <li className="hover:bg-teal-100 px-4 py-2 cursor-pointer">
                      Node.js
                    </li>
                    <li className="hover:bg-teal-100 px-4 py-2 cursor-pointer">
                      Java
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
        {/* <Footer /> */}
      </div>
      <Footer />
    </>
  );
}
