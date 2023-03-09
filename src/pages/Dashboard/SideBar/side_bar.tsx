import React from "react";
import FirstCampaign from "../FirstCampaign";

const SideBarLogo = require("../../../images/sidebarlogo.png");
const loudSpeaker = require("../../../images/loudspeaker.png");
const plusSign = require("../../../images/plusSign.png");
const profileSetting = require("../../../images/profileSetting.png");

function MainDashBoard() {
  return (
    <div className="flex min-h-screen w-full ">
    <div
      className="min-h-screen w-1/5 flex flex-col items-center"
      style={{ borderRight: "1px solid #dbdbdb" }}
    >
      <div className="mt-20">
        <img src={SideBarLogo} />
      </div>
      <div className="mt-16">
        <div className="flex mb-6">
          <div className="mr-6">
            <img src={loudSpeaker} className="w-5 h-5" />
          </div>
          <div style={{'fontFamily':"Open Sans", fontSize:'20px'}}>
            Campaigns
          </div>
        </div>
        <div className="flex mb-6">
          <div className="mr-6">
            <img src={plusSign} className="w-5 h-5" />
          </div>
          <div style={{'fontFamily':"Open Sans", fontSize:'20px'}}>
          Add Campaign
          </div>
        </div>
        <div className="flex mb-6">
          <div className="mr-6">
            <img src={profileSetting} className="w-5 h-5" />
          </div>
          <div style={{'fontFamily':"Open Sans", fontSize:'20px'}}>
          Profile & Settings
          </div>
        </div>
      </div>
    </div>
    <div className="w-full flex items-center" style={{'backgroundColor': '#F6F8FA'}}>
        <FirstCampaign />
    </div>
    </div>
  );
}

export default MainDashBoard;
