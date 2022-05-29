import React, { useState } from "react";
import { useAuth } from "../../context/AuthUserContext";

const Links = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Attendance Report",
    path: "/report/",
  },
  {
    name: "Login",
    path: "/signin",
  },
];

const AuthLinks = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Mark Attendance",
    path: "/markattendance/",
  },
  {
    name: "Attendance Report",
    path: "/report/",
  },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const { authUser, signOut } = useAuth();

  return (
    <div>
      <nav className=" flex flex-wrap items-center justify-between px-5 py-3 ">
        <div className=" w-full bg-transparent opacity-50 dark:opacity-80 z-20 px-4 mx-auto flex flex-wrap items-center  justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <div className="name text-xl flex-1 flex justify-between items-center text-gray-900 dark:text-white">
              <a href="/">ATTENDANCE MANAGEMENT SYSTEM</a>
            </div>
            <button
              className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <label
                htmlFor="menu-toggle"
                className="pointer-cursor lg:hidden block"
              >
                <svg
                  className="fill-current text-gray-100 hover:text-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                >
                  <title>menu</title>
                  <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                </svg>
              </label>
            </button>
          </div>
          <div
            className={
              "lg:flex  lg:bg-transparent lg:shadow-none" +
              (navbarOpen ? " block rounded " : " hidden")
            }
            id="example-navbar-warning"
          >
            <ul className="list-none lg:ml-auto">
              {!authUser ? (
                <div className="flex">
                  {Links.map(({ name, path }) => (
                    <a key={path} href={path}>
                      <div
                        onClick={() => setNavbarOpen(!navbarOpen)}
                        className="px-4 py-3 text-gray-100 hover:text-gray-500"
                      >
                        {name}
                      </div>
                    </a>
                  ))}
                </div>
              ) : (
                <div className="flex">
                  {AuthLinks.map(({ name, path }) => (
                    <a key={path} href={path}>
                      <div
                        onClick={() => setNavbarOpen(!navbarOpen)}
                        className="px-4 py-3 text-gray-100 hover:text-gray-500"
                      >
                        {name}
                      </div>
                    </a>
                  ))}
                  <a href="/" className="py-2">
                    <button
                      type="button"
                      onClick={signOut}
                      className="inline-block px-6 py-2.5 bg-gray-700 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-gray-800 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                    >
                      Sign Out
                    </button>
                  </a>
                </div>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default Navbar;
