import React, { useState, useEffect } from "react";
import MenuItem from "@mui/material/MenuItem";
import ImageUploading from "react-images-uploading";
import Select from "@mui/material/Select";
import {
  Input,
  Slider,
  TextField,
  Theme,
  Tooltip,
  useTheme,
} from "@mui/material";
import { regex } from "../../signupTest";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useStoreState } from "../../../store/easy-peasy/hooks";
import DatePicker from "react-datepicker";
import { isWbsite } from "../../signupTest";
import Sidebar from "../SideBar/sideBar";
const infoLogo = require("../../../images/infoLogo.png");
const redPlus = require("../../../images/redPlus.png");
const iPhone = require("../../../images/iPhone.png");
const mapPic = require("../../../images/mapPic.png");
const group80 = require("../../../images/Group80.png");
const cross = require("../../../images/cross.png");
const loader = require("../../../images/loader.gif");

const ImageUploadingButton = (props: any) => {
  return (
    <div className="mt-2 bg-white w-full h-24 rounded-lg cursor-pointer flex items-center border justify-center border-dashed border-orange-400">
      <img src={redPlus} className="w-5 h-5" />
    </div>
  );
};

function CreateMilestoneReward() {
  const [MilestoneRewardMilestone, setMilestoneRewardMilestone] = useState("");
  const [offerTitle, setOfferTitle] = useState("");
  const [uploadCreative, setUploadCreative] = useState([]);
  const [ordersToComplete, setOrdersToComplete] = useState("");
  const [orderAllowedperDay, setOrderAllowedperday] = useState("");
  const [minimuOrderValueforthisoffer, setMinimumOrderValueforthisoffer] =
    useState("");
  const [internalOfferCode, setInternalOfferCode] = useState("");
  const [termsAndConditions, setTermsAndConditions] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [imageArray, setImageArray] = useState<string[]>([]);
  const [isImageUploading, setIsImageUploading] = useState(false);
  const user = useStoreState((state) => state.user);
  const [switchTab, setSwitchTab] = useState(1);

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
                    <MenuItem value="value 1" style={{ fontSize: "14px" }}>
                      value 1
                    </MenuItem>
                    <MenuItem value="value2 2" style={{ fontSize: "14px" }}>
                      value 2
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
                  {imageArray.length > 0 &&
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
                                    imageArray.length
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
                {imageArray.length === 0 && (
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
              {imageArray.length === 0 && showErrorMessage.one === true && (
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

            <div className="w-full ">
              <div className="w-full mt-4 flex">
                <div className="text-sm font-semibold">Terms & Conditions</div>
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
                  multiline
                  value={termsAndConditions}
                  rows={3}
                  className="w-full"
                  onChange={(e: any) => {
                    setTermsAndConditions(e.target.value);
                  }}
                />
              </div>
              {!regex.test(termsAndConditions) &&
                showErrorMessage.one === true && (
                  <div className="w-full text-xs font-semibold text-red-500 mt-2">
                    {errorMessageOne.isRequired}
                  </div>
                )}
            </div>

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
                  value={endDate}
                  minDate={new Date()}
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

            <div className="w-full flex items-start justify-end mt-8 ">
              <button
                className="w-24 ml-4 bg-[#30D792] h-8 text-white rounded-[20px] hover:bg-green-300"
                onClick={() => {
                  if (
                    regex.test(MilestoneRewardMilestone) &&
                    regex.test(ordersToComplete) &&
                    regex.test(termsAndConditions) &&
                    imageArray.length > 0 &&
                    regex.test(offerTitle) &&
                    regex.test(startDate) &&
                    regex.test(endDate) &&
                    regex.test(internalOfferCode)
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
              <div className="w-full flex mt-1">
                <div className="w-1/3 text-xs">
                  Minimum order value for this offer
                </div>
                <div className="w-full text-xs text-gray-400">
                  {minimuOrderValueforthisoffer}
                </div>
              </div>

              <div className="w-full flex mt-1">
                <div className="w-1/3 text-xs">Internal offer code</div>
                <div className="w-full text-xs text-gray-400">
                  {internalOfferCode}
                </div>
              </div>

              <div className="w-full flex mt-1">
                <div className="w-1/3 text-xs">Terms and conditions</div>
                <div className="w-full text-xs text-gray-400">
                  {termsAndConditions}
                </div>
              </div>

              <div className="w-full flex mt-1">
                <div className="w-1/3 text-xs">Start Date</div>
                <div className="w-full text-xs text-gray-400">{startDate}</div>
              </div>
              <div className="w-full flex mt-1">
                <div className="w-1/3 text-xs">End date</div>
                <div className="w-full text-xs text-gray-400">{endDate}</div>
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
                      regex.test(termsAndConditions) &&
                      imageArray.length > 0 &&
                      regex.test(offerTitle) &&
                      regex.test(startDate) &&
                      regex.test(endDate) &&
                      startDate !== endDate &&
                      regex.test(internalOfferCode)
                    ) {
                      const payload = {
                        advertiserId: user.id,
                        milestone: MilestoneRewardMilestone,
                        offerTitle: offerTitle,
                        creative: imageArray[0],
                        numberOfOrdersToComplete: 8,
                        maximumOrdersAllowedPerDay: 9,
                        status: "Active",
                        termsAndConditions: termsAndConditions,
                        startDate: startDate,
                        endDate: endDate,
                      };
                      const { data: campaign } = await axios({
                        url: `${process.env.REACT_APP_SERVER_ENDPOINT}/reward`,
                        method: "POST",
                        headers: {
                          Authorization: `Bearer ${user.token}`,
                        },
                        data: payload,
                      });

                      if (campaign && campaign.status === "created") {
                        toast.success("Successfully Created !", {
                          position: toast.POSITION.TOP_RIGHT,
                        });
                        // addToken(login.accessToken)
                        navigate(`/${user.id}/active_campaign`);
                      }
                    } else {
                      setShowErrorMessage({ ...showErrorMessage, one: true });
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