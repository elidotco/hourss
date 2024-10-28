"use client";
import React, { useState } from "react";
import DefalutLayout from "../../components/layout/DefalutLayout";
import Link from "next/link";
import FilterBar from "@/app/components/cards/FilterBar";
import EmployCard from "@/app/components/cards/EmployCard";

const JOb = () => {
  return (
    <>
      <div className="w-full items-center flex justify-between">
        <h1 className="text-2xl font-[400]">All Employees</h1>
        {/* Buttons */}
        <div className="flex gap-3">
          <Link
            href="#"
            className="inline-flex items-center justify-center bg-green-400 py-[6px] px- text-center text-white hover:bg-opacity-90 lg:px-4 rounded-sm font-light xl:px-6"
          >
            Add Employee
          </Link>
          <Link
            href="#"
            className="inline-flex items-center justify-center rounded-sm border border-orange-500 py-[6px] px-10 text-center   bg-orange-500 text-white transition-all ease-in-out duration-100 lg:px-8 xl:px-5"
          >
            Invite Employee
          </Link>
        </div>

        {/* Buttons */}
      </div>
      <div className="w-full">
        <FilterBar />
      </div>

      <div className="py-10 w-full gap-[2%] flex flex-wrap">
        <EmployCard />
        <EmployCard />
        <EmployCard />
        <EmployCard />
        <EmployCard />
        <EmployCard />
      </div>
    </>
  );
};

export default DefalutLayout(JOb);
