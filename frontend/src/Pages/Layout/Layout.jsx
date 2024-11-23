import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import Profile from "../ProfilePage/Profile";
import "./LayoutStyle.css";

const Layout = () => {
  return (
    <Router>
      <div className="layout_container">
        <div className="sidebar">
          <Navbar />
        </div>
        <div className="main-content">
          <Routes>
            <Route
              path="/profile"
              element={
                <div>
                  <Profile />
                </div>
              }
            />
            <Route
              path="/create"
              element={
                <div>
                  <Profile isCreate={true} />
                </div>
              }
            />
            {/* <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} /> */}
          </Routes>
        </div>
      </div>
    </Router>
  );
};
export default Layout;
