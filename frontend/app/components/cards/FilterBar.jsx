import React, { useState, useEffect } from "react";
import { FaSearch, FaCalendarAlt, FaFilter } from "react-icons/fa";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import DateRangePicker from "../DateRangePicker";

const filters = [
  "Joining date",
  "Designation",
  "Employment Status",
  "Work Shift",
  "Department",
  "Role",
  "Gender",
  "Salary",
];

// Mock data
const data = [
  {
    id: 1,
    name: "John Doe",
    department: "HR",
    designation: "Manager",
    gender: "Male",
    status: "Permanent",
    joiningDate: "2022-05-15",
    salary: 40000,
  },
  {
    id: 2,
    name: "Jane Smith",
    department: "Finance",
    designation: "Analyst",
    gender: "Female",
    status: "Probation",
    joiningDate: "2021-10-10",
    salary: 30000,
  },
];

const FilterBar = () => {
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredData, setFilteredData] = useState(data);
  const [activeFilter, setActiveFilter] = useState(null); // Track the currently active filter
  const toggleFilter = (filter) => {
    if (selectedFilters.includes(filter)) {
      setSelectedFilters(selectedFilters.filter((item) => item !== filter));
    } else {
      setSelectedFilters([...selectedFilters, filter]);
    }
  };

  // Filter popup toggling
  const toggleFilterPopup = (filter) => {
    setActiveFilter(activeFilter === filter ? null : filter);
  };

  // Handle search query update
  const handleSearch = (e) => setSearchQuery(e.target.value);

  // Update filter state
  const updateFilter = (filterKey, value) => {
    setSelectedFilters((prevFilters) => ({
      ...prevFilters,
      [filterKey]: value,
    }));
  };
  console.log(selectedFilters);
  // Filtering logic (dummy for demonstration)
  useEffect(() => {
    const newFilteredData = data.filter((item) => {
      const matchesSearch = item.name
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
      // Add custom logic for other filters if necessary
      return matchesSearch;
    });
    setFilteredData(newFilteredData);
  }, [selectedFilters, searchQuery]);

  return (
    <div className="w-full py-10">
      {/* Filter Bar */}
      <div className="flex justify-between gap-3 p-4">
        <div className="flex flex-wrap gap-3">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => toggleFilter(filter)}
              className={`px-4 py-2 ${
                selectedFilters.includes(filter)
                  ? "bg-primary text-white"
                  : "bg-white "
              } hover:bg-primary hover:text-white transition-all duration-100 rounded-full shadow text-sm whitespace-nowrap text-gray-500`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Search Bar */}
        <div className="relative items-center bg-white  rounded-full  shadow text-gray-700 flex text-sm focus:outline-none h-10 px-3 gap-x-2 focus:ring-2 focus:ring-primary">
          <FaSearch className="  text-gray-400" />
          <input
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={handleSearch}
            className="border-none  bg-transparent w-full outline-none"
          />
        </div>
      </div>

      {/* Filter Popups */}
      {/* {activeFilter === "Joining date" && (
        <div className="absolute top-full mt-2 p-4 bg-white border rounded shadow">
          <DatePicker
            selected={selectedFilters["Joining date"]}
            onChange={(date) => updateFilter("Joining date", date)}
            dateFormat="yyyy-MM-dd"
            className="p-2 border rounded"
          />
        </div>
      )}

      {activeFilter === "Gender" && (
        <div className="absolute top-full mt-2 p-4 bg-white border rounded shadow">
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={selectedFilters["Gender"] === "Male"}
              onChange={() => updateFilter("Gender", "Male")}
              className="form-checkbox"
            />
            Male
          </label>
          <label className="flex items-center gap-2 mt-2">
            <input
              type="checkbox"
              checked={selectedFilters["Gender"] === "Female"}
              onChange={() => updateFilter("Gender", "Female")}
              className="form-checkbox"
            />
            Female
          </label>
        </div>
      )}

      {activeFilter === "Salary" && (
        <div className="absolute top-full mt-2 p-4 bg-white border rounded shadow">
          <label>
            Min Salary:
            <input
              type="number"
              value={selectedFilters["Salary"]?.min || ""}
              onChange={(e) =>
                updateFilter("Salary", {
                  ...selectedFilters["Salary"],
                  min: e.target.value,
                })
              }
              className="block mt-1 p-2 border rounded"
            />
          </label>
          <label className="mt-2">
            Max Salary:
            <input
              type="number"
              value={selectedFilters["Salary"]?.max || ""}
              onChange={(e) =>
                updateFilter("Salary", {
                  ...selectedFilters["Salary"],
                  max: e.target.value,
                })
              }
              className="block mt-1 p-2 border rounded"
            />
          </label>
        </div>
      )} */}

      {/* Display Filtered Data */}
    </div>
  );
};

export default FilterBar;
