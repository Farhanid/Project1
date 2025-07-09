import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";

const LoginModal = () => {
     const [showLogin, setShowLogin] = useState(false);

  return (
  <div className="relative h-screen text-black bg-gray-100 flex items-center justify-center">
      {/* Open Button */}
      <button
        className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700"
        onClick={() => setShowLogin(true)}
      >
        Open Login
      </button>

      {/* Overlay + Sliding Login Modal */}
      {showLogin && (
        <div className="fixed inset-0 z-50">
          {/* Background Blur Overlay */}
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setShowLogin(false)} // Optional: click outside to close
          ></div>

          {/* Login Form Slide-In from Right */}
          <div className="absolute top-0 right-0 h-full w-full sm:w-[400px] bg-white shadow-lg transition-transform duration-300 translate-x-0">
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 text-gray-500 hover:text-red-500"
              onClick={() => setShowLogin(false)}
            >
              <AiOutlineClose size={24} />
            </button>

            {/* Login Content */}
            <div className="p-8 mt-10">
              <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium">Email</label>
                  <input
                    type="email"
                    className="w-full p-2 border border-gray-300 rounded mt-1"
                    placeholder="Enter your email"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium">Password</label>
                  <input
                    type="password"
                    className="w-full p-2 border border-gray-300 rounded mt-1"
                    placeholder="Enter your password"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
                >
                  Login
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LoginModal;
