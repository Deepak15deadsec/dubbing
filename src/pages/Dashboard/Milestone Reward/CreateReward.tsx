import React, { useState, useEffect } from "react";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { Chip, Slider, Stack, TextField, Tooltip } from "@mui/material";
import { regex } from "../../signupTest";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useStoreState } from "../../../store/easy-peasy/hooks";
import DatePicker from "react-datepicker";
import Sidebar from "../SideBar/sideBar";
import { MenuProps, marks } from "../Campaigns/createCampaign";
const infoLogo = require("../../../images/infoLogo.png");
const redPlus = require("../../../images/redPlus.png");
const loader = require("../../../images/loader.gif");
const cross = require("../../../images/cross.png");
const countries = require("../../signupTest/countries.json");

const ImageUploadingButton = (props: any) => {
  return (
    <div className="mt-2 bg-white w-full h-24 rounded-lg cursor-pointer flex items-center border justify-center border-dashed border-orange-400">
      <img src={redPlus} className="w-5 h-5" />
    </div>
  );
};

function CreateMilestoneReward() {
  const [brand, setBrand] = useState<any>();
  const [MilestoneRewardMilestone, setMilestoneRewardMilestone] = useState("");
  const [offerTitle, setOfferTitle] = useState("");
  const [ordersToComplete, setOrdersToComplete] = useState("");
  const [orderAllowedperDay, setOrderAllowedperday] = useState("");
  const [minimuOrderValueforthisoffer, setMinimumOrderValueforthisoffer] =
    useState("");
  const [internalOfferCode, setInternalOfferCode] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [imageArray, setImageArray] = useState<string[]>([]);
  const [isImageUploading, setIsImageUploading] = useState(false);
  const user = useStoreState((state) => state.user);
  const [switchTab, setSwitchTab] = useState(1);
  const [showAll, setShowAll] = useState(true);
  const [gender, setGender] = useState<string[]>(["All"]);
  const [sliderValue, setSliderValue] = React.useState([20, 45]);
  const [country, setCountry] = useState({
    name: "",
    dial_code: "",
    code: "",
  });
  const [validupto, setValidupto] = useState("");
  const [brandArray, setBrandArray] = useState([]);

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

  const ChangeSlider = (event: any, newValue: any) => {
    setSliderValue(newValue);
  };

  const fetchViolations = async (token: any) => {
    let responseData;
    try {
      const { data } = await axios({
        url: `${process.env.REACT_APP_SERVER_ENDPOINT}/brand?advertiserId=${user.id}`,
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user.token}`,
        },
        cancelToken: token,
      });
      responseData = data?.data;
    } catch (error) {
      console.log(error);
    } finally {
      setBrandArray(responseData);
    }
  };

  useEffect(() => {
    const source = axios.CancelToken.source();
    fetchViolations(source.token);
    return () => {
      source.cancel("Request canceled");
    };
  }, []);

  const navigate = useNavigate();

  return (
    <div className="flex w-full">
      <Sidebar />
      <div className="w-full min-h-screen py-6 px-4 bg-gray-100">
        <div className="w-full py-2 flex items-center rounded-lg bg-white pl-4 font-bold text-2xl">
          Create Rewards
        </div>
        {switchTab === 1 && (
          <div className="w-1/2 bg-white mt-6 p-4 rounded-lg">
            <div className="w-full ">
              <div className="w-full">
                <div className="w-full mt-4 flex">
                  <div className="text-sm font-semibold">Brand</div>
                  <div className="ml-2 items-center flex justify-end">
                    <Tooltip
                      title="When an unknown printer took a galley of type and scrambled it to make a type specimen book."
                      placement="top"
                      arrow
                    >
                      <img src={infoLogo} className="w-4 h-4" />
                    </Tooltip>
                  </div>
                </div>
                <div className="mt-2 w-full">
                  <Select
                    className="w-full h-10"
                    style={{ fontSize: "14px" }}
                    placeholder="Select"
                    value={brand}
                    onChange={(e: any) => {
                      //  console.log("000>", e.target.value);
                      setBrand(e.target.value);
                    }}
                  >
                    {brandArray?.length > 0 &&
                      brandArray?.map((data: any, index: number) => {
                        return (
                          <MenuItem value={data} style={{ fontSize: "14px" }}>
                            {data?.brandName}
                          </MenuItem>
                        );
                      })}
                  </Select>
                </div>
                {!brand &&
                  showErrorMessage.one === true && (
                    <div className="w-full text-xs font-semibold text-red-500 mt-1">
                      {errorMessageOne.isRequired}
                    </div>
                  )}
              </div>
              <div className="w-full">
                <div className="w-full mt-4 flex">
                  <div className="text-sm font-semibold">Milestone Rewards</div>
                  <div className="ml-2 items-center flex justify-end">
                    <Tooltip
                      title="When an unknown printer took a galley of type and scrambled it to make a type specimen book."
                      placement="top"
                      arrow
                    >
                      <img src={infoLogo} className="w-4 h-4" />
                    </Tooltip>
                  </div>
                </div>
                <div className="mt-2 w-full">
                  <Select
                    className="w-full h-10"
                    style={{ fontSize: "14px" }}
                    value={MilestoneRewardMilestone}
                    onChange={(e: any) => {
                      setMilestoneRewardMilestone(e.target.value);
                    }}
                  >
                    <MenuItem value="OrderReceipt" style={{ fontSize: "14px" }}>
                    Order Receipt
                  </MenuItem>
                  <MenuItem value="OrderValue" style={{ fontSize: "14px" }}>
                    Order Value
                  </MenuItem>
                  <MenuItem value="Avni" style={{ fontSize: "14px" }}>
                    Avni
                  </MenuItem>
                  </Select>
                </div>
                {!regex.test(MilestoneRewardMilestone) &&
                  showErrorMessage.one === true && (
                    <div className="w-full text-xs font-semibold text-red-500 mt-1">
                      {errorMessageOne.isRequired}
                    </div>
                  )}
              </div>
              <div className="w-full">
                <div className="w-full mt-4 flex">
                  <div className="text-sm font-semibold">Offer Title</div>
                  <div className="ml-2 items-center flex justify-end">
                    <Tooltip
                      title="When an unknown printer took a galley of type and scrambled it to make a type specimen book."
                      placement="top"
                      arrow
                    >
                      <img src={infoLogo} className="w-4 h-4" />
                    </Tooltip>
                  </div>
                </div>
                <div className="mt-2 w-full">
                  <TextField
                    value={offerTitle}
                    size="small"
                    className="w-full"
                    onChange={(e: any) => {
                      setOfferTitle(e.target.value);
                    }}
                  />
                </div>
                {!regex.test(offerTitle) && showErrorMessage.one === true && (
                  <div className="w-full text-xs font-semibold text-red-500 mt-1">
                    {errorMessageOne.isRequired}
                  </div>
                )}
              </div>
            </div>

            <div className="w-full ">
              <div className="w-full mt-4 flex">
                <div className="text-sm font-semibold">Upload Creative</div>
                <div className="ml-2 items-center flex justify-end">
                  <Tooltip
                    title="When an unknown printer took a galley of type and scrambled it to make a type specimen book."
                    placement="top"
                    arrow
                  >
                    <img src={infoLogo} className="w-4 h-4" />
                  </Tooltip>
                </div>
              </div>
              <div className="w-full flex items-center">
                <div className="flex mr-2">
                  {imageArray?.length > 0 &&
                    imageArray.map((val: any, index: any) => {
                      return (
                        <div className="m-1" key={index}>
                          <div
                            style={{
                              position: "absolute",
                              cursor: "pointer",
                              zIndex: 10,
                              marginLeft: "60px",
                              marginTop: "6px",
                            }}
                          >
                            <div
                              className="w-3 h-3 bg-gray-100 rounded-full flex items-center text-xs justify-center"
                              onClick={() => {
                                setImageArray([
                                  ...imageArray.slice(0, index),
                                  ...imageArray.slice(
                                    index + 1,
                                    imageArray?.length
                                  ),
                                ]);
                              }}
                            >
                              x
                            </div>
                          </div>
                          <img src={val} className="w-20 h-20" />
                        </div>
                      );
                    })}
                </div>
                {isImageUploading === true && (
                  <div className="w-20 h-20 border flex justify-center items-center rounded border-gray-200 mr-4">
                    <img src={loader} className="w-5 h-5" />
                  </div>
                )}
                {imageArray?.length === 0 && (
                  <div className="w-full">
                    <label htmlFor="file-upload" className="custom-file-upload">
                      <ImageUploadingButton />
                    </label>
                    <input
                      style={{ display: "none" }}
                      id="file-upload"
                      type="file"
                      onChange={async (newImage: any) => {
                        const file = newImage.target.files?.[0]!;
                        setImageArray([]);
                        setIsImageUploading(true);
                        const filename = file.name;
                        const fileType = file.type;
                        var myHeaders = new Headers();
                        myHeaders.append(
                          "Authorization",
                          `Bearer ${user.token}`
                        );

                        var requestOptions = {
                          method: "GET",
                          headers: myHeaders,
                          redirect: "follow",
                        };

                        fetch(
                          `https://adsapi.avniads.com/presigned-url/create?fileName=${filename}`,
                          requestOptions as any
                        )
                          .then((response) => response.json())
                          .then((res: any) => {
                            console.log("response --> ", typeof res);
                            var myHeaders = new Headers();
                            myHeaders.append("Content-Type", fileType);

                            var fileData = file;

                            var requestOptions = {
                              method: "PUT",
                              headers: myHeaders,
                              body: fileData,
                              redirect: "follow",
                            };

                            fetch(`${res?.data}`, requestOptions as any)
                              .then((response) => response.text())
                              .then((result) => {
                                setImageArray([
                                  `https://avni-advertiser-campaign.s3.us-east-1.amazonaws.com/${filename}`,
                                ]);
                                setIsImageUploading(false);
                              })
                              .catch((error) => console.log("error", error));
                          })
                          .catch((error) => console.log("error", error));
                      }}
                    />
                  </div>
                )}
              </div>
              {showErrorMessage.two === true && (
                <div className="w-full text-xs font-semibold text-red-500 mt-2">
                  {errorMessageOne.isMaxImage}
                </div>
              )}
              {imageArray?.length === 0 && showErrorMessage.one === true && (
                <div className="w-full text-xs font-semibold text-red-500 mt-2">
                  {errorMessageOne.isRequired}
                </div>
              )}
            </div>

            <div className="w-full ">
              <div className="w-full mt-4 flex">
                <div className="text-sm font-semibold">
                  Number of orders to complete
                </div>
                <div className="ml-2 items-center flex justify-end">
                  <Tooltip
                    title="When an unknown printer took a galley of type and scrambled it to make a type specimen book."
                    placement="top"
                    arrow
                  >
                    <img src={infoLogo} className="w-4 h-4" />
                  </Tooltip>
                </div>
              </div>
              <div className="mt-2 w-full">
                <TextField
                  value={ordersToComplete}
                  size="small"
                  type="number"
                  className="w-full"
                  onChange={(e: any) => {
                    setOrdersToComplete(e.target.value);
                  }}
                />
              </div>
              {!regex.test(ordersToComplete) &&
                showErrorMessage.one === true && (
                  <div className="w-full text-xs font-semibold text-red-500 mt-1">
                    {errorMessageOne.isRequired}
                  </div>
                )}
            </div>

            <div className="w-full ">
              <div className="w-full mt-4 flex">
                <div className="text-sm font-semibold">
                  Maximum orders allowed per day
                </div>
                <div className="ml-2 items-center flex justify-end">
                  <Tooltip
                    title="When an unknown printer took a galley of type and scrambled it to make a type specimen book."
                    placement="top"
                    arrow
                  >
                    <img src={infoLogo} className="w-4 h-4" />
                  </Tooltip>
                </div>
              </div>
              <div className="mt-2 w-full">
                <TextField
                  value={orderAllowedperDay}
                  size="small"
                  type="number"
                  className="w-full"
                  onChange={(e: any) => {
                    setOrderAllowedperday(e.target.value);
                  }}
                />
              </div>
              {!regex.test(orderAllowedperDay) &&
                showErrorMessage.one === true && (
                  <div className="w-full text-xs font-semibold text-red-500 mt-1">
                    {errorMessageOne.isRequired}
                  </div>
                )}
            </div>

            <div className="w-full ">
              <div className="w-full mt-4 flex">
                <div className="text-sm font-semibold">Internal offer code</div>
                <div className="ml-2 items-center flex justify-end">
                  <Tooltip
                    title="When an unknown printer took a galley of type and scrambled it to make a type specimen book."
                    placement="top"
                    arrow
                  >
                    <img src={infoLogo} className="w-4 h-4" />
                  </Tooltip>
                </div>
              </div>
              <div className="mt-2 w-full">
                <TextField
                  value={internalOfferCode}
                  size="small"
                  type="text"
                  className="w-full"
                  onChange={(e: any) => {
                    setInternalOfferCode(e.target.value);
                  }}
                />
              </div>
              {!regex.test(internalOfferCode) &&
                showErrorMessage.one === true && (
                  <div className="w-full text-xs font-semibold text-red-500 mt-1">
                    {errorMessageOne.isRequired}
                  </div>
                )}
            </div>

            <div className="w-full">
              <div className="w-full mt-4 flex">
                <div className="w-full text-sm font-semibold">Country</div>
              </div>
              <div className="mt-2 w-full">
                <Select
                  value={country}
                  onChange={(e: any) => {
                    setCountry(e.target.value);
                  }}
                  className="w-full"
                  size="small"
                  MenuProps={MenuProps}
                >
                  {countries.map((data: any, index: number) => {
                    return (
                      <MenuItem value={data} key={index}>
                        {data.name}
                      </MenuItem>
                    );
                  })}
                </Select>{" "}
              </div>
              {country.name?.length === 0 && showErrorMessage.one === true && (
                <div className="w-full text-xs font-semibold text-red-500 mt-1">
                  {errorMessageOne.isRequired}
                </div>
              )}
            </div>

            <div className="mt-4 w-full flex">
              <div className="w-full mr-3">
                <div className="w-full mb-2 text-sm font-semibold">
                  Start Date
                </div>

                <DatePicker
                  placeholderText="mm/dd/yy"
                  value={
                    startDate?.length > 0
                      ? new Date(startDate).toDateString().slice(4)
                      : startDate
                  }
                  onChange={(e: any) => {
                    setStartDate(
                      `${new Date(e).getMonth() + 1}/${new Date(
                        e
                      ).getDate()}/${new Date(e).getFullYear()}`
                    );
                    if (endDate?.length > 1) {
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
                  minDate={new Date(new Date().setDate(new Date().getDate() + 1))}
                  className="border w-full h-10  rounded"
                />

                {!regex.test(startDate) && showErrorMessage.one === true && (
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
                  value={
                    endDate?.length > 0
                      ? new Date(endDate).toDateString().slice(4)
                      : endDate
                  }
                  minDate={new Date(new Date().setDate(new Date().getDate() + 1))}
                  placeholderText="mm/dd/yy"
                  className="border w-full h-10  border-gray-300 rounded"
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
                {!regex.test(endDate) && showErrorMessage.one === true && (
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

            <div className="w-1/2 mt-4">
              <div className="w-full mb-2 text-sm font-semibold">
                Valid Upto
              </div>
              <DatePicker
                value={
                  validupto?.length > 0
                    ? new Date(validupto).toDateString().slice(4)
                    : validupto
                }
                minDate={new Date(new Date().setDate(new Date().getDate() + 1))}
                placeholderText="mm/dd/yy"
                className="border w-full h-10  border-gray-300 rounded"
                onChange={(e: any) => {
                  setValidupto(
                    `${new Date(e).getMonth() + 1}/${new Date(
                      e
                    ).getDate()}/${new Date(e).getFullYear()}`
                  );
                }}
              />
              {!regex.test(validupto) && showErrorMessage.one === true && (
                <div className="w-full text-xs font-semibold text-red-500 mt-1">
                  {errorMessageOne.isRequired}
                </div>
              )}
            </div>

            <div className="mt-4 w-full ml-2 flex items-center">
              <div className="flex items-center">
                <label>All</label>
                <input
                  type="radio"
                  name="all"
                  className="w-5 h-5 ml-2"
                  checked={showAll}
                  onChange={() => {
                    setShowAll(true);
                  }}
                />
              </div>
              <div className="flex items-center ml-20">
                <label>Target</label>
                <input
                  type="radio"
                  name="target"
                  className="w-5 h-5 ml-2"
                  checked={!showAll}
                  onChange={() => {
                    setShowAll(false);
                  }}
                />
              </div>
            </div>

            {showAll === false && (
              <div className=" w-full">
                <div className="w-full">
                  <div className="w-full mt-4 flex">
                    <div className="w-full text-sm font-semibold">Gender</div>
                  </div>
                  <div className="mt-2 w-full">
                    <Select
                      size="small"
                      className="w-full h-auto"
                      style={{ fontSize: "14px" }}
                      multiple
                      value={gender}
                      onChange={(e: any) => setGender(e.target.value)}
                      renderValue={(selected: any) => (
                        <Stack
                          gap={1}
                          direction="row"
                          flexWrap="wrap"
                          className="overflow-auto"
                        >
                          {selected.map((value: any, index: any) => (
                            <Chip
                              key={value}
                              label={value}
                              className="h-[20px] text-[13px]"
                              onDelete={() =>
                                setGender(
                                  gender.filter((item: any) => item !== value)
                                )
                              }
                              deleteIcon={
                                <img
                                  src={cross}
                                  className="w-3 h-3"
                                  onMouseDown={(e: any) => {
                                    e.stopPropagation();
                                  }}
                                />
                              }
                            />
                          ))}
                        </Stack>
                      )}
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
                      <MenuItem value="All" style={{ fontSize: "14px" }}>
                        All
                      </MenuItem>
                    </Select>
                  </div>
                  {gender?.length === 0 && showErrorMessage.one === true && (
                    <div className="w-full text-xs font-semibold text-red-500 mt-1">
                      {errorMessageOne.isRequired}
                    </div>
                  )}
                </div>

                <div className="w-full">
                  <div className="w-full mt-4 flex">
                    <div className="w-full text-sm font-semibold">
                      Age Range
                    </div>
                  </div>
                  <div className="w-1/2 mt-12 ml-2">
                    <Slider
                      size="small"
                      getAriaLabel={() => "Temperature range"}
                      value={sliderValue}
                      onChange={ChangeSlider}
                      valueLabelDisplay="on"
                      marks={marks}
                      step={10}
                      max={65}
                      min={13}
                    />
                  </div>
                </div>
              </div>
            )}

            <div className="w-full flex items-start justify-end mt-8 ">
              <button
                className="w-24 ml-4 bg-[#30D792] h-8 text-white rounded-[20px] hover:bg-green-300"
                onClick={() => {
                  if (
                    regex.test(MilestoneRewardMilestone) &&
                    regex.test(ordersToComplete) &&
                    imageArray?.length > 0 &&
                    regex.test(offerTitle) &&
                    regex.test(startDate) &&
                    regex.test(validupto) &&
                    regex.test(endDate) &&
                    regex.test(internalOfferCode) &&
                    regex.test(country?.name) &&
                    brand
                  ) {
                    setSwitchTab(2);
                  } else {
                    setShowErrorMessage({ ...showErrorMessage, one: true });
                  }
                }}
              >
                Preview
              </button>
            </div>
          </div>
        )}
        {switchTab === 2 && (
          <div className="w-1/2 m-5 border bg-white border-gray-200 rounded-md mt-4 mb-4 pb-4">
            <div
              className="w-full h-10 flex items-center pl-4 text-sm"
              style={{ borderBottom: "1px solid #EEEEEE" }}
            >
              Rewards
            </div>
            <div className="w-full mt-4 pl-4">
              <div className="w-full flex">
                <div className="w-1/3 text-xs">Brand Name</div>
                <div className="w-full text-xs text-gray-400">
                  {brand?.brandName}
                </div>
              </div>
              <div className="w-full flex">
                <div className="w-1/3 text-xs">Milestone Rewards</div>
                <div className="w-full text-xs text-gray-400">
                  {MilestoneRewardMilestone}
                </div>
              </div>
              <div className="w-full flex mt-1">
                <div className="w-1/3 text-xs">Offer Title</div>
                <div className="w-full text-xs text-gray-400">{offerTitle}</div>
              </div>

              <div className="w-full flex mt-1">
                <div className="w-1/3 flex items-center text-xs">Creative</div>
                <div className="w-full items-center flex text-xs text-gray-400">
                  {imageArray.map((val: any, index: number) => {
                    return (
                      <div className="m-2" key={index}>
                        <img src={val} className="h-12 w-12" />
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="w-full flex mt-1">
                <div className="w-1/3 text-xs">
                  Number of orders to complete
                </div>
                <div className="w-full text-xs text-gray-400">
                  {ordersToComplete}
                </div>
              </div>
              <div className="w-full flex mt-1">
                <div className="w-1/3 text-xs">
                  Maximum orders allowed per day
                </div>
                <div className="w-full text-xs text-gray-400">
                  {orderAllowedperDay}
                </div>
              </div>
              {/* <div className="w-full flex mt-1">
                <div className="w-1/3 text-xs">
                  Minimum order value for this offer
                </div>
                <div className="w-full text-xs text-gray-400">
                  {minimuOrderValueforthisoffer}
                </div>
              </div> */}

              <div className="w-full flex mt-1">
                <div className="w-1/3 text-xs">Internal offer code</div>
                <div className="w-full text-xs text-gray-400">
                  {internalOfferCode}
                </div>
              </div>

              <div className="w-full flex mt-1">
                <div className="w-1/3 text-xs">Country</div>
                <div className="w-full text-xs text-gray-400">
                  {country?.name}
                </div>
              </div>

              <div className="w-full flex mt-1">
                <div className="w-1/3 text-xs">Start Date</div>
                <div className="w-full text-xs text-gray-400">
                  {new Date(startDate).toDateString().slice(4)}
                </div>
              </div>
              <div className="w-full flex mt-1">
                <div className="w-1/3 text-xs">End date</div>
                <div className="w-full text-xs text-gray-400">
                  {new Date(endDate).toDateString().slice(4)}
                </div>
              </div>
              <div className="w-full flex mt-1">
                <div className="w-1/3 text-xs">Valid Upto</div>
                <div className="w-full text-xs text-gray-400">
                  {new Date(validupto).toDateString().slice(4)}
                </div>
              </div>
            </div>
            <div className="w-full flex mt-8">
              <div className="w-full flex items-start justify-start ">
                <button
                  className="w-24 ml-4 bg-gray-500 h-8 text-white rounded-[20px] hover:bg-gray-400"
                  onClick={() => {
                    setSwitchTab(1);
                  }}
                >
                  Back
                </button>
              </div>
              <div className="w-full flex items-start justify-end pr-4 ">
                <button
                  className="w-24 ml-4 bg-[#30D792] h-8 text-white rounded-[20px] hover:bg-green-300"
                  onClick={async () => {
                    if (
                      regex.test(MilestoneRewardMilestone) &&
                      regex.test(ordersToComplete) &&
                      regex.test(country?.name) &&
                      imageArray?.length > 0 &&
                      regex.test(offerTitle) &&
                      regex.test(startDate) &&
                      regex.test(endDate) &&
                      regex.test(internalOfferCode)
                    ) {
                      const payload = {
                        advertiserId: user.id,
                        type: MilestoneRewardMilestone,
                        offerTitle: offerTitle,
                        offerLogo: imageArray[0],
                        numberOfOrdersToComplete: 8,
                        maximumOrdersAllowedPerDay: 9,
                        status: "Draft",
                        country: country.name,
                        startDate: `${new Date(startDate).getFullYear()}-${
                          new Date(startDate).getMonth() + 1 > 9 ? "" : "0"
                        }${new Date(startDate).getMonth() + 1}-${
                          new Date(startDate).getDate() > 9 ? "" : "0"
                        }${new Date(startDate).getDate()}`,
                        internalOfferCode: internalOfferCode,
                        endDate: `${new Date(endDate).getFullYear()}-${
                          new Date(endDate).getMonth() + 1 > 9 ? "" : "0"
                        }${new Date(endDate).getMonth() + 1}-${
                          new Date(endDate).getDate() > 9 ? "" : "0"
                        }${new Date(endDate).getDate()}`,
                        targetLocation: country.dial_code,
                        targetGender: gender,
                        targetAge: sliderValue,
                        brandName: brand?.brandName,
                        brandId: brand?.id,
                        validUpto: `${new Date(validupto).getFullYear()}-${
                          new Date(validupto).getMonth() + 1 > 9 ? "" : "0"
                        }${new Date(validupto).getMonth() + 1}-${
                          new Date(validupto).getDate() > 9 ? "" : "0"
                        }${new Date(validupto).getDate()}`,
                      };
                      try {
                        const { data: campaign } = await axios({
                          url: `${process.env.REACT_APP_SERVER_ENDPOINT}/milestone`,
                          method: "POST",
                          headers: {
                            Authorization: `Bearer ${user.token}`,
                          },
                          data: payload,
                        });
                        if (campaign && campaign.message === "Created successfully") {
                          toast.success("Successfully Created !", {
                            position: toast.POSITION.TOP_RIGHT,
                          });
                          // addToken(login.accessToken)
                          navigate(`/${user.id}/draft_reward`);
                        }
                      } catch (err: any) {
                        toast.error(`${err?.message}`, {
                          position: toast.POSITION.TOP_RIGHT,
                        });
                      }
                    }
                  }}
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default CreateMilestoneReward;
