// Assuming you have a state to track the dropdown visibility, e.g., in a React component

import React, { useState } from "react";
import { Link } from "react-router-dom";

const Dropdown = ({ value, route }) => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

  const closeDropdown = () => {
    setIsDropdownVisible(false);
  };

  return (
    <li>
      <button
        type="button"
        className={`flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 ${
          isDropdownVisible ? "active" : ""
        }`}
        aria-controls="dropdown-example"
        data-collapse-toggle="dropdown-example"
        onClick={toggleDropdown}
      >
        <span className="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">
          {value}
        </span>
        <svg
          className="w-3 h-3"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
      </button>

      <ul
        id="dropdown-example"
        className={`py-2 space-y-2 ${isDropdownVisible ? "" : "hidden"}`}
      >
        <li>
          <Link
            to={`/admin/register-${route}`}
            className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
            onClick={closeDropdown}
          >
            Register
          </Link>
        </li>
        <li>
          <Link
            to={`/admin/view-${route}`}
            className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
            onClick={closeDropdown}
          >
            View
          </Link>
        </li>
        <li>
          <Link
            to={`/admin/manage-${route}`}
            className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
            onClick={closeDropdown}
          >
            Manage
          </Link>
        </li>
      </ul>
    </li>
  );
};

export default Dropdown;
