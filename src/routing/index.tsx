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
import ForgetPassWord from "../pages/forgetPass";
import OtpVerification from "../pages/otpVerification";
import SuccessfullyRegistered from "../pages/successfulregistered";
import FirstCampaign from "../pages/Dashboard/CreateCampaign/FirstCampaign";
import SideBar from "../pages/Dashboard/SideBar/maindashboard";
import MainDashBoard from "../pages/Dashboard/SideBar/maindashboard";
import CreateCampaign from "../pages/Dashboard/CreateCampaign/createCampaign";
import CreatedCampaign from "../pages/Dashboard/CreateCampaign/createdCampaign";


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
         <Route path="/dashboard" element={<MainDashBoard />} />
        {/* <Route index element={<Login />} /> */}
        {/* <Route path="/forgetPassword" element={<ForgetPassword />} /> */}
        <Route path="/forgetPassword" element={<ForgetPassWord />} />
        <Route path="/otpverification" element={<OtpVerification />} />
        <Route path="/registered" element={<SuccessfullyRegistered />} />
        <Route path="/createcampaign" element={<CreateCampaign />} />
        <Route path="/createdcampaign" element={<CreatedCampaign />} />
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
