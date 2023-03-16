import React from "react";
import FirstCampaign from "../CreateCampaign/FirstCampaign";
import SideBar from "./sideBar";

// const SideBarLogo = require("../../../images/sidebarlogo.png");
// const loudSpeaker = require("../../../images/loudspeaker.png");
// const plusSign = require("../../../images/plusSign.png");
// const profileSetting = require("../../../images/profileSetting.png");

function MainDashBoard() {
  return (
    <div className="flex min-h-screen w-full " style={{'backgroundColor': '#F6F8FA'}}>
    <SideBar/>
    <div className="w-full flex items-center" style={{'backgroundColor': '#F6F8FA'}}>
        <FirstCampaign />
    </div>
    </div>
  );
}

export default MainDashBoard;
