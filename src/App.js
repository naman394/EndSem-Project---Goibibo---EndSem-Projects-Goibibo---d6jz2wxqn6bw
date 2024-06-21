import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import "./index.css";
import SearchBar from "./components/SearchBar";
import HotelDetail from "./components/HotelDetail";


function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  return (
      <Router>
        <Navbar isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />
        <div className="container mx-auto ">
          <Routes>
            <Route path="/" element={isAuthenticated ? <SearchBar /> : <Navigate to="/signup" />} />
            <Route path="/signin" element={<SignIn setIsAuthenticated={setIsAuthenticated} />} />
            <Route path="/signup" element={<SignUp />} />
            {/* <Route path="*" element={<Navigate to="/" />} /> */}
            <Route path="/hotel/:hotelId" element = {<HotelDetail/>} />
          </Routes>
        </div>
        {/* <SortBy/> */}
      </Router>
  );
}

export default App;


