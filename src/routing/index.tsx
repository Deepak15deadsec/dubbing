import React from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import { Earnings, Error, Overview, Settings, Offer } from "../pages";
import Footer from "../components/Footer";
import Login from "../pages/login";
import ForgetPassword from "../pages/forgetPassword";
import AdDashboardHome from "../pages/adDashboardHome";
import Signup from "../pages/signup";
import AdDashboardHomeTest from "../pages/AdDashboardHomeTest";
import SignupTest from "../pages/signupTest";
import LoginTest from "../pages/loginTest";


const Routing = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Outlet />
        }
      >
         <Route index element={<AdDashboardHomeTest />} />
         {/* <Route path="/AdDashboardHomeTest" element={<AdDashboardHomeTest />} /> */}
         <Route path="/signupTest" element={<SignupTest />} />
         {/* <Route path="/signupTest" element={<SignupTest />} /> */}
         <Route path="/loginTest" element={<LoginTest />} />
        {/* <Route index element={<Login />} /> */}
        <Route path="/forgetPassword" element={<ForgetPassword />} />
        {/* <Route index element={<Overview />} /> */}
        <Route path="/earnings" element={<Earnings />} />
        <Route path="/offer" element={<Offer />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="*" element={<Error />} />
      </Route>
    </Routes>
  );
};

export default Routing;
