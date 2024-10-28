import { useState } from "react";
import DatePicker from "react-datepicker";

const DateRangePicker = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [selectedFilter, setSelectedFilter] = useState("");

  const applyFilter = (filter) => {
    let today = new Date();
    switch (filter) {
      case "Today":
        setStartDate(today);
        setEndDate(today);
        break;
      case "Last 7 Days":
        setStartDate(new Date(today.setDate(today.getDate() - 7)));
        setEndDate(new Date());
        break;
      case "This Month":
        setStartDate(new Date(today.getFullYear(), today.getMonth(), 1));
        setEndDate(new Date(today.getFullYear(), today.getMonth() + 1, 0));
        break;
      case "This Year":
        setStartDate(new Date(today.getFullYear(), 0, 1));
        setEndDate(new Date(today.getFullYear(), 11, 31));
        break;
      default:
        break;
    }
    setSelectedFilter(filter);
  };

  return (
    <div className="hoflex items-start hidden h-auto overflow-scroll gap-8">
      <div className="flex items-center">
        <button
          onClick={() =>
            setStartDate(new Date(startDate.setMonth(startDate.getMonth() - 1)))
          }
        >
          &lt;
        </button>
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          selectsStart
          startDate={startDate}
          endDate={endDate}
          inline
        />
        <DatePicker
          selected={endDate}
          onChange={(date) => setEndDate(date)}
          selectsEnd
          startDate={startDate}
          endDate={endDate}
          minDate={startDate}
          inline
        />
        <button
          onClick={() =>
            setEndDate(new Date(endDate.setMonth(endDate.getMonth() + 1)))
          }
        >
          &gt;
        </button>
      </div>

      <div className="flex flex-col">
        {["Today", "Last 7 Days", "This Month", "This Year"].map((filter) => (
          <div
            key={filter}
            onClick={() => applyFilter(filter)}
            className={`cursor-pointer p-2 ${
              selectedFilter === filter ? "text-blue-500" : "text-gray-700"
            }`}
          >
            {filter}
          </div>
        ))}
        <button
          onClick={() => {
            setStartDate(null);
            setEndDate(null);
            setSelectedFilter("");
          }}
          className="clear-button"
        >
          Clear
        </button>
        <button
          onClick={() => console.log("Apply filter:", startDate, endDate)}
          className="mt-2 px-4 py-2 bg-blue-500 text-white rounded"
        >
          Apply
        </button>
      </div>
    </div>
  );
};
export default DateRangePicker;
