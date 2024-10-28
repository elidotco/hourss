import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";

const BarChart = () => {
  const [graphType, setGraphType] = useState("status");
  const options = {
    colors: ["#ff5714", "#ff5714"],
    chart: {
      fontFamily: "Poppins, sans-serif",
      type: "bar",
      height: 435,
      stacked: false,

      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false,
      },
    },

    responsive: [
      {
        breakpoint: 1536,
        options: {
          plotOptions: {
            bar: {
              borderRadius: 0,
              columnWidth: "50%",
            },
          },
        },
      },
    ],
    plotOptions: {
      bar: {
        horizontal: true,
        columnWidth: "10%",
        barHeight: "50%",
      },
      style: {
        color: "#373d3f",
        fontSize: "12px",
        fontFamily: undefined,
        fontWeight: 600,
        zIndex: -10,
      },
    },
    dataLabels: {
      enabled: false,
    },

    xaxis: {
      categories:
        graphType === "status"
          ? ["Probation", "Permanent", "Terminated"]
          : graphType === "designation"
          ? ["M", "S", "S", "E", "SD", "DO"]
          : ["M", "S", "S", "E", "SD", "DO"],
      tickAmount: 10,
    },
    yaxis: {
      min: 0,
      max: 20,
      stepSize: 2,
      tickAmount: 2,
      axisTicks: {
        show: true,
      },
    },
    legend: {
      position: "top",
      horizontalAlign: "left",
      fontFamily: "Satoshi",
      fontWeight: 500,
      fontSize: "14px",

      markers: {
        radius: 99,
      },
    },
    fill: {
      opacity: 1,
    },
    grid: {
      xaxis: {
        lines: {
          show: true,
        },
      },
      yaxis: {
        lines: {
          show: true,
        },
      },
    },
  };
  const [state, setState] = useState({
    series: [
      {
        name: "",
        data: [1, 6, 7],
      },
    ],
  });

  const handleReset = () => {
    setState((prevState) => ({
      ...prevState,
    }));
  };
  handleReset;

  const handleGraphType = (type, data) => {
    setGraphType(type);
    setState((prevState) => ({
      ...prevState,
      series: prevState.series.map((serie, index) =>
        index === 0 ? { ...serie, data: data } : serie
      ),
    }));
  };

  return (
    <div className="col-span-full   rounded-md border border-stroke bg-white md:p-7.5 shadow-default dark:border-strokedark dark:bg-boxdark ">
      <div className="mb-4 pl-5 py-4 justify-between w-full gap-4 sm:flex">
        <div>
          <h4 className="text-xl  text-black dark:text-white">
            Employee statistics
          </h4>
        </div>
        <div className="flex gap-x-3">
          <p
            onClick={() => handleGraphType("status", [2, 12, 3])}
            className={`text-[12px] cursor-pointer ${
              graphType === "status" ? "text-orange-500" : ""
            } hover:text-orange-500`}
          >
            By Employment Status
          </p>
          <p
            onClick={() =>
              handleGraphType("designation", [8, 12, 16, 2, 12, 3])
            }
            className={`text-[12px] cursor-pointer ${
              graphType === "designation" ? "text-orange-500" : ""
            } hover:text-orange-500`}
          >
            By Designation
          </p>
          <p
            onClick={() => handleGraphType("department", [15, 10, 2, 12, 3])}
            className={`text-[12px] cursor-pointer ${
              graphType === "department" ? "text-orange-500" : ""
            } hover:text-orange-500`}
          >
            By Department
          </p>
        </div>
      </div>

      <div>
        <div
          id="chartTwo"
          className="lg:ml-5 z-0 w-full relative  overflow-auto mb-9"
        >
          <ReactApexChart
            options={options}
            series={state.series}
            type="bar"
            height={350}
            style={{
              zIndex: -1,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default BarChart;
