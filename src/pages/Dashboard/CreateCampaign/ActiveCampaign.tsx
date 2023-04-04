import { MenuItem, Modal, Select, Slider, TextField } from "@mui/material";
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
import DatePicker from "react-datepicker";
import { Link, useLocation, useParams } from "react-router-dom";
import { useQueries, useQuery } from "react-query";
import { queries, getRequest } from "../../../react-query";
import { useStoreState } from "../../../store/easy-peasy/hooks";
import { CategoryOptions } from "./options";
import { regex } from "../../signupTest";
import { country_list } from "./createCampaign";
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

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

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
  const [keywords, setKeywords] = useState("");
  const [donotTarget, setDonotTarget] = useState("");
  const [donotTargetArray, setDonotTargetArray] = useState<string[]>([]);
  const [keywordsArray, setKeywordsArray] = useState<string[]>([]);
  const [category, setCategory] = useState([]);
  const [subcategory, setSubCategory] = useState({
    label: [],
    arrayOpions: [],
  });

  const changeGender = (event: any) => {
    const {
      target: { value },
    } = event;
    setGender(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };
  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };

  useEffect(() => {
    setGender(campaign.targetGender);
    setBillingCountry(campaign.billingCountry);
    setSliderValue([
      campaign?.targetAgeRange?.min as number,
      campaign?.targetAgeRange?.max as number,
    ]);
    setKeywordsArray(campaign.targetKeywords);
    setDonotTargetArray(campaign.targetDonotKeywords);
    setCategory(campaign.targetCategory);
    setSubCategory({
      ...subcategory,
      label: [campaign.targetSubCategory] as any,
    });

    CategoryOptions.map((data: any, index: any) => {
      if (data.label === campaign.targetCategory) {
        setSubCategory({
          ...subcategory,
          arrayOpions: data.values,
        });
      }
    });
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
            {/* <div className="w-full flex justify-end mx-2">
              <img src={editIcon} className="w-3 h-3" />
            </div> */}
          </div>
          {/* <div className="w-full mt-2 px-2 flex">
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
          </div> */}
          <div className="mt-2 w-full">
            <Select
              className="w-full h-10"
              style={{ fontSize: "14px" }}
              value={gender}
              onChange={changeGender}
              MenuProps={MenuProps}
              multiple
            >
              <MenuItem value="Male" style={{ fontSize: "14px" }}>
                Male
              </MenuItem>
              <MenuItem value="Female" style={{ fontSize: "14px" }}>
                Female
              </MenuItem>
              <MenuItem value="Other" style={{ fontSize: "14px" }}>
                Other
              </MenuItem>
            </Select>
          </div>
        </div>
        <div className="w-full mb-3 mt-4">
          <div className="w-full flex items-center ">
            <div className="w-full mx-2 text-sm">Age Range</div>
            {/* <div className="w-full flex justify-end mx-2">
              <img src={editIcon} className="w-3 h-3" />
            </div> */}
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
            {/* <div className="w-full flex justify-end mx-2">
              <img src={editIcon} className="w-3 h-3" />
            </div> */}
          </div>
          <div className="w-full mt-2 px-2 flex">{billingcountry}</div>
        </div>
        {/* <div className="w-full mb-3 mt-4">
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
        </div> */}
        <div className="w-full p-1 border border-blue-400 rounded mt-4">
          <div className="w-full border border-gray-500 rounded p-1">
            <div className=" w-full">
              <TextField
                variant="standard"
                InputLabelProps={{
                  shrink: true,
                }}
                label="Keywords"
                value={keywords}
                size="small"
                className="w-full"
                onChange={(e: any) => {
                  setKeywords(e.target.value);
                }}
                onKeyUp={(e: any) => {
                  if (e.keyCode === 13) {
                    if (keywords !== "") {
                      setKeywordsArray([...keywordsArray, keywords]);
                    }
                    setKeywords("");
                  }
                }}
              />
            </div>

            <div className="w-full mt-2 mb-2 flex flex-wrap">
              {keywordsArray.map((data: any, index: any) => {
                if (data !== "") {
                  return (
                    <div
                      key={index}
                      className="bg-blue-100 text-blue-500 text-xs p-2 font-semibold m-1 rounded-sm flex items-center justify-center h-5"
                    >
                      {data}
                      <div
                        className="ml-3 text-blue-500 cursor-pointer"
                        onClick={() => {
                          setKeywordsArray([
                            ...keywordsArray.slice(0, index),
                            ...keywordsArray.slice(
                              index + 1,
                              keywordsArray.length
                            ),
                          ]);
                        }}
                      >
                        &#10006;
                      </div>
                    </div>
                  );
                }
              })}
            </div>
          </div>
        </div>
        {/* <div className="w-full mb-3 mt-4">
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
        </div> */}
        <div className="w-full p-1 border border-blue-400 rounded mt-4">
          <div className="w-full border border-gray-500 rounded p-1">
            <div className="w-full flex">
              {/* <div className="w-full text-sm font-semibold">
                    Do not Target
                  </div> */}
            </div>
            <div className="mt-2 w-full">
              <TextField
                variant="standard"
                InputLabelProps={{
                  shrink: true,
                }}
                label="Do not target"
                size="small"
                value={donotTarget}
                className="w-full"
                onChange={(e: any) => {
                  setDonotTarget(e.target.value);
                }}
                onKeyUp={(e: any) => {
                  if (e.keyCode === 13) {
                    if (donotTarget !== "") {
                      setDonotTargetArray([...donotTargetArray, donotTarget]);
                    }
                    setDonotTarget("");
                  }
                }}
              />
            </div>

            <div className="mt-2 mb-2 flex w-full flex-wrap">
              {donotTargetArray.map((data: any, index: any) => {
                if (data !== "") {
                  return (
                    <div
                      key={index}
                      className="bg-blue-100 text-blue-500 text-xs p-2 font-semibold mx-1 my-1 rounded-sm flex items-center justify-center h-5"
                    >
                      {data}
                      <div
                        className="ml-3 text-blue-500 cursor-pointer"
                        onClick={() => {
                          setDonotTargetArray([
                            ...donotTargetArray.slice(0, index),
                            ...donotTargetArray.slice(
                              index + 1,
                              donotTargetArray.length
                            ),
                          ]);
                        }}
                      >
                        &#10006;
                      </div>
                    </div>
                  );
                }
              })}
            </div>
          </div>
        </div>
        {/* <div className="w-full mb-3 mt-4">
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
        </div> */}

        <div className="w-full">
          <div className="w-full mt-4 flex">
            <div className="text-sm font-semibold">Category</div>
          </div>
          <div className="mt-2 w-full">
            <Select
              className="w-full h-10"
              style={{ fontSize: "14px" }}
              MenuProps={MenuProps}
              value={category}
              onChange={(e: any) => {
                setCategory([e.target.value] as any);
                CategoryOptions.map((data: any, index: any) => {
                  if (data.label === e.target.value) {
                    setSubCategory({
                      ...subcategory,
                      arrayOpions: data.values,
                    });
                  }
                });
              }}
            >
              {CategoryOptions.map((data: any, index: number) => {
                return (
                  <MenuItem value={data.label} style={{ fontSize: "14px" }}>
                    {data.label}
                  </MenuItem>
                );
              })}
            </Select>
          </div>
        </div>
        <div className="w-full">
          <div className="w-full mt-4 flex">
            <div className="text-sm font-semibold">Sub Category</div>
          </div>
          <div className="mt-2 w-full">
            <Select
              className="w-full h-10"
              style={{ fontSize: "14px" }}
              value={subcategory.label}
              MenuProps={MenuProps}
              onChange={(e: any) => {
                setSubCategory({
                  ...subcategory,
                  label: [e.target.value] as any,
                });
              }}
            >
              {subcategory.arrayOpions.length > 0 &&
                subcategory.arrayOpions.map((data: any, index: number) => {
                  return (
                    <MenuItem value={data} style={{ fontSize: "14px" }}>
                      {data}
                    </MenuItem>
                  );
                })}
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
  const [startDate, setStartDate] = useState(campaign?.adStartDate);
  const [endDate, setEndDate] = useState(campaign?.adEndDate);
  const [numberofsignups, setNumberofsignups] = useState(
    campaign?.transactionCount
  );
  const [country, setCountry] = useState(campaign?.billingCountry);
  const [numberOfSignups, setNumberOfSignups] = useState(campaign?.transactionCount);

  // const data = [
  //   { name: "SignUps", value: campaign?.transactionCount },
  //   { name: "Not SignUps", value: 22 },
  // ];
  const [errorMessageOne, setErrorMessageOne] = useState({
    isRequired: "Value is Required",
    isEndDate: "End date should be greated than start date",
    isMaxImage: "Maximum 5 images can be uploaded",
  });
  const [showErrorMessage, setShowErrorMessage] = useState({
    one: false,
    two: false,
    three: false,
    four: false,
    five: false,
  });
  const SelectCountry = (event: any) => {
    setCountry(event.target.value);
  };

  return (
    <div className="w-full flex pb-4">
       <div className="w-full">
              <div className="w-full pl-4">
                <div className="mt-2 w-full flex">
                  <div className="w-full mr-3">
                    <div className="w-full mb-2 text-sm font-semibold">
                      Start Date
                    </div>
                    
                    <DatePicker
                      placeholderText="mm/dd/yy"
                      value={startDate}
                      onChange={(e: any) => {
                        setStartDate(
                          `${new Date(e).getMonth() + 1}/${new Date(
                            e
                          ).getDate()}/${new Date(e).getFullYear()}`
                        );
                        if (endDate.length > 1) {
                          if (
                            new Date(
                              `${new Date(e).getMonth() + 1}/${new Date(
                                e
                              ).getDate()}/${new Date(e).getFullYear()}`
                            ).getTime() <= new Date(endDate).getTime()
                          ) {
                            setShowErrorMessage({
                              ...showErrorMessage,
                              four: false,
                            });
                          } else {
                            setShowErrorMessage({
                              ...showErrorMessage,
                              four: true,
                            });
                          }
                        }
                      }}
                      minDate={new Date()}
                      className="border w-full h-10 pl-4 rounded"
                    />

                    {!regex.test(startDate) &&
                      showErrorMessage.three === true && (
                        <div className="w-full text-xs font-semibold text-red-500 mt-1">
                          {errorMessageOne.isRequired}
                        </div>
                      )}
                  </div>
                  <div className="w-full ml-2">
                    <div className="w-full mb-2 text-sm font-semibold">
                      End Date
                    </div>
                    <DatePicker
                      value={endDate}
                      minDate={new Date()}
                      placeholderText="mm/dd/yy"
                      className="border w-full h-10 pl-4 border-gray-300 rounded"
                      onChange={(e: any) => {
                        setEndDate(
                          `${new Date(e).getMonth() + 1}/${new Date(
                            e
                          ).getDate()}/${new Date(e).getFullYear()}`
                        );
                        if (
                          new Date(startDate).getTime() <=
                          new Date(
                            `${new Date(e).getMonth() + 1}/${new Date(
                              e
                            ).getDate()}/${new Date(e).getFullYear()}`
                          ).getTime()
                        ) {
                          setShowErrorMessage({
                            ...showErrorMessage,
                            four: false,
                          });
                        } else {
                          setShowErrorMessage({
                            ...showErrorMessage,
                            four: true,
                          });
                        }
                      }}
                    />
                    {!regex.test(endDate) &&
                      showErrorMessage.three === true && (
                        <div className="w-full text-xs font-semibold text-red-500 mt-1">
                          {errorMessageOne.isRequired}
                        </div>
                      )}
                    {showErrorMessage.four === true && regex.test(endDate) && (
                      <div className="w-full text-xs font-semibold text-red-500 mt-1">
                        {errorMessageOne.isEndDate}
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div className="w-full pl-4">
                <div className="w-full mt-4 flex">
                  <div className="w-full text-sm font-semibold">
                    Number of Signups
                  </div>
                </div>
                <div className="mt-2 w-full">
                  <TextField
                    value={numberOfSignups}
                    size="small"
                    className="w-full bg-white"
                    type="number"
                    onChange={(e: any) => {
                      setNumberOfSignups(e.target.value);
                    }}
                  />
                </div>
                {numberOfSignups === "" && showErrorMessage.three === true && (
                  <div className="w-full text-xs font-semibold text-red-500 mt-1">
                    {errorMessageOne.isRequired}
                  </div>
                )}
              </div>

              <div className="w-full pl-4">
                <div className="w-full mt-4 flex">
                  <div className="w-full text-sm font-semibold">
                    Biling Country
                  </div>
                </div>
                <div className="mt-2 w-full">
                  <Select
                    value={country}
                    onChange={SelectCountry}
                    className="w-full bg-white"
                    size="small"
                    MenuProps={MenuProps}
                  >
                    {country_list.map((data: any, index: number) => {
                      return (
                        <MenuItem value={data} key={index}>
                          {data}
                        </MenuItem>
                      );
                    })}
                  </Select>{" "}
                </div>
                {country.length === 0 && showErrorMessage.three === true && (
                  <div className="w-full text-xs font-semibold text-red-500 mt-1">
                    {errorMessageOne.isRequired}
                  </div>
                )}
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
              <div className="w-3/4 flex justify-end mr-4">
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
        </div>
      )}
    </div>
  );
}

export default ActiveCampaign;
