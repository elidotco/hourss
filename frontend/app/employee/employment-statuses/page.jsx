"use client";
import React, { useState } from "react";
import DefalutLayout from "../../components/layout/DefalutLayout";
import Link from "next/link";
import TableTwo from "@/app/components/table/TableOne";

const JOb = () => {
  return (
    <>
      <div className="flex w-full justify-between items-center">
        <p className="text-2xl mb-5 px-10">Employment Status</p>
        <Link
          href="#"
          className="inline-flex items-center justify-center bg-green-400 py-2 px-2 text-center text-white hover:bg-opacity-90 lg:px-4 rounded-sm font-light xl:px-6"
        >
          Add Employment Status
        </Link>
      </div>
      <div className="w-full mt-10">
        <TableTwo
          cols={4}
          headers={["Name", "Preview", "Description", "Action"]}
        />
      </div>
    </>
  );
};

export default DefalutLayout(JOb);
