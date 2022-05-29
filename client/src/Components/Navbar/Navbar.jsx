import React from "react";
import "../../App.css";

const Links = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Mark Attendance",
    path: "/markattendance",
  },
  {
    name: "Attendance Report",
    path: "/attendancereport/",
  },
];

const Navbar = () => {
  return (
    <div>
      <nav className="nav flex flex-wrap items-center justify-between px-4 bg-black text-gray-100">
        <div className="flex flex-no-shrink items-center mr-6 py-4 ">
          <span className="font-semibold text-xl tracking-tight">
            Attendance Management System
          </span>
        </div>
        <input
          className="menu-btn hidden text-grey-100"
          type="checkbox"
          id="menu-btn"
        />
        <label
          className="menu-icon block cursor-pointer md:hidden px-2 py-4 relative select-none "
          for="menu-btn"
        >
          <span className="navicon flex items-center relative"></span>
        </label>

        <ul className="menu border-b md:border-none flex justify-end list-reset m-0 w-full md:w-auto ">
          {Links.map(({ name, path }) => (
            <li className="border-t md:border-none " key={path} path={path}>
              <a
                href={path}
                className="block md:inline-block px-4 py-3 no-underline text-gray-200 hover:text-gray-500"
              >
                {name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
