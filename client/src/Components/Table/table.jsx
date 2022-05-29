import React from "react";

const table = () => {
  return (
    <div>
      <div className="md:flex antialiased text-white">
        <div className=" h-screen w-full">
          <div>
            <div className="m-4">
              <div className=" flex flex-row flex-wrap items-center text-center ">
                <div className="p-4 w-full sm:w-1/2 lg:w-1/4 ">
                  <span className="text-xs font-medium text-gray-400 uppercase">
                    TOTAL Presenty
                  </span>
                  <div className="py-4 flex items-center justify-center text-center">
                    <span className="mr-4 text-3xl">80%</span>
                    <span className="inline-flex items-center bg-green-500 h-6 px-2 rounded text-white text-xs">
                      +12.0%
                    </span>
                  </div>
                </div>
                <div className="p-4 w-full sm:w-1/2 lg:w-1/4 ">
                  <span className="text-xs font-medium text-gray-400 uppercase">
                    Month
                  </span>
                  <div className="py-4 flex items-center justify-center text-center">
                    <span className="mr-4 text-3xl">5 DAYS/WEEK</span>
                  </div>
                </div>
                <div className="p-4 w-full sm:w-1/2 lg:w-1/4 ">
                  <span className="text-xs font-medium text-gray-400 uppercase">
                    Total Holidays
                  </span>
                  <div className="py-4 flex items-center justify-center text-center">
                    <span className="mr-4 text-3xl">4</span>
                  </div>
                </div>
                <div className="p-4 w-full sm:w-1/2 lg:w-1/4  flex flex-col items-center">
                  <span className="text-xs font-medium text-gray-400 uppercase">
                    Aquracy
                  </span>
                  <div className="py-4 flex items-center justify-center text-center">
                    <span className="mr-4 text-3xl">60%</span>
                    <span className="inline-flex items-center bg-green-500 h-6 px-2 rounded text-white text-xs">
                      +3.0%
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap flex-row">
              <div className="w-full">
                <div className="m-4  rounded shadow">
                  <div className=" p-4 px-8 text-lg font-medium">Students</div>
                  <div className=" w-full lg:w-11/12">
                    <table
                      className="w-full"
                      cellpadding="0"
                      cellspacing="0"
                      border="0"
                    >
                      <tbody>
                        <tr>
                          <td className="p-2 py-4 ">
                            <div className="pl-4 flex flex-wrap flex-row items-center">
                              <div className="mr-4 h-12 w-12 bg-red-600 rounded-full block flex  flex-row justify-center items-center text-white">
                                V
                              </div>
                              <div className="text-gray-300">Virat Kohli</div>
                            </div>
                          </td>
                          <td className="text-right p-2 pr-4  text-gray-300">
                            <div className="text-green-500">Present</div>
                          </td>
                        </tr>
                        <tr>
                          <td className="p-2 py-4 ">
                            <div className="pl-4 flex flex-wrap flex-row items-center">
                              <div className="mr-4 h-12 w-12 bg-green-600 rounded-full block flex  flex-row justify-center items-center text-white">
                                M
                              </div>
                              <div className="text-gray-300">Mansi Gundre</div>
                            </div>
                          </td>
                          <td className="text-right p-2 pr-4  text-gray-300">
                            <div className="text-green-500">Present</div>
                          </td>
                        </tr>
                        <tr>
                          <td className="p-2 py-4 ">
                            <div className="pl-4 flex flex-wrap flex-row items-center">
                              <div className="mr-4 h-12 w-12 bg-blue-600 rounded-full block flex  flex-row justify-center items-center text-white">
                                R
                              </div>
                              <div className="text-gray-300">Ronaldo</div>
                            </div>
                          </td>
                          <td className="text-right p-2 pr-4  text-gray-300">
                            <div className="text-red-500">
                              <div>Absent</div>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default table;
