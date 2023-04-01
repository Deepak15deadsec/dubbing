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
import { Navigate, useNavigate } from "react-router-dom";
import axios from "axios";
import { useStoreState } from "../../../store/easy-peasy/hooks";
import { CategoryOptions } from "./options";
import DatePicker from "react-datepicker";
const infoLogo = require("../../../images/infoLogo.png");
const redPlus = require("../../../images/redPlus.png");
const iPhone = require("../../../images/iPhone.png");
const mapPic = require("../../../images/mapPic.png");
const group80 = require("../../../images/Group80.png");
const cross = require("../../../images/cross.png");

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

function getStyles(name: string, personName: string[], theme: Theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

const country_list = [
  "Afghanistan",
  "Albania",
  "Algeria",
  "Andorra",
  "Angola",
  "Anguilla",
  "Antigua &amp; Barbuda",
  "Argentina",
  "Armenia",
  "Aruba",
  "Australia",
  "Austria",
  "Azerbaijan",
  "Bahamas",
  "Bahrain",
  "Bangladesh",
  "Barbados",
  "Belarus",
  "Belgium",
  "Belize",
  "Benin",
  "Bermuda",
  "Bhutan",
  "Bolivia",
  "Bosnia &amp; Herzegovina",
  "Botswana",
  "Brazil",
  "British Virgin Islands",
  "Brunei",
  "Bulgaria",
  "Burkina Faso",
  "Burundi",
  "Cambodia",
  "Cameroon",
  "Cape Verde",
  "Cayman Islands",
  "Chad",
  "Chile",
  "China",
  "Colombia",
  "Congo",
  "Cook Islands",
  "Costa Rica",
  "Cote D Ivoire",
  "Croatia",
  "Cruise Ship",
  "Cuba",
  "Cyprus",
  "Czech Republic",
  "Denmark",
  "Djibouti",
  "Dominica",
  "Dominican Republic",
  "Ecuador",
  "Egypt",
  "El Salvador",
  "Equatorial Guinea",
  "Estonia",
  "Ethiopia",
  "Falkland Islands",
  "Faroe Islands",
  "Fiji",
  "Finland",
  "France",
  "French Polynesia",
  "French West Indies",
  "Gabon",
  "Gambia",
  "Georgia",
  "Germany",
  "Ghana",
  "Gibraltar",
  "Greece",
  "Greenland",
  "Grenada",
  "Guam",
  "Guatemala",
  "Guernsey",
  "Guinea",
  "Guinea Bissau",
  "Guyana",
  "Haiti",
  "Honduras",
  "Hong Kong",
  "Hungary",
  "Iceland",
  "India",
  "Indonesia",
  "Iran",
  "Iraq",
  "Ireland",
  "Isle of Man",
];

const ImageUploadingButton = (props: any) => {
  const { value, onChange } = props;
  return (
    <ImageUploading value={value} onChange={onChange}>
      {({ onImageUpload, onImageUpdate }) => (
        <div
          onClick={value ? onImageUpload : () => onImageUpdate(0)}
          {...props}
          className="mt-2 w-20 h-24 rounded-lg cursor-pointer flex items-center border justify-center border-dashed border-orange-400"
        >
          <img src={redPlus} className="w-5 h-5" />
        </div>
      )}
    </ImageUploading>
  );
};

function CreateCampaign(props: any) {
  const { id } = props;
  const user = useStoreState((state) => state.user);
  const [adTitle, setAdTitle] = useState("");
  const [adValue, setAdValue] = useState("");
  const [category, setCategory] = useState({
    label: "",
    arrayOpions: [],
  });
  const [subcategory, setSubCategory] = useState({
    label: "",
    arrayOpions: [],
  });
  const [headline, setHeadline] = useState("");
  const [description, setDescription] = useState("");
  const [gender, setGender] = useState<string[]>([]);
  const [sliderValue, setSliderValue] = React.useState([20, 45]);
  const [keywords, setKeywords] = useState("");
  const [donotTarget, setDonotTarget] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [numberOfSignups, setNumberOfSignups] = useState("");
  const [cardNumber, setCardNumber] = useState(0);
  const [country, setCountry] = useState("");
  const [image, setImage] = useState([
    {
      dataURL: "",
    },
  ]);
  const [imageArray, setImageArray] = useState<string[]>([]);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [donotTargetArray, setDonotTargetArray] = useState<string[]>([]);
  const [keywordsArray, setKeywordsArray] = useState<string[]>([]);

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

  useEffect(() => {
    if (image[0]?.dataURL !== "" && !imageArray.includes(image[0]?.dataURL)) {
      if (imageArray.length < 5) {
        setImageArray((imageArray) => [...imageArray, image[0]?.dataURL]);
      } else {
        setShowErrorMessage({ ...showErrorMessage, five: true });
      }
    }
  }, [image]);

  useEffect(() => {
    if (showErrorMessage.five === true) {
      setTimeout(() => {
        setShowErrorMessage({ ...showErrorMessage, five: false });
      }, 5000);
    }
  }, [showErrorMessage]);

  const [switchTab, setSwitchTab] = useState(1);
  const ChangeSlider = (event: any, newValue: any) => {
    setSliderValue(newValue);
  };

  const SelectCountry = (event: any) => {
    setCountry(event.target.value);
  };

  const handleChange = (event: any) => {
    setAdValue(event.target.value);
  };

  const changeGender = (event: any) => {
    const {
      target: { value },
    } = event;
    setGender(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  const navigate = useNavigate();

  return (
    <div className="w-full min-h-screen py-6 px-4">
      <div className="w-full h-12 flex items-center rounded-lg bg-white pl-4 font-bold text-xl">
        Lets get started with new campaign
      </div>
      {switchTab === 1 && (
        <div className="w-full rounded-lg bg-white mt-5 pb-4">
          <div
            className="w-full h-12 flex items-center pl-4 text-xs"
            style={{ borderBottom: "1px solid #F6F8FA" }}
          >
            Whats your advertising goal?
          </div>
          <div className="w-full flex">
            <div className="w-full">
              <div className="w-full pl-4">
                <div className="w-full">
                  <div className="w-full mt-4 flex">
                    <div className="text-sm font-semibold">Ad Title</div>
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
                      value={adTitle}
                      size="small"
                      className="w-full"
                      onChange={(e: any) => {
                        setAdTitle(e.target.value);
                      }}
                    />
                  </div>
                  {!regex.test(adTitle) && showErrorMessage.one === true && (
                    <div className="w-full text-xs font-semibold text-red-500 mt-1">
                      {errorMessageOne.isRequired}
                    </div>
                  )}
                </div>
                <div className="w-full mt-4 flex">
                  <div className="text-sm font-semibold">Ad Type</div>
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
                    value={adValue}
                    onChange={handleChange}
                  >
                    <MenuItem value="Ten" style={{ fontSize: "14px" }}>
                      Ten
                    </MenuItem>
                    <MenuItem value="Twenty" style={{ fontSize: "14px" }}>
                      Twenty
                    </MenuItem>
                    <MenuItem value="Thirty" style={{ fontSize: "14px" }}>
                      Thirty
                    </MenuItem>
                  </Select>
                </div>
                {!regex.test(adValue) && showErrorMessage.one === true && (
                  <div className="w-full text-xs font-semibold text-red-500 mt-1">
                    {errorMessageOne.isRequired}
                  </div>
                )}
              </div>

              <div className="w-full pl-4">
                <div className="w-full mt-4 flex">
                  <div className="text-sm font-semibold">Headline</div>
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
                    value={headline}
                    size="small"
                    className="w-full"
                    onChange={(e: any) => {
                      setHeadline(e.target.value);
                    }}
                  />
                </div>
                {!regex.test(headline) && showErrorMessage.one === true && (
                  <div className="w-full text-xs font-semibold text-red-500 mt-1">
                    {errorMessageOne.isRequired}
                  </div>
                )}
              </div>

              <div className="w-full pl-4">
                <div className="w-full mt-4 flex">
                  <div className="text-sm font-semibold">Upload Image</div>
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
                                x{/* <img src={cross} className="w-2 h-2" /> */}
                              </div>
                            </div>
                            <img src={val} className="w-20 h-20" />
                          </div>
                        );
                      })}
                  </div>

                  <div>
                    <ImageUploadingButton
                      value={image}
                      onChange={(newImage: any) => {
                        setDialogOpen(true);
                        setImage(newImage);
                      }}
                    />
                  </div>
                </div>
                {showErrorMessage.five === true && (
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

              <div className="w-full pl-4">
                <div className="w-full mt-4 flex">
                  <div className="text-sm font-semibold">Description</div>
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
                    value={description}
                    rows={3}
                    className="w-full"
                    onChange={(e: any) => {
                      if (description.length < 301) {
                        setDescription(e.target.value);
                      }
                    }}
                  />
                </div>
                {!regex.test(description) && showErrorMessage.one === true && (
                  <div className="w-full text-xs font-semibold text-red-500 mt-2">
                    {errorMessageOne.isRequired}
                  </div>
                )}
              </div>

              <div className="w-full flex items-center mt-8 ">
                <button
                  className="w-16 ml-4 bg-blue-500 h-8 text-white rounded-sm hover:bg-blue-400"
                  onClick={() => {
                    if (
                      regex.test(adValue) &&
                      regex.test(headline) &&
                      regex.test(description)
                    ) {
                      setSwitchTab(2);
                    } else {
                      setShowErrorMessage({ ...showErrorMessage, one: true });
                    }
                  }}
                >
                  Next
                </button>
                <hr style={{ border: "1px dashed #CCCCCC", width: "140px" }} />
                <span style={{ fontSize: "12px", color: "#CCCCCC" }}>
                  Targeting
                </span>
                <hr style={{ border: "1px dashed #CCCCCC", width: "140px" }} />
                <span style={{ fontSize: "12px", color: "#CCCCCC" }}>
                  Settings
                </span>
              </div>
            </div>
            <div className="w-full flex items-center justify-center">
              <img src={iPhone} />
            </div>
          </div>
        </div>
      )}
      {switchTab === 2 && (
        <div className="w-full rounded-lg bg-white mt-5 pb-4">
          <div
            className="w-full h-12 flex items-center pl-4 text-xs"
            style={{ borderBottom: "1px solid #F6F8FA" }}
          >
            Targetings
          </div>
          <div className="w-full flex">
            <div className="w-full">
              <div className="w-full pl-4">
                <div className="w-full mt-4 flex">
                  <div className="w-full text-sm font-semibold">Gender</div>
                </div>
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
                {gender.length === 0 && showErrorMessage.two === true && (
                  <div className="w-full text-xs font-semibold text-red-500 mt-1">
                    {errorMessageOne.isRequired}
                  </div>
                )}
              </div>
              <div className="w-full mt-4 pl-4">
                <div className="w-full mt-4 flex">
                  <div className="w-full text-sm font-semibold">Age Range</div>
                </div>
                <div className="w-1/2 mt-12">
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
              <div className="w-full pl-4">
                <div className="w-full mt-4 flex">
                  <div className="text-sm font-semibold">Category</div>
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
                    value={category.label}
                    onChange={(e: any) => {
                      setCategory({ ...category, label: e.target.value });
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
                        <MenuItem
                          value={data.label}
                          style={{ fontSize: "14px" }}
                        >
                          {data.label}
                        </MenuItem>
                      );
                    })}
                  </Select>
                </div>
                {!regex.test(category.label) &&
                  showErrorMessage.two === true && (
                    <div className="w-full text-xs font-semibold text-red-500 mt-1">
                      {errorMessageOne.isRequired}
                    </div>
                  )}
              </div>
              <div className="w-full pl-4">
                <div className="w-full mt-4 flex">
                  <div className="text-sm font-semibold">Sub Category</div>
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
                    value={subcategory.label}
                    onChange={(e: any) => {
                      setSubCategory({ ...subcategory, label: e.target.value });
                    }}
                  >
                    {subcategory.arrayOpions.length > 0 &&
                      subcategory.arrayOpions.map(
                        (data: any, index: number) => {
                          return (
                            <MenuItem value={data} style={{ fontSize: "14px" }}>
                              {data}
                            </MenuItem>
                          );
                        }
                      )}
                  </Select>
                </div>
                {!regex.test(subcategory.label) &&
                  showErrorMessage.two === true && (
                    <div className="w-full text-xs font-semibold text-red-500 mt-1">
                      {errorMessageOne.isRequired}
                    </div>
                  )}
              </div>
              <div className="w-full pl-4">
                <div className="w-full p-1 border border-blue-400 rounded mt-4">
                  <div className="w-full border border-gray-500 rounded p-1">
                    {/* <div className="w-fullflex">
                    <div className="w-full text-sm font-semibold">Keywords</div>
                  </div> */}
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
                {keywordsArray.length === 0 &&
                  showErrorMessage.two === true && (
                    <div className="w-full text-xs font-semibold text-red-500 mt-1">
                      {errorMessageOne.isRequired}
                    </div>
                  )}
              </div>

              <div className="w-full pl-4">
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
                              setDonotTargetArray([
                                ...donotTargetArray,
                                donotTarget,
                              ]);
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
                {donotTargetArray.length === 0 &&
                  showErrorMessage.two === true && (
                    <div className="w-full text-xs font-semibold text-red-500 mt-1">
                      {errorMessageOne.isRequired}
                    </div>
                  )}
              </div>

              <div className="w-full flex items-center mt-8 ">
                <button
                  className="w-16 ml-4 bg-blue-500 h-8 text-white rounded-sm hover:bg-blue-400"
                  onClick={() => {
                    setSwitchTab(1);
                    setShowErrorMessage({ ...showErrorMessage, one: false });
                  }}
                >
                  Back
                </button>
                <hr style={{ border: "1px dashed #CCCCCC", width: "140px" }} />
                <button
                  className="w-16 bg-blue-500 h-8 text-white rounded-sm hover:bg-blue-400"
                  onClick={() => {
                    if (
                      gender.length > 0 &&
                      keywordsArray.length > 0 &&
                      regex.test(category.label) &&
                      regex.test(subcategory.label) &&
                      donotTargetArray.length > 0
                    ) {
                      setSwitchTab(3);
                    } else {
                      setShowErrorMessage({ ...showErrorMessage, two: true });
                    }
                  }}
                >
                  Next
                </button>
                <hr style={{ border: "1px dashed #CCCCCC", width: "140px" }} />
                <span style={{ fontSize: "12px", color: "#CCCCCC" }}>
                  Settings
                </span>
              </div>
            </div>
            <div className="w-full flex items-center justify-center">
              <img src={mapPic} className="w-4/5" />
            </div>
          </div>
        </div>
      )}
      {switchTab === 3 && (
        <div className="w-full rounded-lg bg-white mt-5 pb-4">
          <div
            className="w-full h-12 flex items-center pl-4 text-xs"
            style={{ borderBottom: "1px solid #F6F8FA" }}
          >
            Settings
          </div>
          <div className="w-full flex">
            <div className="w-full">
              <div className="w-full pl-4">
                <div className="mt-2 w-full flex">
                  <div className="w-full mr-3">
                    <div className="w-full mb-2 text-sm font-semibold">
                      Start Date
                    </div>
                    {/* <TextField
                      type="date"
                      value={startDate}
                      size="small"
                      className="w-full"
                      onChange={(e: any) => {
                        setStartDate(e.target.value);
                      }}
                    />
                     */}
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
                    className="w-full"
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
                    className="w-full"
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

              {/* <div className="w-full pl-4">
                <div className="w-full mt-4 flex">
                  <div className="w-full text-sm font-semibold">
                    Card Number
                  </div>
                </div>
                <div className="mt-2 w-full">
                  <TextField
                    size="small"
                    type="number"
                    className="w-full"
                    onChange={(e: any) => {
                      setCardNumber(e.target.value);
                    }}
                  />
                </div>
              </div> */}

              <div className="w-full flex items-center mt-8 ">
                <button
                  className="w-16 ml-4 bg-blue-500 h-8 text-white rounded-sm hover:bg-blue-400"
                  onClick={() => {
                    setSwitchTab(2);
                    setShowErrorMessage({ ...showErrorMessage, two: false });
                  }}
                >
                  Back
                </button>
                <hr style={{ border: "1px dashed #CCCCCC", width: "140px" }} />
                <button
                  className="w-16 bg-blue-500 h-8 text-white rounded-sm hover:bg-blue-400"
                  onClick={() => {
                    if (
                      regex.test(startDate) &&
                      regex.test(endDate) &&
                      new Date(startDate).getTime() <=
                        new Date(endDate).getTime() &&
                      country.length > 0 &&
                      numberOfSignups !== ""
                    ) {
                      setSwitchTab(4);
                    } else {
                      setShowErrorMessage({ ...showErrorMessage, three: true });
                    }
                  }}
                >
                  Next
                </button>
              </div>
            </div>
            <div className="w-full flex items-center justify-center">
              <img src={group80} className="w-4/5" />
            </div>
          </div>
        </div>
      )}
      {switchTab === 4 && (
        <div className="w-full rounded-lg bg-white mt-5 pb-4">
          <div
            className="w-full h-12 flex items-center pl-4 text-xs"
            style={{ borderBottom: "1px solid #F6F8FA" }}
          >
            Preview
          </div>
          <div className="w-full flex">
            <div className="w-full">
              <div className="w-full m-5 border border-gray-200 rounded-md mt-4 mb-4 pb-4">
                <div
                  className="w-full h-10 flex items-center pl-4 text-sm"
                  style={{ borderBottom: "1px solid #EEEEEE" }}
                >
                  Add Goal
                </div>
                <div className="w-full mt-4 pl-4">
                  <div className="w-full flex">
                    <div className="w-1/3 text-xs">Ad Title:</div>
                    <div className="w-full text-xs text-gray-400">
                      {adTitle}
                    </div>
                  </div>
                  <div className="w-full flex">
                    <div className="w-1/3 text-xs">Ad Type:</div>
                    <div className="w-full text-xs text-gray-400">
                      {adValue}
                    </div>
                  </div>
                  <div className="w-full flex mt-1">
                    <div className="w-1/3 text-xs">Category:</div>
                    <div className="w-full text-xs text-gray-400">
                      {category.label}
                    </div>
                  </div>
                  <div className="w-full flex mt-1">
                    <div className="w-1/3 text-xs">Sub Category:</div>
                    <div className="w-full text-xs text-gray-400">
                      {subcategory.label}
                    </div>
                  </div>
                  <div className="w-full flex mt-1">
                    <div className="w-1/3 text-xs">Headline:</div>
                    <div className="w-full text-xs text-gray-400">
                      {headline}
                    </div>
                  </div>
                  <div className="w-full flex mt-1">
                    <div className="w-1/3 flex items-center text-xs">
                      Image:
                    </div>
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
                    <div className="w-1/3 text-xs">Description:</div>
                    <div className="w-full text-xs text-gray-400">
                      {description}
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full m-5 border border-gray-200 rounded-md mt-4 mb-4 b-4 pb-4">
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
                      {gender.map((val: any, index: any) => {
                        return (
                          <div className=" mr-2">
                            {val}
                            {index < gender.length - 1 ? "," : ""}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                  <div className="w-full flex mt-1">
                    <div className="w-1/3 text-xs">Age Range:</div>
                    <div className="w-full text-xs text-gray-400">
                      {sliderValue[0]}
                      {" - "}
                      {sliderValue[1]}
                    </div>
                  </div>
                  <div className="w-full flex mt-1">
                    <div className="w-1/3 text-xs">Keywords:</div>
                    <div className="w-full text-xs text-gray-400 flex">
                      {keywordsArray.map((data: any, index: number) => {
                        return (
                          <div className="mr-2">
                            {data}
                            {index < keywordsArray.length - 1 ? "," : ""}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                  <div className="w-full flex mt-1">
                    <div className="w-1/3 text-xs">Do Not Target:</div>

                    <div className="w-full text-xs text-gray-400 flex">
                      {donotTargetArray.map((data: any, index: number) => {
                        return (
                          <div className="mr-2">
                            {data}
                            {index < donotTargetArray.length - 1 ? "," : ""}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full m-5 border border-gray-200 rounded-md mt-4 mb-4 pb-4">
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
                      {startDate}
                    </div>
                  </div>
                  <div className="w-full flex">
                    <div className="w-1/3 text-xs">End Date:</div>
                    <div className="w-full text-xs text-gray-400">
                      {endDate}
                    </div>
                  </div>
                  <div className="w-full flex mt-1">
                    <div className="w-1/3 text-xs">Number of Signups:</div>
                    <div className="w-full text-xs text-gray-400">
                      {numberOfSignups}
                    </div>
                  </div>
                  <div className="w-full flex mt-1">
                    <div className="w-1/3 text-xs">Country:</div>
                    <div className="w-full text-xs text-gray-400 flex">
                      {country}
                    </div>
                  </div>
                  {/* <div className="w-full flex mt-1">
                    <div className="w-1/3 text-xs">Card Number:</div>
                    <div className="w-full text-xs text-gray-400">
                      {cardNumber}
                    </div>
                  </div> */}
                </div>
              </div>
              <div className="w-full ml-3 flex items-center mt-8 ">
                <div className="w-full flex ">
                  <button
                    className="w-16 ml-4 bg-blue-500 h-8 text-white rounded-sm hover:bg-blue-400"
                    onClick={() => {
                      setSwitchTab(3);
                      setShowErrorMessage({
                        ...showErrorMessage,
                        three: false,
                      });
                    }}
                  >
                    Back
                  </button>
                </div>
                <div className="w-full flex justify-end">
                  <button
                    className="w-16 ml-4 bg-blue-500 h-8 text-white rounded-sm hover:bg-blue-400"
                    onClick={async () => {
                      //   setSwitchTab(4);

                      const payload = {
                        advertiserId: user?.id,
                        campaignName: adTitle,
                        campaignType: adValue,
                        adTitle: adTitle,
                        adImage: [
                          "https://www.w3schools.com/html/img_girl.jpg",
                          "https://www.w3schools.com/html/img_girl.jpg",
                        ],
                        adDesc: description,
                        transactionCount: 90,
                        adStartDate: startDate,
                        adEndDate: endDate,
                        targetGeoCordinates: 123,
                        targetGeoName: "targetGeoName",
                        targetCategory: category.label,
                        targetSubCategory: subcategory.label,
                        targetGender: gender,
                        targetAgeRange: {
                          min: sliderValue[0],
                          max: sliderValue[1],
                        },
                        targetKeywords: keywordsArray,
                        targetDonotKeywords: donotTargetArray,
                        billingCountry: country,
                        status: "Active",
                      };
                      const { data: campaign } = await axios({
                        url: `${process.env.REACT_APP_SERVER_ENDPOINT}/campaign`,
                        method: "POST",
                        headers: {
                          Authorization: `Bearer ${user.token}`,
                        },
                        data: payload,
                      });

                      if (campaign && campaign.status == "created") {
                        toast.success("Successfully Created !", {
                          position: toast.POSITION.TOP_RIGHT,
                        });
                        // addToken(login.accessToken)
                        navigate("/dashboard");
                      }
                    }}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>

            <div className="w-full flex items-center justify-center">
              <img src={iPhone} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default CreateCampaign;
