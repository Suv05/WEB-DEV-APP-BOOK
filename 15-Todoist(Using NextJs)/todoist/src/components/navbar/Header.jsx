import React from "react";

function Header({}) {
  return (
    <>
      <div className="py-5 px-3 flex flex-row justify-between bg-[#222222]">
        <div className="text-2xl font-bold text-white">Todoist</div>
        <div className="flex flex-row">
          <p className="cursor-pointer text-white hover:font-bold hover:underline me-4 active:scale-75 hover:scale-105 transition hover:animate-bounce">
            Home
          </p>
          <p className="cursor-pointer text-white hover:font-bold hover:underline  me-4 active:scale-75 hover:scale-105 transition hover:animate-bounce">
            About
          </p>
          <p className="cursor-pointer text-white hover:font-bold hover:underline  me-4 active:scale-75 hover:scale-105 transition hover:animate-bounce">
            Contact
          </p>
        </div>
      </div>
    </>
  );
}

export default Header;
