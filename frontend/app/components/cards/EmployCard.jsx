import React from "react";

const EmployCard = () => {
  return (
    <div className="w-[23%] bg-white shadow justify-center items-center py-10 flex flex-col gap-y-3 rounded-md mt-5 ">
      <div className="w-14 flex justify-center items-center h-14 rounded-full  bg-gray-500 text-white">
        JD
      </div>

      <p className="">John Doe</p>
      <p className="text-gray-500  text-[11px]">Software Engineer</p>
      <p className=" text-[11px] text-gray-500">1sq3w3333</p>
      <p className=" text-sm py-2 px-4 text-white bg-primary rounded-full">
        permanent
      </p>
      <p className="  text-gray-500">Development</p>

      <p className="text-gray-500 ">Regular Shift</p>
      <p className="text-primary pt-10 text-sm  ">view details</p>
    </div>
  );
};

export default EmployCard;
