import React from "react";
const campaignLogo = require("../../images/campaignLogo.png");
const redPlus = require("../../images/redPlus.png");

function FirstCampaign() {
  return (
    <div className="w-full min-h-screen flex">
      <div className="flex flex-col justify-center items-center min-h-screen w-full">
        <div>
          <img src={campaignLogo} className="w-64 h-64" />
        </div>
        <div
          style={{
            fontFamily: "Open Sans",
            fontSize: "24px",
            fontWeight: 600,
            marginTop: "12px",
          }}
        >
          Start Your First Campaign
        </div>
        <div
          style={{
            marginTop: "12px",
            backgroundColor: "#fff",
            border: "1px dashed #FF6154",
            borderRadius: "4px",
            minWidth: "160px",
            height: "45px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            cursor:'pointer'
          }}
        >
          <div>
            <img src={redPlus} style={{ width: "18px", height: "18px" }} />
          </div>
          <div
            style={{
              color: "#FF6154",
              fontFamily: "Open Sans",
              fontSize: "16px",
              fontWeight: 600,
              marginLeft: "8px",
            }}
          >
            Add Campaign
          </div>
        </div>
      </div>
    </div>
  );
}

export default FirstCampaign;
