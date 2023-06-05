import React, { useEffect, useState } from "react";
import Sidebar from "../SideBar/sideBar";
import {
  Chip,
  MenuItem,
  Select,
  Stack,
  TextField,
  Tooltip,
} from "@mui/material";
import { isWbsite, regex } from "../../signupTest";
import { ImageUploadingButton, MenuProps } from "../Campaigns/createCampaign";
import { useStoreState } from "../../../store/easy-peasy/hooks";
import { CategoryOptions } from "../Campaigns/options";
import { toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const infoLogo = require("../../../images/infoLogo.png");
const loader = require("../../../images/loader.gif");
const cross = require("../../../images/cross.png");

function AddBrands() {
  const [brandName, setBrandName] = useState("");
  const [brandImage, setBrandImage] = useState<string[]>([]);
  const [about, setAbout] = useState("");
  const [websiteUrl, setWebsiteUrl] = useState("");
  const [IOSappUrl, setIOSappUrl] = useState("");
  const [androidappUrl, setAndroidappeUrl] = useState("");
  const [termsAndConditions, setTermsAndConditions] = useState("");
  const [termsAndConditionsArray, setTermsAndConditionsArray] = useState<
    string[]
  >([]);
  const [isImageUploading, setIsImageUploading] = useState(false);
  const [category, setCategory] = useState<string[]>([]);
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
    <div className="flex w-full h-auto">
      <Sidebar />
      <div className="w-full py-6 px-4 bg-gray-100 h-auto">
        <div className="w-full py-2 flex items-center rounded-lg bg-white pl-4 font-bold text-2xl">
          Brand
        </div>
        {switchTab === 1 && (
          <div className="w-1/2 bg-white mt-6 p-4 rounded-lg h-auto">
            <div className="w-full">
              <div className="w-full mt-4 flex">
                <div className="text-sm font-semibold">Brand Name</div>
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
                  value={brandName}
                  size="small"
                  className="w-full"
                  onChange={(e: any) => {
                    setBrandName(e.target.value);
                  }}
                />
              </div>
              {!regex.test(brandName) && showErrorMessage.one === true && (
                <div className="w-full text-xs font-semibold text-red-500 mt-1">
                  {errorMessageOne.isRequired}
                </div>
              )}
            </div>

            <div className="w-full">
              <div className="w-full mt-4 flex">
                <div className="text-sm font-semibold">Upload brand logo</div>
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
                  {brandImage.length > 0 &&
                    brandImage.map((val: any, index: any) => {
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
                                setBrandImage([
                                  ...brandImage.slice(0, index),
                                  ...brandImage.slice(
                                    index + 1,
                                    brandImage.length
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
                {brandImage.length === 0 && (
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
                        setBrandImage([]);
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
                                setBrandImage([
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
              {brandImage.length === 0 && showErrorMessage.one === true && (
                <div className="w-full text-xs font-semibold text-red-500 mt-2">
                  {errorMessageOne.isRequired}
                </div>
              )}
            </div>

            <div className="w-full ">
              <div className="w-full mt-4 flex">
                <div className="text-sm font-semibold">About</div>
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
                  value={about}
                  rows={3}
                  className="w-full"
                  onChange={(e: any) => {
                    setAbout(e.target.value);
                  }}
                  inputProps={{ maxLength: 250 }}
                />
              </div>
              {!regex.test(about) && showErrorMessage.one === true && (
                <div className="w-full text-xs font-semibold text-red-500 mt-2">
                  {errorMessageOne.isRequired}
                </div>
              )}
            </div>

            <div className="w-full">
              <div className="w-full p-1 border border-blue-400 rounded mt-4">
                <div className="w-full border border-gray-500 rounded p-1">
                  <div className="w-full flex"></div>
                  <div className="mt-2 w-full">
                    <TextField
                      variant="standard"
                      InputLabelProps={{
                        shrink: true,
                      }}
                      label="Terms and conditions"
                      size="small"
                      value={termsAndConditions}
                      className="w-full"
                      onChange={(e: any) => {
                        setTermsAndConditions(e.target.value);
                      }}
                      onKeyUp={(e: any) => {
                        if (e.keyCode === 13) {
                          if (termsAndConditions !== "") {
                            setTermsAndConditionsArray([
                              ...termsAndConditionsArray,
                              termsAndConditions,
                            ]);
                          }
                          setTermsAndConditions("");
                        }
                      }}
                      onBlur={() => {
                        if (
                          termsAndConditions.length > 0 &&
                          !termsAndConditionsArray.includes(termsAndConditions)
                        ) {
                          setTermsAndConditionsArray([
                            ...termsAndConditionsArray,
                            termsAndConditions,
                          ]);
                          setTermsAndConditions("");
                        }
                      }}
                    />
                  </div>

                  <div className="mt-2 mb-2 flex w-full flex-wrap flex-col">
                    {termsAndConditionsArray.map((data: any, index: any) => {
                      if (data !== "") {
                        return (
                          <div
                            key={index}
                            className="w-full flex m-1 items-center"
                          >
                            <div className="text-blue-500 text-xs p-1 font-semibold rounded-sm flex items-center justify-center">
                              {index + 1}
                            </div>
                            <div className="bg-blue-100 text-blue-500 text-xs p-1 font-semibold rounded-sm flex items-center justify-center mx-1">
                              {data}
                              <div
                                className="ml-3 text-blue-500 cursor-pointer"
                                onClick={() => {
                                  setTermsAndConditionsArray([
                                    ...termsAndConditionsArray.slice(0, index),
                                    ...termsAndConditionsArray.slice(
                                      index + 1,
                                      termsAndConditionsArray.length
                                    ),
                                  ]);
                                }}
                              >
                                &#10006;
                              </div>
                            </div>
                          </div>
                        );
                      }
                    })}
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full">
              <div className="w-full mt-4 flex">
                <div className="w-full text-sm font-semibold">Categories</div>
              </div>
              <div className="mt-2 w-full">
                <Select
                  size="small"
                  className="w-full h-auto"
                  style={{ fontSize: "14px" }}
                  multiple
                  value={category}
                  onChange={(e:any) => setCategory(e.target.value)}
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
                            setCategory(
                              category.filter((item: any) => item !== value)
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
                  {CategoryOptions.map((data: any, index: number) => {
                    return (
                      <MenuItem value={data.label} style={{ fontSize: "14px" }}>
                        {data.label}
                      </MenuItem>
                    );
                  })}
                </Select>
              </div>
              {category.length === 0 && showErrorMessage.two === true && (
                <div className="w-full text-xs font-semibold text-red-500 mt-1">
                  {errorMessageOne.isRequired}
                </div>
              )}
            </div>

            <div className="w-full">
              <div className="w-full mt-4 flex">
                <div className="w-full text-sm font-semibold">Website url</div>
              </div>
              <div className="mt-2 w-full">
                <TextField
                  value={websiteUrl}
                  size="small"
                  className="w-full"
                  type="text"
                  onChange={(e: any) => {
                    setWebsiteUrl(e.target.value);
                  }}
                />
              </div>
              {!isWbsite.test(websiteUrl) &&
                showErrorMessage.three === true &&
                websiteUrl.length > 0 && (
                  <div className="w-full text-xs font-semibold text-red-500 mt-1">
                    Invalid url
                  </div>
                )}
            </div>

            <div className="w-full">
              <div className="w-full mt-4 flex">
                <div className="w-full text-sm font-semibold">IOS app url</div>
              </div>
              <div className="mt-2 w-full">
                <TextField
                  value={IOSappUrl}
                  size="small"
                  className="w-full"
                  type="text"
                  onChange={(e: any) => {
                    setIOSappUrl(e.target.value);
                  }}
                />
              </div>
              {!isWbsite.test(IOSappUrl) &&
                showErrorMessage.three === true &&
                IOSappUrl.length > 0 && (
                  <div className="w-full text-xs font-semibold text-red-500 mt-1">
                    Invalid url
                  </div>
                )}
            </div>
            <div className="w-full">
              <div className="w-full mt-4 flex">
                <div className="w-full text-sm font-semibold">
                  Android app url
                </div>
              </div>
              <div className="mt-2 w-full">
                <TextField
                  value={androidappUrl}
                  size="small"
                  className="w-full"
                  type="text"
                  onChange={(e: any) => {
                    setAndroidappeUrl(e.target.value);
                  }}
                />
              </div>
              {!isWbsite.test(androidappUrl) &&
                showErrorMessage.three === true &&
                androidappUrl.length > 0 && (
                  <div className="w-full text-xs font-semibold text-red-500 mt-1">
                    Invalid url
                  </div>
                )}
            </div>
            <div className="w-full flex items-start justify-end mt-8 ">
              <button
                className="w-24 ml-4 bg-[#30D792] h-8 text-white rounded-[20px] hover:bg-green-300"
                onClick={() => {
                  if (
                    regex.test(brandName) &&
                    brandImage.length > 0 &&
                    termsAndConditionsArray.length > 0 &&
                    regex.test(about) &&
                    category.length > 0
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
              Brand
            </div>
            <div className="w-full mt-4 pl-4">
              <div className="w-full flex">
                <div className="w-1/3 text-xs">Brand</div>
                <div className="w-full text-xs text-gray-400">{brandName}</div>
              </div>

              <div className="w-full flex mt-1">
                <div className="w-1/3 flex items-center text-xs">
                  Brand logo
                </div>
                <div className="w-full items-center flex text-xs text-gray-400">
                  {brandImage.map((val: any, index: number) => {
                    return (
                      <div className="m-2" key={index}>
                        <img src={val} className="h-12 w-12" />
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="w-full flex mt-1">
                <div className="w-1/3 text-xs">About</div>
                <div className="w-full text-xs text-gray-400">{about}</div>
              </div>
              <div className="w-full flex mt-1">
                <div className="w-1/3 text-xs">Terms And Conditions</div>
                <div className="w-full text-xs text-gray-400">
                  {termsAndConditionsArray.map((data: any, index: number) => {
                    return (
                      <div className="text-sm flex">
                        <div className="mx-1">{index + 1}.</div>{" "}
                        <div>{data}</div>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="w-full flex mt-1">
                <div className="w-1/3 text-xs">Catogory</div>
                <div className="w-full text-xs text-gray-400">
                  {category.map((data: any, index: number) => {
                    return (
                      <div className="text-sm flex">
                        <div className="mx-1">{index + 1}.</div>{" "}
                        <div>{data}</div>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="w-full flex mt-1">
                <div className="w-1/3 text-xs">Website url</div>
                <div className="w-full text-xs text-gray-400 flex">
                  {websiteUrl}
                </div>
              </div>
              <div className="w-full flex mt-1">
                <div className="w-1/3 text-xs">IOS app url</div>
                <div className="w-full text-xs text-gray-400 flex">
                  {IOSappUrl}
                </div>
              </div>
              <div className="w-full flex mt-1">
                <div className="w-1/3 text-xs">Android app url</div>
                <div className="w-full text-xs text-gray-400 flex">
                  {androidappUrl}
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
                      //   setSwitchTab(4);

                      const payload = {
                        advertiserId: `${user.id}`,
                        brandName: brandName,
                        brandImage: brandImage,
                        about: about,
                        termsAndConditions: termsAndConditionsArray,
                        category: category,
                        websiteUrl: websiteUrl,
                        iosUrl: IOSappUrl,
                        androidUrl: androidappUrl,
                      };
                      const { data: campaign } = await axios({
                        url: `${process.env.REACT_APP_SERVER_ENDPOINT}/brand`,
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
                        navigate(`/${user.id}/BrandList`);
                      }
                    }}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default AddBrands;
