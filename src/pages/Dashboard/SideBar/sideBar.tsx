import React from 'react'
const SideBarLogo = require("../../../images/sidebarlogo.png");
const loudSpeaker = require("../../../images/loudspeaker.png");
const plusSign = require("../../../images/plusSign.png");
const profileSetting = require("../../../images/profileSetting.png");

function SideBar() {
  return (
    <div
      className="min-h-screen w-1/5 flex flex-col items-center bg-white"
      style={{ borderRight: "1px solid #dbdbdb" }}
    >
      <div className="mt-12">
        <img src={SideBarLogo} />
      </div>
      <div className="mt-16">
        <div className="flex mb-6">
          <div className="mr-6">
            <img src={loudSpeaker} className="w-5 h-5" />
          </div>
          <div style={{'fontFamily':"Open Sans", fontSize:'16px',fontWeight:600}}>
            Campaigns
          </div>
        </div>
        <div className="flex mb-6">
          <div className="mr-6">
            <img src={plusSign} className="w-5 h-5" />
          </div>
          <div style={{'fontFamily':"Open Sans", fontSize:'16px',fontWeight:600}}>
          Add Campaign
          </div>
        </div>
        <div className="flex mb-6">
          <div className="mr-6">
            <img src={profileSetting} className="w-5 h-5" />
          </div>
          <div style={{'fontFamily':"Open Sans", fontSize:'16px',fontWeight:600}}>
          Profile & Settings
          </div>
        </div>
      </div>
    </div>
  )
}

export default SideBar