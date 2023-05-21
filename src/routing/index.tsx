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
import MainDashBoard from "../pages/Dashboard/SideBar/maindashboard";
import CreateCampaign from "../pages/Dashboard/Campaigns/createCampaign";
import ActiveCampaign from "../pages/Dashboard/Campaigns/ActiveCampaign";
import ProfileAndSettings from "../pages/Dashboard/Profile&settings/Profile&Settings";
import DrafteCampaigns from "../pages/Dashboard/Campaigns/DraftCampaigns";
import DraftCampaignList, { ActivevatedCampaignList, CompletedCampaignList } from "../pages/Dashboard/Campaigns/ListedCampaigns";
import CreateMilestoneReward from "../pages/Dashboard/Milestone Reward/CreateReward";
import DraftRewardList, { ActivevatedRewardList } from "../pages/Dashboard/Milestone Reward/ListedRewards";
import DraftedRewards from "../pages/Dashboard/Milestone Reward/DraftReward";
import ActivatedRewards from "../pages/Dashboard/Milestone Reward/ActiveRewards";
import AddBrands from "../pages/Dashboard/Brands/AddBrands";
import CompletedCampaigns from "../pages/Dashboard/Campaigns/CompletedCampaigns";
import { BrandList } from "../pages/Dashboard/Brands/BrandList";
import UpdateBrand from "../pages/Dashboard/Brands/BrandUpdate";


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
        <Route path="/:id/completed_campaign" element={<CompletedCampaignList />}/>
        <Route path="/active-campaigns/:id" element={<ActiveCampaign />} />
        <Route path="/draft-campaigns/:id" element={<DrafteCampaigns />} />
        <Route path="/completed-campaigns/:id" element={<CompletedCampaigns />} />

        <Route path="/:id/addBrand" element={<AddBrands />} />
        <Route path="/:id/BrandList" element={<BrandList />} />
        <Route path="/update_brand/:id" element={<UpdateBrand />} />
        
        <Route path="/draft-Rewards/:id" element={<DraftedRewards />} />
        <Route path="/active-Rewards/:id" element={<ActivatedRewards />} />
        <Route path="/:id/active_reward" element={<ActivevatedRewardList />} />
        <Route path="/:id/draft_reward" element={<DraftRewardList />} />
        <Route path="/:id/createMilestoneReward" element={<CreateMilestoneReward />} />
        {/* <Route index element={<Overview />} /> */}
        <Route path="*" element={<Error />} />
      </Route>
    </Routes>
  );
};

export default Routing;
