import { MenuItem, Select, Slider } from "@mui/material";
import { PieChart, Pie, Sector, Cell, ResponsiveContainer,Tooltip } from "recharts";
import React, { useState } from "react";
import SideBar from "../SideBar/sideBar";
import { useLocation } from "react-router-dom";
const iPhone = require("../../../images/iPhone.png");
const adPic = require("../../../images/adPic.png");
const editIcon = require("../../../images/editIcon.png");
const calenderImage = require("../../../images/calenderImage.png");
const india = require("../../../images/india.png");
const mobileAd = require("../../../images/mobileAd.png");

const avniData = JSON.parse(localStorage.getItem("avniInfo") as string);

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

function Ad() {
  return (
    <div className="w-full rounded-sm flex">
      <div className="w-full p-2 rounded-sm">
        <div className="bg-white p-2 rounded-sm">
          <img src={adPic} />
          <div className="mt-3 text-sm">Order Above Rs.500 and get 50% off</div>
          <div className="mt-3 text-xs text-gray-300">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page editors now use Lorem Ipsum as their default
            model text, and a search for 'lorem ipsum' will uncover many web
            sites still in their infancy. Various versions have evolved over the
            years, sometimes by accident, sometimes on purpose (injected humour
            and the like).
          </div>
          <div className="w-full flex mt-4">
            <div className="w-full flex items-center text-green-400 font-semibold text-xs">
              +20$ AVNI
            </div>
            <div className="w-full flex justify-end text-xs">
              <button className="px-3 py-2 bg-yellow-400 rounded-md flex items-center">
                <img src={editIcon} className="mr-2 w-3 h-3" />
                Edit
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center">
        <img src={iPhone} />
      </div>
    </div>
  );
}

const marks = [
  {
    value: 0,
    label: "0",
  },

  {
    value: 100,
    label: "100",
  },
];

function Targetting() {
  const [gender, setGender] = useState(avniData.gender);
  const [billingcountry, setBillingCountry] = useState(avniData.billingcountry);
  const [sliderValue, setSliderValue] = React.useState(avniData.agerange);
  const [keywords, setKeywords] = useState(avniData.keywords);
  const [donottarget, setDonotTarget] = useState(avniData.donottarget);

  const ChangeSlider = (event: any, newValue: any) => {
    setSliderValue(newValue);
  };

  const [adValue, setAdValue] = useState("");
  const handleChange = (event: any) => {
    setAdValue(event.target.value);
  };

  return (
    <div className="w-full flex">
      <div
        className="bg-white h-1/2 p-2 w-full"
        style={{ borderRadius: "6px" }}
      >
        <div className="w-full mb-3 mt-2">
          <div className="w-full flex items-center ">
            <div className="w-full mx-2 text-sm">Gender Type</div>
            <div className="w-full flex justify-end mx-2">
              <img src={editIcon} className="w-3 h-3" />
            </div>
          </div>
          <div className="w-full mt-2 px-2 flex">
            {gender.map((val: any, index: any) => {
              return (
                <div
                  key={index}
                  className="border border-gray-300 text-gray-300 rounded-md px-3 py-1 text-xs mr-3"
                >
                  {val}
                </div>
              );
            })}
          </div>
        </div>
        <div className="w-full mb-3 mt-4">
          <div className="w-full flex items-center ">
            <div className="w-full mx-2 text-sm">Age Range</div>
            <div className="w-full flex justify-end mx-2">
              <img src={editIcon} className="w-3 h-3" />
            </div>
          </div>
          <div className="w-full mt-10 px-2">
            <Slider
              size="small"
              getAriaLabel={() => "Temperature range"}
              value={sliderValue}
              onChange={ChangeSlider}
              valueLabelDisplay="on"
              marks={marks}
            />
          </div>
        </div>
        <div className="w-full mb-3 mt-3">
          <div className="w-full flex items-center ">
            <div className="w-full mx-2 text-sm">Targeted Location</div>
            <div className="w-full flex justify-end mx-2">
              <img src={editIcon} className="w-3 h-3" />
            </div>
          </div>
          <div className="w-full mt-2 px-2 flex">
            {billingcountry.map((val: any, index: any) => {
              return (
                <div
                  key={index}
                  className="border border-yellow-400 text-black rounded-md px-3 py-1 text-xs mr-3"
                >
                  {val}
                </div>
              );
            })}
          </div>
        </div>
        <div className="w-full mb-3 mt-4">
          <div className="w-full flex items-center ">
            <div className="w-full mx-2 text-sm">Keywords</div>
            <div className="w-full flex justify-end mx-2">
              <img src={editIcon} className="w-3 h-3" />
            </div>
          </div>
          <div className="w-full mt-2 px-2 flex">
            {keywords.map((val: any, index: any) => {
              return (
                <div
                  key={index}
                  className="border border-blue-300 text-black rounded-md px-3 py-1 text-xs mr-3"
                >
                  {val}
                </div>
              );
            })}
          </div>
        </div>
        <div className="w-full mb-3 mt-4">
          <div className="w-full flex items-center ">
            <div className="w-full mx-2 text-sm">Do Not Target</div>
            <div className="w-full flex justify-end mx-2">
              <img src={editIcon} className="w-3 h-3" />
            </div>
          </div>
          <div className="w-full mt-2 px-2 flex">
            {donottarget.map((val: any, index: any) => {
              return (
                <div
                  key={index}
                  className="border border-red-300 text-black rounded-md px-3 py-1 text-xs mr-3"
                >
                  {val}
                </div>
              );
            })}
          </div>
        </div>
        <div className="w-full mb-3 mt-4">
          <div className="w-full flex items-center ">
            <div className="w-full mx-2 text-sm">Category</div>
            <div className="w-full flex justify-end mx-2">
              <img src={editIcon} className="w-3 h-3" />
            </div>
          </div>
          <div className="w-full mt-2 px-2 flex">
            <Select
              className="w-3/4"
              size="small"
              style={{ fontSize: "14px" }}
              value={adValue}
              onChange={handleChange}
            >
              <MenuItem value={10} style={{ fontSize: "14px" }}>
                Ten
              </MenuItem>
              <MenuItem value={20} style={{ fontSize: "14px" }}>
                Twenty
              </MenuItem>
              <MenuItem value={30} style={{ fontSize: "14px" }}>
                Thirty
              </MenuItem>
            </Select>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center">
        <img src={iPhone} />
      </div>
    </div>
  );
}


const COLORS = ["#67DF87", "#EEEEEE"];

function Settings() {
  const [startDate, setStartDate] = useState(new Date(avniData.startdate));
  const [numberofsignups, setNumberofsignups] = useState(
    avniData.numberofsignups
  );

  const data = [
    { name: "SignUps", value: 78 },
    { name: "Not SignUps", value: 22 },
  ];

  return (
    <div className="w-full flex pb-4">
      <div className="w-full">
        <div
          className="bg-white mt-3 p-2 w-2/3"
          style={{ borderRadius: "6px" }}
        >
          <div className="w-full flex items-center">
            <div className="w-full text-md font-semibold">Date</div>
            <div className="w-full flex justify-end">
              <img src={editIcon} className="w-3 h-3" />
            </div>
          </div>
          <div className="w-full flex mt-3">
            <div className="w-full text-xs text-gray-500">
              {startDate.getDate()} {months[startDate.getMonth()]}
              {", "}
              {startDate.getFullYear()}
            </div>
            <div className="w-full flex items-center justify-center">
              <img src={calenderImage} className="w-28" />
            </div>
          </div>
        </div>

        <div
          className="bg-white mt-3 p-2 w-2/3"
          style={{ borderRadius: "6px" }}
        >
          <div className="w-full flex items-center">
            <div className="w-full text-md font-semibold">
              Number of SignUps
            </div>
            <div className="flex justify-end">
              <img src={editIcon} className="w-3 h-3" />
            </div>
          </div>
          <div className="w-full flex mt-3">
            <div className="w-full text-sm">
              {numberofsignups} {" SignUps"}
            </div>
            <div className="w-full flex items-center justify-center">
              <PieChart width={150} height={90}>
                <Pie
                  data={data}
                  cx={80}
                  cy={40}
                  innerRadius={30}
                  outerRadius={45}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {data.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </div>
          </div>
        </div>

        <div
          className="bg-white mt-3 p-2 w-2/3"
          style={{ borderRadius: "6px" }}
        >
          <div className="w-full flex items-center">
            <div className="w-full text-md font-semibold">
            Billing Country
            </div>
            <div className="flex justify-end">
              <img src={editIcon} className="w-3 h-3" />
            </div>
          </div>
          <div className="w-full flex mt-3">
            <div className="w-full text-sm">
              {"India"}
            </div>
            <div className="w-full flex items-center justify-center">
              <img src={india} className="w-20" />
            </div>
          </div>
        </div>

        <div
          className="bg-white mt-3 p-2 w-2/3"
          style={{ borderRadius: "6px" }}
        >
          <div className="w-full flex items-center">
            <div className="w-full text-md font-semibold">
            Type of Ad
            </div>
            <div className="flex justify-end">
              <img src={editIcon} className="w-3 h-3" />
            </div>
          </div>
          <div className="w-full flex mt-3">
            <div className="w-full text-sm">
             Mobile Advertising
            </div>
            <div className="w-full flex items-center justify-center">
              <img src={mobileAd} className="w-24" />
            </div>
          </div>
        </div>

      </div>
      <div className="w-full flex justify-center">
        <img src={iPhone} />
      </div>
    </div>
  );
}

function CreatedCampaign() {
  const [switchTab, setSwitchTab] = useState(2);
  
  return (
    <div className="flex h-1/2 w-full " style={{ backgroundColor: "#F6F8FA" }}>
      <SideBar />
      <div className="w-full pt-4 px-4">
        <div className="w-full h-12 flex items-center rounded-lg bg-white pl-4 font-bold text-xl">
          Coffee
        </div>
        <div className="w-full mt-2 mb-2 flex items-center rounded-lg bg-white cursor-pointer text-xs">
          <div
            className=" flex items-center justify-center text-xs h-8 rounded-md mr-4 px-3"
            style={{ backgroundColor: switchTab === 1 ? "#01A4EF" : "#fff" }}
            onClick={() => {
              setSwitchTab(1);
            }}
          >
            Performance
          </div>
          <div
            className=" flex items-center justify-center text-xs h-8 rounded-md cursor-pointer mr-4 px-3"
            style={{ backgroundColor: switchTab === 2 ? "#01A4EF" : "#fff" }}
            onClick={() => {
              setSwitchTab(2);
            }}
          >
            Ad
          </div>
          <div
            className=" flex items-center justify-center text-xs h-8 rounded-md cursor-pointer mr-4 px-3"
            style={{ backgroundColor: switchTab === 3 ? "#01A4EF" : "#fff" }}
            onClick={() => {
              setSwitchTab(3);
            }}
          >
            Targetting
          </div>
          <div
            className=" flex items-center justify-center text-xs h-8 rounded-md cursor-pointer mr-4 px-3"
            style={{ backgroundColor: switchTab === 4 ? "#01A4EF" : "#fff" }}
            onClick={() => {
              setSwitchTab(4);
            }}
          >
            Settings
          </div>
        </div>
        {switchTab === 2 && <Ad />}
        {switchTab === 3 && <Targetting />}
        {switchTab === 4 && <Settings />}
      </div>
    </div>
  );
}

export default CreatedCampaign;
