import { MenuItem, Modal, Select, Slider } from "@mui/material";
import {
  PieChart,
  Pie,
  Sector,
  Cell,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import React, { useEffect, useState } from "react";
import SideBar from "../SideBar/sideBar";
import { Link, useLocation, useParams } from "react-router-dom";
import { useQueries, useQuery } from "react-query";
import { queries, getRequest } from "../../../react-query";
import { useStoreState } from "../../../store/easy-peasy/hooks";
const iPhone = require("../../../images/iPhone.png");
const adPic = require("../../../images/adPic.png");
const editIcon = require("../../../images/editIcon.png");
const calenderImage = require("../../../images/calenderImage.png");
const india = require("../../../images/india.png");
const mobileAd = require("../../../images/mobileAd.png");
const dustbinIcon = require("../../../images/dustbin.png");
const pauseIcon = require("../../../images/pauseIcon.png");
const stopIcon = require("../../../images/stopIcon.png");

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

function Ad(props: any) {
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
      <div className="w-4/5 flex justify-center">
        <img src={iPhone} />
      </div>
    </div>
  );
}

const marks = [
  {
    value: 13,
    label: "13",
  },

  {
    value: 65,
    label: "65+",
  },
];

function Targetting(props: any) {
  const { campaign } = props;
  const [gender, setGender] = useState([]);
  const [billingcountry, setBillingCountry] = useState("");
  const [sliderValue, setSliderValue] = useState([13, 65]);
  const [keywords, setKeywords] = useState([]);
  const [donottarget, setDonotTarget] = useState([]);

  useEffect(() => {
    setGender(campaign.targetGender);
    setBillingCountry(campaign.billingCountry);
    setSliderValue([
      campaign?.targetAgeRange?.min as number,
      campaign?.targetAgeRange?.max as number,
    ]);
    setKeywords(campaign.targetKeywords);
    setDonotTarget(campaign.targetDonotKeywords);
  }, [campaign]);

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
            {gender?.map((val: any, index: any) => {
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
            {sliderValue && (
              <Slider
                size="medium"
                getAriaLabel={() => "Temperature range"}
                value={sliderValue}
                onChange={ChangeSlider}
                valueLabelDisplay="on"
                marks={marks}
                step={10}
                max={65}
                min={13}
              />
            )}
          </div>
        </div>
        <div className="w-full mb-3 mt-3">
          <div className="w-full flex items-center ">
            <div className="w-full mx-2 text-sm">Targeted Location</div>
            <div className="w-full flex justify-end mx-2">
              <img src={editIcon} className="w-3 h-3" />
            </div>
          </div>
          <div className="w-full mt-2 px-2 flex">{billingcountry}</div>
        </div>
        <div className="w-full mb-3 mt-4">
          <div className="w-full flex items-center ">
            <div className="w-full mx-2 text-sm">Keywords</div>
            <div className="w-full flex justify-end mx-2">
              <img src={editIcon} className="w-3 h-3" />
            </div>
          </div>
          <div className="w-full mt-2 px-2 flex">
            {keywords?.map((val: any, index: any) => {
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
            {donottarget?.map((val: any, index: any) => {
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
      <div className="w-4/5 flex justify-center">
        <img src={iPhone} />
      </div>
    </div>
  );
}

const COLORS = ["#67DF87", "#EEEEEE"];

function Settings(props: any) {
  const { campaign } = props;
  const [startDate, setStartDate] = useState(new Date(campaign?.adStartDate));
  const [numberofsignups, setNumberofsignups] = useState(
    campaign?.transactionCount
  );

  const data = [
    { name: "SignUps", value: campaign?.transactionCount },
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
                  {data?.map((entry, index) => (
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
            <div className="w-full text-md font-semibold">Billing Country</div>
            <div className="flex justify-end">
              <img src={editIcon} className="w-3 h-3" />
            </div>
          </div>
          <div className="w-full flex mt-3">
            <div className="w-full text-sm">{campaign?.billingCountry}</div>
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
            <div className="w-full text-md font-semibold">Type of Ad</div>
            <div className="flex justify-end">
              <img src={editIcon} className="w-3 h-3" />
            </div>
          </div>
          <div className="w-full flex mt-3">
            <div className="w-full text-sm">Mobile Advertising</div>
            <div className="w-full flex items-center justify-center">
              <img src={mobileAd} className="w-24" />
            </div>
          </div>
        </div>
      </div>
      <div className="w-4/5 flex justify-center">
        <img src={iPhone} />
      </div>
    </div>
  );
}

function Preview(props: any) {
  const { campaign, setEditTab } = props;

  return (
    <div className="w-1/2 ml-4 rounded-lg bg-white mt-5 pb-4">
      <div
        className=" h-12 flex items-center pl-4 pr-4 text-xs"
        style={{ borderBottom: "1px solid #F6F8FA" }}
      >
        Preview
      </div>
      <div className=" flex">
        <div className="w-full">
          <div className=" m-5 border border-gray-200 rounded-md mt-4 mb-4 pb-4">
            <div
              className="h-10 flex items-center pl-4 text-sm"
              style={{ borderBottom: "1px solid #EEEEEE" }}
            >
              Add Goal
            </div>
            <div className=" mt-4 pl-4">
              <div className="w-full flex">
                <div className="w-1/3 text-xs">Ad Title:</div>
                <div className="w-full text-xs text-gray-400">
                  {campaign?.data[0]?.adTitle}
                </div>
              </div>
              <div className="w-full flex">
                <div className="w-1/3 text-xs">Ad Type:</div>
                <div className="w-full text-xs text-gray-400">
                  {campaign?.data[0]?.campaignType}
                </div>
              </div>
              <div className="w-full flex mt-1">
                <div className="w-1/3 text-xs">Category:</div>
                <div className="w-full text-xs text-gray-400">
                  {campaign?.data[0]?.targetCategory}
                </div>
              </div>
              <div className="w-full flex mt-1">
                <div className="w-1/3 text-xs">Sub Category:</div>
                <div className="w-full text-xs text-gray-400">
                  {campaign?.data[0]?.targetSubCategory}
                </div>
              </div>
              <div className="w-full flex mt-1">
                <div className="w-1/3 text-xs">Headline:</div>
                <div className="w-full text-xs text-gray-400">
                  {campaign?.data[0]?.adTitle}
                </div>
              </div>
              <div className="w-full flex mt-1">
                <div className="w-1/3 flex items-center text-xs">Image:</div>
                <div className="w-full items-center flex text-xs text-gray-400">
                  {campaign?.data[0]?.adImage?.map(
                    (val: any, index: number) => {
                      return (
                        <div className="m-2" key={index}>
                          <img src={val} className="h-12 w-12" />
                        </div>
                      );
                    }
                  )}
                </div>
              </div>
              <div className="w-full flex mt-1">
                <div className="w-1/3 text-xs">Description:</div>
                <div className="w-full text-xs text-gray-400">
                  {campaign?.data[0]?.adDesc}
                </div>
              </div>
            </div>
          </div>
          <div className=" m-5 border border-gray-200 rounded-md mt-4 mb-4 b-4 pb-4">
            <div
              className="w-full h-10 flex items-center pl-4 text-sm"
              style={{ borderBottom: "1px solid #EEEEEE" }}
            >
              Targeting
            </div>
            <div className="w-full mt-4 pl-4">
              <div className="w-full flex">
                <div className="w-1/3 text-xs">Gender:</div>
                <div className="w-full text-xs flex text-gray-400">
                  {campaign?.data[0]?.targetGender?.map(
                    (val: any, index: any) => {
                      return (
                        <div className=" mr-2" key={index}>
                          {val}
                          {index < campaign?.data[0]?.targetGender?.length - 1
                            ? ","
                            : ""}
                        </div>
                      );
                    }
                  )}
                </div>
              </div>
              <div className="w-full flex mt-1">
                <div className="w-1/3 text-xs">Age Range:</div>
                <div className="w-full text-xs text-gray-400">
                  {campaign?.data[0]?.targetAgeRange.min}
                  {" - "}
                  {campaign?.data[0]?.targetAgeRange.max}
                </div>
              </div>
              <div className="w-full flex mt-1">
                <div className="w-1/3 text-xs">Keywords:</div>
                <div className="w-full text-xs text-gray-400 flex">
                  {campaign?.data[0]?.targetKeywords.map(
                    (data: any, index: number) => {
                      return (
                        <div className="mr-2" key={index}>
                          {data}
                          {index < campaign?.data[0]?.targetKeywords.length - 1
                            ? ","
                            : ""}
                        </div>
                      );
                    }
                  )}
                </div>
              </div>
              <div className="w-full flex mt-1">
                <div className="w-1/3 text-xs">Do Not Target:</div>

                <div className="w-full text-xs text-gray-400 flex">
                  {campaign?.data[0]?.targetDonotKeywords.map(
                    (data: any, index: number) => {
                      return (
                        <div className="mr-2" key={index}>
                          {data}
                          {index <
                          campaign?.data[0]?.targetDonotKeywords.length - 1
                            ? ","
                            : ""}
                        </div>
                      );
                    }
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="m-5 border border-gray-200 rounded-md mt-4 mb-4 pb-4">
            <div
              className="w-full h-10 flex items-center pl-4 text-sm"
              style={{ borderBottom: "1px solid #EEEEEE" }}
            >
              Settings
            </div>
            <div className="w-full mt-4 pl-4">
              <div className="w-full flex">
                <div className="w-1/3 text-xs">Start Date:</div>
                <div className="w-full text-xs text-gray-400">
                  {campaign?.data[0]?.adStartDate}
                </div>
              </div>
              <div className="w-full flex">
                <div className="w-1/3 text-xs">End Date:</div>
                <div className="w-full text-xs text-gray-400">
                  {campaign?.data[0]?.adEndDate}
                </div>
              </div>
              <div className="w-full flex mt-1">
                <div className="w-1/3 text-xs">Number of Signups:</div>
                <div className="w-full text-xs text-gray-400">
                  {campaign?.data[0]?.transactionCount}
                </div>
              </div>
              <div className="w-full flex mt-1">
                <div className="w-1/3 text-xs">Country:</div>
                <div className="w-full text-xs text-gray-400 flex">
                  {campaign?.data[0]?.billingCountry}
                </div>
              </div>
            </div>
          </div>
          <div className=" ml-3 flex items-center mt-2 ">
            <div className="w-full flex justify-start pr-10">
              <button className="w-16 ml-4 bg-blue-500 h-8 text-white rounded-sm hover:bg-blue-400">
                <Link to={`/draft_campaign`}>Back</Link>
              </button>
            </div>
            <div className="w-full flex justify-end pr-10">
              <button
                className="w-16 ml-4 bg-blue-500 h-8 text-white rounded-sm hover:bg-blue-400"
                onClick={() => {
                  setEditTab(true);
                }}
              >
                Edit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ActiveCampaign() {
  const [switchTab, setSwitchTab] = useState(2);
  const { id } = useParams();
  const [editTab, setEditTab] = useState(false);
  const [openClose, setOpenClose] = useState(false);
  const handleOpenClose = () => setOpenClose(true);
  const handleClose = () => setOpenClose(false);

  const [openSave, setOpenSave] = useState(false);
  const handleOpenSave = () => setOpenSave(true);
  const handleSave = () => setOpenSave(false);

  const user = useStoreState((store) => store.user);
  const { data: campaign, isLoading } = useQuery(
    [queries.campaigns, id, user],
    () =>
      getRequest(
        `/campaign?campaignId=${id}&advertiserId=${user.id}`,
        user.token
      ),
    {
      enabled: !!id || !!user,
    }
  );

  return (
    <div className="flex h-1/2 w-full " style={{ backgroundColor: "#F6F8FA" }}>
      <SideBar />
      {editTab === false && (
        <Preview campaign={campaign} setEditTab={setEditTab} />
      )}
      {editTab === true && (
        <div className="w-full pt-4 px-4">
          <div className="w-full flex rounded-lg bg-white">
            <div className="w-full h-12 flex items-center  pl-4 font-bold text-xl">
              {campaign?.data[0]?.campaignName}
            </div>
            <div className="w-full flex justify-end items-center pr-8">
              <img src={pauseIcon} className="w-3 h-4 mx-2 cursor-pointer" />
              <img src={stopIcon} className="w-4 h-4 mx-2 cursor-pointer" />
              <img src={dustbinIcon} className="w-4 h-4 mx-2 cursor-pointer" />
            </div>
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
          {switchTab === 2 && <Ad campaign={campaign?.data[0]} />}
          {switchTab === 3 && <Targetting campaign={campaign?.data[0]} />}
          {switchTab === 4 && <Settings campaign={campaign?.data[0]} />}
          <div className="w-3/4 flex justify-start mb-4">
            <button
              className="px-4 bg-blue-500 h-8 text-white rounded-sm hover:bg-blue-400"
              onClick={handleOpenClose}
            >
              Cancel
            </button>
            <Modal
              className="w-full h-full flex justify-center items-center"
              open={openClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <div className="w-1/4 h-24 bg-white rounded flex flex-col justify-center items-center">
                <div> Do you want to cancel the changes ?</div>
                <div className="w-full flex justify-center mt-3">
                  <button className="px-4 bg-green-500 h-8 text-white rounded-sm hover:bg-green-400 ml-3">
                    <Link to="/draft_campaign">Yes</Link>
                  </button>
                  <button
                    className="px-4 bg-orange-500 h-8 text-white rounded-sm hover:bg-orange-400 ml-3"
                    onClick={handleClose}
                  >
                    No
                  </button>
                </div>
              </div>
            </Modal>
            <button
              className="px-4 bg-blue-500 h-8 text-white rounded-sm hover:bg-blue-400 ml-3"
              onClick={handleOpenSave}
            >
              Save
            </button>
            <Modal
              className="w-full h-full flex justify-center items-center"
              open={openSave}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <div className="w-1/4 h-24 bg-white rounded flex flex-col justify-center items-center">
                <div> Do you want to save the changes ?</div>
                <div className="w-full flex justify-center mt-3">
                  <button className="px-4 bg-green-500 h-8 text-white rounded-sm hover:bg-green-400 ml-3">
                    Yes
                  </button>
                  <button
                    className="px-4 bg-orange-500 h-8 text-white rounded-sm hover:bg-orange-400 ml-3"
                    onClick={handleSave}
                  >
                    No
                  </button>
                </div>
              </div>
            </Modal>
          </div>
        </div>
      )}
    </div>
  );
}

export default ActiveCampaign;
