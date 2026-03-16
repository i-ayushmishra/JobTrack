import React from "react";

const Navbar = ({ onLogout }) => {
  return (
    <div className="h-16 md:h-20 flex items-center justify-between w-full  text-white px-4 md:px-10 lg:px-20">
      <div className="text-xl sm:text-2xl md:text-3xl font-bold">
        Job Track.
      </div>

      <button
        onClick={() => {
          localStorage.removeItem("isLoggedIn");
          onLogout();
        }}
        className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded-md font-semibold transition"
      >
        Logout
      </button>
    </div>
  );
};

export default Navbar;