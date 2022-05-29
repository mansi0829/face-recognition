import React, { useEffect, useState } from "react";
import Navbar from "./Components/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import Home from "./Pages/Home/Home";

function App() {
  
  return (
    <div>
      <Navbar />
      <div className="min-h-screen h-fit">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
