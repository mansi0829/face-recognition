import React from "react";
import Table from "../../Components/Table/table";
import { useAuth } from "../../context/AuthUserContext";

const AttendanceReport = () => {
  const { authUser, loading } = useAuth();
  return (
    <div>
      {loading ? (
        <div>
          <div>Loading....</div>
        </div>
      ) : (
        <>
          <div>
            <div className="min-h-full">
              <div className="text-center mb-16">
                <div>
                  <div>
                    {authUser && (
                      <div>
                        Congratulations {authUser?.email}! You are logged in.
                      </div>
                    )}
                  </div>
                </div>
                <p className="mt-4 text-xl leading-7 text-gray-400 dark:text-gray-200 font-regular uppercase">
                  Attendance Report
                </p>
              </div>
              {!authUser ? (
                <div className="text-white text-center text-2xl">Students <br></br> Login to know Record</div>
              ) : (
                <div>
                  <Table />
                </div>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default AttendanceReport;
