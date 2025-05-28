import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

const App = () => {
  const location = useLocation();
  const isSellerPath = location.pathname.includes("seller");

  return (
    <div>
      {/* Hide Navbar on seller paths */}
      {!isSellerPath && <Navbar />}

      <div className={`${!isSellerPath ? "px-6 md:px-16 lg:px-24 xl:px-32" : ""}`}>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
