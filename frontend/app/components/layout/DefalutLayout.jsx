"use client";
import React, { useState } from "react";
import { HomeIcon, PencilSquareIcon } from "@heroicons/react/24/outline";
import { Header, Sidebar } from "../navs";

const DefalutLayout = (Component) => {
  function Layout(props) {
    const [sidebarOpen, setSidebarOpen] = useState(true);
    return (
      <div className="flex bg-gray-100">
        {/* Sidebar */}
        <Sidebar sidebarOpen={sidebarOpen} />

        {/* Main content */}
        <div
          className={`flex-1 transition-all w-56 duration-300 ease-in-out ${
            sidebarOpen ? "ml-16" : "ml-[230px]"
          } min-h-screen`}
        >
          {/* Header */}
          <Header setSidebarOpen={setSidebarOpen} sidebarOpen={sidebarOpen} />

          {/* Content */}
          <div className="pt-25 w-full p-8">
            <Component />
          </div>
        </div>
      </div>
    );
  }
  return Layout;
};

export default DefalutLayout;
