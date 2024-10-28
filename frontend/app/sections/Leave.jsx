import React from "react";
import TableTwo from "../components/table/TableOne";
import MonthSelector from "../components/MonthSelector";

const Leave = () => {
  return (
    <div className=" w-full">
      <div className="w-full p-10 h-[13%]  border-b">
        <p className="text-2xl font-medium">Leave</p>
      </div>
      <div className="flex w-full px-10 justify-between py-10 items-center">
        <div className="flex flex-wrap w-full justify-between gap-3  items-center">
          <div className="flex justify-center rounded-sm bg-gray-100 flex-col items-center py-6 px-10 w-[30%]">
            <p className="text-lg">00:00:00</p>
            <p className="text-sm text-gray-400">Leave hour(paid)</p>
          </div>
          <div className="flex justify-center rounded-sm bg-gray-100 flex-col items-center py-6 px-10 w-[30%]">
            <p className="text-lg">100%</p>
            <p className="text-sm text-gray-400">Total work availability</p>
          </div>
          <div className="flex justify-center rounded-sm bg-gray-100 flex-col items-center py-6 px-10 w-[30%]">
            <p className="text-lg">184:00:00</p>
            <p className="text-sm text-gray-400">Total work hour</p>
          </div>
        </div>
      </div>
      <div
        className="md:w-[120vw] h-full   xl:w-full
     "
      >
        <MonthSelector />
        <TableTwo
          cols={7}
          headers={[
            "Date & time",
            "Leave duration",
            "Leave Type",
            "Attachments",
            "Status",
            "Activity",
            "Actions",
          ]}
        />
      </div>
    </div>
  );
};

export default Leave;
