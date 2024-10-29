import React from "react";
import DropdownUser from "../DropdownUser";

const Header = ({ sidebarOpen, setSidebarOpen }) => {
  return (
    <header
      className={`bg-white h-[70px] z-10  transition-all duration-300 ease-in-out fixed w-full ${
        sidebarOpen ? "lg:left-[70px]" : "lg:left-[230px]"
      } top-0 flex items-center justify-between shadow-md px-6`}
      style={{
        left: sidebarOpen ? "70px" : "230px", // Sidebar width, dynamically changing
        width: sidebarOpen ? "calc(100% - 70px)" : "calc(100% - 230px)", // Width adjusted using calc()
      }}
    >
      {/* Sidebar Toggle Button */}
      <div
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className="cursor-pointer"
      >
        {sidebarOpen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        )}
      </div>

      {/* Header Title or Content */}
      <div className="flex gap-3 lg:gap-10 items-center">
        <div className="border-l pl-2 md:pl-4">
          {" "}
          <DropdownUser />
        </div>
      </div>
    </header>
  );
};

export default Header;
