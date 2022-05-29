import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import Home from "./Pages/Home/Home";
import SignUp from "./Pages/Auth/signin";
import SignIn from "./Pages/Auth/signin";
import MarkAttendance from "./Pages/MarkAttendance/MarkAttendance";

function App() {
  return (
    <div className="bg-black">
      <Navbar />
      <div className="min-h-screen h-fit">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/markattendance" element={<MarkAttendance />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
