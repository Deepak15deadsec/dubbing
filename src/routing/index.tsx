import React from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import Login from "../pages/login";
import MainDashBoard from "../pages/Dashboard/SideBar/maindashboard";


const Routing = () => {

  return (
    <Routes>

      <Route
        path="/"
        element={
          <Outlet />
        }
      >
        <Route index element={<Login />} />


        /<Route path="/dashboard" element={<MainDashBoard />} />

      </Route>
    </Routes>
  );
};

export default Routing;
