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
import ReactDatePicker from "react-datepicker";
import { regex } from "../../signupTest";
import { toast } from "react-toastify";
import { Navigate, useNavigate } from "react-router-dom";
const infoLogo = require("../../../images/infoLogo.png");
const redPlus = require("../../../images/redPlus.png");
const iPhone = require("../../../images/iPhone.png");
const mapPic = require("../../../images/mapPic.png");
const group80 = require("../../../images/Group80.png");
const cross = require("../../../images/cross.png");

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
  "Israel",
  "Italy",
  "Jamaica",
  "Japan",
  "Jersey",
  "Jordan",
  "Kazakhstan",
  "Kenya",
  "Kuwait",
  "Kyrgyz Republic",
  "Laos",
  "Latvia",
  "Lebanon",
  "Lesotho",
  "Liberia",
  "Libya",
  "Liechtenstein",
  "Lithuania",
  "Luxembourg",
  "Macau",
  "Macedonia",
  "Madagascar",
  "Malawi",
  "Malaysia",
  "Maldives",
  "Mali",
  "Malta",
  "Mauritania",
  "Mauritius",
  "Mexico",
  "Moldova",
  "Monaco",
  "Mongolia",
  "Montenegro",
  "Montserrat",
  "Morocco",
  "Mozambique",
  "Namibia",
  "Nepal",
  "Netherlands",
  "Netherlands Antilles",
  "New Caledonia",
  "New Zealand",
  "Nicaragua",
  "Niger",
  "Nigeria",
  "Norway",
  "Oman",
  "Pakistan",
  "Palestine",
  "Panama",
  "Papua New Guinea",
  "Paraguay",
  "Peru",
  "Philippines",
  "Poland",
  "Portugal",
  "Puerto Rico",
  "Qatar",
  "Reunion",
  "Romania",
  "Russia",
  "Rwanda",
  "Saint Pierre &amp; Miquelon",
  "Samoa",
  "San Marino",
  "Satellite",
  "Saudi Arabia",
  "Senegal",
  "Serbia",
  "Seychelles",
  "Sierra Leone",
  "Singapore",
  "Slovakia",
  "Slovenia",
  "South Africa",
  "South Korea",
  "Spain",
  "Sri Lanka",
  "St Kitts &amp; Nevis",
  "St Lucia",
  "St Vincent",
  "St. Lucia",
  "Sudan",
  "Suriname",
  "Swaziland",
  "Sweden",
  "Switzerland",
  "Syria",
  "Taiwan",
  "Tajikistan",
  "Tanzania",
  "Thailand",
  "Timor L'Este",
  "Togo",
  "Tonga",
  "Trinidad &amp; Tobago",
  "Tunisia",
  "Turkey",
  "Turkmenistan",
  "Turks &amp; Caicos",
  "Uganda",
  "Ukraine",
  "United Arab Emirates",
  "United Kingdom",
  "Uruguay",
  "Uzbekistan",
  "Venezuela",
  "Vietnam",
  "Virgin Islands (US)",
  "Yemen",
  "Zambia",
  "Zimbabwe",
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

function CreateCampaign() {
  const [adValue, setAdValue] = useState("");
  const [category, setCategory] = useState("");
  const [headline, setHeadline] = useState("");
  const [description, setDescription] = useState("");
  const [gender, setGender] = useState<string[]>([]);
  const [sliderValue, setSliderValue] = React.useState([18, 60]);
  const [keywords, setKeywords] = useState("");
  const [donotTarget, setDonotTarget] = useState("");
  const [startDate, setStartDate] = useState("");
  const [numberOfSignups, setNumberOfSignups] = useState("");
  const [cardNumber, setCardNumber] = useState(0);
  const [country, setCountry] = useState<string[]>([]);
  const [image, setImage] = useState([
    {
      dataURL: "",
    },
  ]);
  const [imageArray, setImageArray] = useState<string[]>([]);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [donotTargetArray, setDonotTargetArray] = useState<string[]>([]);
  const [keywordsArray, setKeywordsArray] = useState<string[]>([]);

  const theme = useTheme();

  const data3 =
    "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";

  useEffect(() => {
    if (image[0]?.dataURL !== "" && !imageArray.includes(image[0]?.dataURL)) {
      setImageArray((imageArray) => [...imageArray, image[0]?.dataURL]);
    }
  }, [image]);

  const [errorMessageOne, setErrorMessageOne] = useState({
    isRequired: "Value is Required",
  });
  const [showErrorMessage, setShowErrorMessage] = useState({
    one: false,
    two: false,
    three: false,
  });

  const [switchTab, setSwitchTab] = useState(1);
  const ChangeSlider = (event: any, newValue: any) => {
    setSliderValue(newValue);
  };

  const SelectCountry = (event: any) => {
    const {
      target: { value },
    } = event;
    setCountry(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
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
                    value={category}
                    onChange={(e: any) => {
                      setCategory(e.target.value);
                    }}
                  >
                    <MenuItem value="Category1" style={{ fontSize: "14px" }}>
                      Category1
                    </MenuItem>
                    <MenuItem value="Category2" style={{ fontSize: "14px" }}>
                      Category2
                    </MenuItem>
                    <MenuItem value="Category3" style={{ fontSize: "14px" }}>
                      Category3
                    </MenuItem>
                  </Select>
                </div>
                {!regex.test(category) && showErrorMessage.one === true && (
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
                      setDescription(e.target.value);
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
                      regex.test(category) &&
                      regex.test(headline) &&
                      regex.test(description)
                    ) {
                      setSwitchTab(2);
                    } else {
                      setShowErrorMessage({ ...showErrorMessage, one: true });
                      // toast.error("All Values are Required !", {
                      //   position: toast.POSITION.TOP_RIGHT,
                      // });
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
                    step={5}
                  />
                </div>
              </div>
              <div className="w-full pl-4">
                <div className="w-full mt-4 flex">
                  <div className="w-full text-sm font-semibold">Keywords</div>
                </div>
                <div className="mt-2 w-full">
                  <TextField
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
                {keywordsArray.length === 0 &&
                  showErrorMessage.two === true && (
                    <div className="w-full text-xs font-semibold text-red-500 mt-1">
                      {errorMessageOne.isRequired}
                    </div>
                  )}
                <div className="w-full mt-2 mb-2 flex">
                  {keywordsArray.map((data: any, index: any) => {
                    if (data !== "") {
                      return (
                        <div
                          key={index}
                          className=" text-gray-300 text-xs p-2 border border-gray-300 mr-2 rounded-md flex items-center justify-center h-5"
                        >
                          {data}
                          <div className="ml-3">
                            <img
                              src={cross}
                              className="w-2 h-2 cursor-pointer"
                              onClick={() => {
                                setKeywordsArray([
                                  ...keywordsArray.slice(0, index),
                                  ...keywordsArray.slice(
                                    index + 1,
                                    keywordsArray.length
                                  ),
                                ]);
                              }}
                            />
                          </div>
                        </div>
                      );
                    }
                  })}
                </div>
              </div>

              <div className="w-full pl-4">
                <div className="w-full mt-4 flex">
                  <div className="w-full text-sm font-semibold">
                    Do not Target
                  </div>
                </div>
                <div className="mt-2 w-full">
                  <TextField
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
                {donotTargetArray.length === 0 &&
                  showErrorMessage.two === true && (
                    <div className="w-full text-xs font-semibold text-red-500 mt-1">
                      {errorMessageOne.isRequired}
                    </div>
                  )}
                <div className="w-full mt-2 mb-2 flex">
                  {donotTargetArray.map((data: any, index: any) => {
                    if (data !== "") {
                      return (
                        <div
                          key={index}
                          className=" text-gray-300 text-xs p-2 border border-gray-300 mr-2 rounded-md flex items-center justify-center h-5"
                        >
                          {data}
                          <div className="ml-3">
                            <img
                              src={cross}
                              className="w-2 h-2 cursor-pointer"
                              onClick={() => {
                                setDonotTargetArray([
                                  ...donotTargetArray.slice(0, index),
                                  ...donotTargetArray.slice(
                                    index + 1,
                                    donotTargetArray.length
                                  ),
                                ]);
                              }}
                            />
                          </div>
                        </div>
                      );
                    }
                  })}
                </div>
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
                <div className="w-full mt-4 flex">
                  <div className="w-full text-sm font-semibold">Start Date</div>
                </div>
                <div className="mt-2 w-full">
                  <TextField
                    type="date"
                    value={startDate}
                    size="small"
                    className="w-full"
                    onChange={(e: any) => {
                      setStartDate(e.target.value);
                    }}
                  />
                </div>
                {!regex.test(startDate) && showErrorMessage.three === true && (
                  <div className="w-full text-xs font-semibold text-red-500 mt-1">
                    {errorMessageOne.isRequired}
                  </div>
                )}
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
                    <div className="w-1/3 text-xs">Ad Type:</div>
                    <div className="w-full text-xs text-gray-400">
                      {adValue}
                    </div>
                  </div>
                  <div className="w-full flex mt-1">
                    <div className="w-1/3 text-xs">Category:</div>
                    <div className="w-full text-xs text-gray-400">
                      {category}
                    </div>
                  </div>
                  <div className="w-full flex mt-1">
                    <div className="w-1/3 text-xs">Headline:</div>
                    <div className="w-full text-xs text-gray-400">
                      {headline}
                    </div>
                  </div>
                  <div className="w-full flex mt-1">
                    <div className="w-1/3 text-xs">Image:</div>
                    <div className="w-full text-xs text-gray-400">
                      {/* <img src={image} /> */}
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
                        return <div className=" mr-2">{val},</div>;
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
                        return <div className="mr-2">{data},</div>;
                      })}
                    </div>
                  </div>
                  <div className="w-full flex mt-1">
                    <div className="w-1/3 text-xs">Do Not Target:</div>

                    <div className="w-full text-xs text-gray-400 flex">
                      {donotTargetArray.map((data: any, index: number) => {
                        return <div className="mr-2">{data},</div>;
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
                    <div className="w-1/3 text-xs">Start & End Date:</div>
                    <div className="w-full text-xs text-gray-400">
                      {startDate}
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
                      {country.map((data: any, index: number) => {
                        return (
                          <div key={index} className="mr-2">
                            {data},
                          </div>
                        );
                      })}
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
                    onClick={() => {
                      //   setSwitchTab(4);
                      localStorage.setItem(
                        "avniInfo",
                        JSON.stringify({
                          adtype: adValue,
                          category: category,
                          headline: headline,
                          description: description,
                          gender: gender,
                          agerange: sliderValue,
                          donottarget: donotTargetArray,
                          keywords: keywordsArray,
                          startdate: startDate,
                          numberofsignups: numberOfSignups,
                          billingcountry: country,
                          cardnumber: cardNumber,
                        })
                      );
                      navigate("/createdcampaign");
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