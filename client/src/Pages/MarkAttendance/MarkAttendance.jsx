import React from "react";

const MarkAttendance = () => {
  const markAttendance = (e) => {
    e.preventDefault();
  };
  return (
    <div className="text-white text-center py-10 text-3xl">
      Mark Attendance
      <div className="py-10">
        <button
          type="button"
          onClick={markAttendance}
          className="inline-block px-6 py-4 bg-gray-700 text-white font-large text-lg leading-tight uppercase rounded shadow-md hover:bg-gray-800 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
        >
          Open Web Cam
        </button>
      </div>
    </div>
  );
};

export default MarkAttendance;
