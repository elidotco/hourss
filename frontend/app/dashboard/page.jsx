"use client";
import React, { useState } from "react";
import { HomeIcon, PencilSquareIcon } from "@heroicons/react/24/outline";

import Link from "next/link";
import { StatsCard } from "../components/cards";
import { FiUser, FiUserX } from "react-icons/fi";
import PieChart from "../components/charts/PieChart";
import BarChart from "../components/charts/BarChart";
import DefalutLayout from "../components/layout/DefalutLayout";

const Dashboard = () => {
  return (
    <>
      {/* Content */}

      <div className="w-full  pl-10 md:flex-row flex-col flex justify-between">
        <h1 className="text-2xl font-[400]">Dashboard</h1>
        {/* Buttons */}
        <div className="flex pt-10 gap-3">
          <Link
            href="#"
            className="inline-flex items-center justify-center bg-green-400 py-[6px] px-2 text-center text-white hover:bg-opacity-90 lg:px-4 rounded-sm font-light xl:px-6"
          >
            Punch In
          </Link>
          <Link
            href="#"
            className="inline-flex items-center justify-center rounded-sm border border-orange-500 py-[6px] px-10 text-center  text-orange-500  hover:bg-orange-500 hover:text-white transition-all ease-in-out duration-100 lg:px-8 xl:px-5"
          >
            View as Employee
          </Link>
        </div>

        {/* Buttons */}
      </div>
      <div className="flex pt-10 lg:px-0 px-10  md:flex-row flex-col gap-y-4 items-center justify-between w-full">
        <StatsCard num={14} Icons={FiUser} name="Total Employees" />
        <StatsCard num={6} Icons={HomeIcon} name="Total Departments" />
        <StatsCard
          num={5}
          Icons={PencilSquareIcon}
          name="Total leave request"
        />
        <StatsCard num={0} Icons={FiUserX} name="On leave today" />
      </div>
      <div className="w-full flex flex-col min-h-[50%] lg:flex-row  justify-between pt-10 ">
        <div className="lg:w-[75%] w-full h-full ">
          <BarChart />
        </div>
        <div className="md:w-[23%] w-full mt-5 h-full ">
          <PieChart />
        </div>
      </div>
      <div className="w-full h-screen"></div>
    </>
  );
};

export default DefalutLayout(Dashboard);
