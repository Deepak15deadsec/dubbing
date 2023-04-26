import React from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import {  Error } from "../pages";
import ForgetPassword from "../pages/forgetPassword";
import AdDashboardHome from "../pages/adDashboardHome";
import Signup from "../pages/signup";
import AdDashboardHomeTest from "../pages/AdDashboardHomeTest";
import SignupTest from "../pages/signupTest";
import LoginTest from "../pages/loginTest";
import ForgetPassWord from "../pages/forgetPass";
import OtpVerification from "../pages/otpVerification";
import SuccessfullyRegistered from "../pages/successfulregistered";
import FirstCampaign from "../pages/Dashboard/Campaigns/FirstCampaign";
import SideBar from "../pages/Dashboard/SideBar/maindashboard";
import MainDashBoard from "../pages/Dashboard/SideBar/maindashboard";
import CreateCampaign from "../pages/Dashboard/Campaigns/createCampaign";
import ActiveCampaign from "../pages/Dashboard/Campaigns/ActiveCampaign";
import Sidebar from "../pages/Dashboard/SideBar/sideBar";
import ProfileAndSettings from "../pages/Dashboard/Profile&settings/Profile&Settings";
import { useStoreState } from "../store/easy-peasy/hooks";
import CreateLoyalty from "../pages/Dashboard/Loyalty/CreateLoyalty";
import DrafteCampaigns from "../pages/Dashboard/Campaigns/DraftCampaigns";
import DraftCampaignList, { ActivevatedCampaignList } from "../pages/Dashboard/Campaigns/ListedCampaigns";


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
         <Route path="/signup" element={<SignupTest />} />
         <Route path="/login" element={<LoginTest />} />
         <Route path="/dashboard" element={<MainDashBoard />} />
         <Route path="/profile_and_settings_/:id" element={<ProfileAndSettings />} />
        {/* <Route path="/forgetPassword" element={<ForgetPassword />} /> */}
        <Route path="/forgetPassword" element={<ForgetPassWord />} />
        <Route path="/otpverification" element={<OtpVerification />} />
        <Route path="/registered" element={<SuccessfullyRegistered />} />
        <Route path="/createcampaign" element={<CreateCampaign />} />
        <Route path="/:id/draft_campaign" element={<DraftCampaignList />}/>
        <Route path="/:id/active_campaign" element={<ActivevatedCampaignList />}/>
        <Route path="/active-campaigns/:id" element={<ActiveCampaign />} />
        <Route path="/draft-campaigns/:id" element={<DrafteCampaigns />} />
        <Route path="/:id/createLoyalty" element={<CreateLoyalty />} />
        {/* <Route index element={<Overview />} /> */}
        <Route path="*" element={<Error />} />
      </Route>
    </Routes>
  );
};

export default Routing;
