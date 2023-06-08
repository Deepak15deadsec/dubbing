import {
  Chip,
  MenuItem,
  Select,
  Stack,
  TextField,
  Tooltip,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import SideBar from "../SideBar/sideBar";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { useStoreState } from "../../../store/easy-peasy/hooks";
import { isWbsite, regex } from "../../signupTest";
import axios from "axios";
import { toast } from "react-toastify";
import { ImageUploadingButton, MenuProps } from "../Campaigns/createCampaign";
import { CategoryOptions } from "../Campaigns/options";
import { error } from "console";
const loader = require("../../../images/loader.gif");
const countries = require("../../signupTest/countries.json");
const infoLogo = require("../../../images/infoLogo.png");
const cross = require("../../../images/cross.png");

function Preview(props: any) {
  const { Brand, setEditTab } = props;
  const user = useStoreState((state) => state.user);

  return (
    <div className="w-1/2 ml-4 rounded-lg bg-white mt-5 pb-4">
      <div
        className=" h-12 flex items-center pl-4 pr-4 text-xl font-bold"
        style={{ borderBottom: "1px solid #F6F8FA" }}
      >
        Preview
      </div>
      <div className=" flex">
        <div className="w-full">
          <div className=" m-5 border border-gray-200 rounded-md mt-4 mb-4 pb-4">
            <div className=" mt-4 pl-4">
              <div className="w-full mt-4 pl-4">
                <div className="w-full flex">
                  <div className="w-1/3 text-xs">Brand</div>
                  <div className="w-full text-xs text-gray-400">
                    {Brand?.brandName}
                  </div>
                </div>

                <div className="w-full flex mt-1">
                  <div className="w-1/3 flex items-center text-xs">
                    Brand logo
                  </div>
                  <div className="w-full items-center flex text-xs text-gray-400">
                    {Brand?.brandImage?.map((val: any, index: number) => {
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
                  <div className="w-full text-xs text-gray-400">
                    {Brand?.about}
                  </div>
                </div>
                <div className="w-full flex mt-1">
                  <div className="w-1/3 text-xs">Terms And Conditions</div>
                  <div className="w-full text-xs text-gray-400">
                    {Brand?.termsAndConditions?.map(
                      (data: any, index: number) => {
                        return (
                          <div className="text-sm flex">
                            <div className="mx-1">{index + 1}.</div>{" "}
                            <div>{data}</div>
                          </div>
                        );
                      }
                    )}
                  </div>
                </div>
                <div className="w-full flex mt-1">
                  <div className="w-1/3 text-xs">Categories</div>
                  <div className="w-full text-xs text-gray-400">
                    {Brand?.category?.map((data: any, index: number) => {
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
                  <div className="w-1/3 text-xs">Website URL</div>
                  <div className="w-full text-xs text-gray-400 flex">
                    {Brand?.websiteUrl}
                  </div>
                </div>
                <div className="w-full flex mt-1">
                  <div className="w-1/3 text-xs">IOS app URL</div>
                  <div className="w-full text-xs text-gray-400 flex">
                    {Brand?.iosUrl}
                  </div>
                </div>
                <div className="w-full flex mt-1">
                  <div className="w-1/3 text-xs">Android app URL</div>
                  <div className="w-full text-xs text-gray-400 flex">
                    {Brand?.androidUrl}
                  </div>
                </div>
              </div>
            </div>

            <div className=" ml-3 flex items-center mt-2 ">
              <div className="w-full flex justify-start pr-10">
                <button className="w-24 ml-4 bg-gray-500 h-8 text-white rounded-[20px] hover:bg-gray-400">
                  <Link to={`/${user.id}/`}>Back</Link>
                </button>
              </div>
              <div className="w-full flex justify-end pr-10">
                <button
                  className="w-24 ml-4 bg-[#30D792] h-8 text-white rounded-[20px] hover:bg-green-300"
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
    </div>
  );
}

function UpdateBrand() {
  const { id } = useParams();
  const [editTab, setEditTab] = useState(false);
  const user = useStoreState((store) => store.user);
  const { state } = useLocation();
  const { Brand } = state;

  const [brandInfo, setBrandInfo] = useState({});

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
  const changeCategory = (event: any) => {
    const {
      target: { value },
    } = event;
    setCategory(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  useEffect(() => {
    setBrandInfo(Brand);
    setAbout(Brand?.about);
    setTermsAndConditionsArray(Brand?.termsAndConditions);
    setBrandImage(Brand?.brandImage);
    setCategory(Brand?.category);
    setBrandName(Brand?.brandName);
    setWebsiteUrl(Brand?.websiteUrl);
    setIOSappUrl(Brand?.iosUrl);
    setAndroidappeUrl(Brand?.androidUrl);
  }, [Brand]);

  const navigate = useNavigate();

  return (
    <div className="flex h-1/2 w-full" style={{ backgroundColor: "#F6F8FA" }}>
      <SideBar />
      {editTab === false && (
        <Preview Brand={brandInfo} setEditTab={setEditTab} />
      )}
      {editTab === true && (
        <div className="w-1/2 bg-white mt-6 p-4 ml-4 rounded-lg h-auto">
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
                      myHeaders.append("Authorization", `Bearer ${user.token}`);

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
                onChange={(e: any) => setCategory(e.target.value)}
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
              <div className="w-full text-sm font-semibold">Website URL</div>
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
                  Invalid URL
                </div>
              )}
          </div>

          <div className="w-full">
            <div className="w-full mt-4 flex">
              <div className="w-full text-sm font-semibold">IOS app URL</div>
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
                  Invalid URL
                </div>
              )}
          </div>
          <div className="w-full">
            <div className="w-full mt-4 flex">
              <div className="w-full text-sm font-semibold">
                Android app URL
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
                  Invalid URL
                </div>
              )}
          </div>
          <div className="w-full flex items-start justify-end mt-8 ">
            <button
              className="w-24 ml-4 bg-[#30D792] h-8 text-white rounded-[20px] hover:bg-green-300"
              onClick={async () => {
                if (
                  regex.test(brandName) &&
                  brandImage.length > 0 &&
                  termsAndConditionsArray.length > 0 &&
                  regex.test(about) &&
                  category.length > 0
                ) {
                  const payload = {
                    brandName: brandName,
                    brandImage: brandImage,
                    about: about,
                    termsAndConditions: termsAndConditionsArray,
                    category: category,
                    websiteUrl: websiteUrl,
                    iosUrl: IOSappUrl,
                    androidUrl: androidappUrl,
                  };

                  try{
                  const { data: campaign } = await axios({
                    url: `${process.env.REACT_APP_SERVER_ENDPOINT}/brand/${Brand?.id}`,
                    method: "PUT",
                    headers: {
                      Authorization: `Bearer ${user.token}`,
                    },
                    data: payload,
                  });

                  if (campaign && campaign.status === "success") {
                    toast.success("Successfully Updated !", {
                      position: toast.POSITION.TOP_RIGHT,
                    });
                    // addToken(login.accessToken)
                    navigate(`/${user.id}/BrandList`);
                  } 
                } catch(err:any){
                  toast.error(`${err?.message}`, {
                    position: toast.POSITION.TOP_RIGHT,
                  });
                }
              }
              }}
            >
              Save
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default UpdateBrand;
