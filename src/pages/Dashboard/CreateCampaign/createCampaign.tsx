import React, { useState, useEffect } from "react";
import MenuItem from "@mui/material/MenuItem";
import ImageUploading from "react-images-uploading";
import Select from "@mui/material/Select";
import { Input, Slider, TextField, Tooltip } from "@mui/material";
import ReactDatePicker from "react-datepicker";
import { regex } from "../../signupTest";
import { toast } from "react-toastify";
const infoLogo = require("../../../images/infoLogo.png");
const redPlus = require("../../../images/redPlus.png");
const iPhone = require("../../../images/iPhone.png");
const mapPic = require("../../../images/mapPic.png");
const group80 = require("../../../images/Group80.png");

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
        <img 
          src={redPlus}
          className='w-5 h-5'
          onClick={value ? onImageUpload : () => onImageUpdate(0)}
          {...props}
          /
        >
         
      )}
    </ImageUploading>
  );
};

function CreateCampaign() {
  const [adValue, setAdValue] = useState("");
  const [headline, setHeadline] = useState("");
  const [description, setDescription] = useState("");
  const [gender, setGender] = useState("");
  const [sliderValue, setSliderValue] = React.useState([20, 40]);
  const [keywords, setKeywords] = useState("");
  const [donotTarget, setDonotTarget] = useState("");
  const [startDate, setStartDate] = useState("");
  const [numberOfSignups, setNumberOfSignups] = useState(0);
  const [cardNumber, setCardNumber] = useState(0);
  const [country, setCountry] = useState("");
  const [image, setImage] = useState([]);
  const [dialogOpen, setDialogOpen] = useState(false);

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
    setGender(event.target.value);
  };

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
                  <div className="w-full text-sm font-semibold">Ad Type</div>
                  <div className="w-full flex justify-end">
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
              <div className="w-full pl-4">
                <div className="w-full mt-4 flex">
                  <div className="w-full text-sm font-semibold">Headline</div>
                </div>
                <div className="mt-2 w-full">
                  <TextField
                    size="small"
                    className="w-full"
                    onChange={(e: any) => {
                      setHeadline(e.target.value);
                    }}
                  />
                </div>
              </div>

              <div className="w-full pl-4">
                <div className="w-full mt-4 flex">
                  <div className="w-full text-sm font-semibold">
                    Upload Image
                  </div>
                </div>
                <div className="mt-2 w-full h-24 rounded-lg cursor-pointer flex items-center border justify-center border-dashed border-orange-400">
                  {/* <img
                    src={
                     image && image[0].dataURL !== "@" > 0
                        ? URL.createObjectURL(image[0]?.dataURL)
                        : redPlus
                    }
                    className="w-5 h-5"
                  /> */}
                  <ImageUploadingButton
                    value={image}
                    onChange={(newImage: any) => {
                      setDialogOpen(true);
                      setImage(newImage);
                    }}
                  />
                </div>
              </div>

              <div className="w-full pl-4">
                <div className="w-full mt-4 flex">
                  <div className="w-full text-sm font-semibold">
                    Description
                  </div>
                </div>
                <div className="mt-2 w-full">
                  <TextField
                    multiline
                    rows={3}
                    className="w-full"
                    onChange={(e: any) => {
                      setDescription(e.target.value);
                    }}
                  />
                </div>
              </div>

              <div className="w-full flex items-center mt-8 ">
                <button
                  className="w-16 ml-4 bg-blue-500 h-8 text-white rounded-md"
                  onClick={() => {
                    if (
                      regex.test(adValue) &&
                      regex.test(headline) &&
                      regex.test(description)
                    ) {
                      setSwitchTab(2);
                    } else {
                      toast.error("All Values are Required !", {
                        position: toast.POSITION.TOP_RIGHT,
                      });
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
                  >
                    <MenuItem value={10} style={{ fontSize: "14px" }}>
                      Male
                    </MenuItem>
                    <MenuItem value={20} style={{ fontSize: "14px" }}>
                      Female
                    </MenuItem>
                    <MenuItem value={30} style={{ fontSize: "14px" }}>
                      Other
                    </MenuItem>
                  </Select>
                </div>
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
                  />
                </div>
              </div>
              <div className="w-full pl-4">
                <div className="w-full mt-4 flex">
                  <div className="w-full text-sm font-semibold">Keywords</div>
                </div>
                <div className="mt-2 w-full">
                  <TextField
                    size="small"
                    className="w-full"
                    onChange={(e: any) => {
                      setKeywords(e.target.value);
                    }}
                  />
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
                    className="w-full"
                    onChange={(e: any) => {
                      setDonotTarget(e.target.value);
                    }}
                  />
                </div>
              </div>

              <div className="w-full flex items-center mt-8 ">
                <button
                  className="w-16 ml-4 bg-blue-500 h-8 text-white rounded-md"
                  onClick={() => {
                    if (
                      regex.test(gender) &&
                      regex.test(keywords) &&
                      regex.test(donotTarget)
                    ) {
                      setSwitchTab(3);
                    } else {
                      toast.error("All Values are Required !", {
                        position: toast.POSITION.TOP_RIGHT,
                      });
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
                    size="small"
                    className="w-full"
                    onChange={(e: any) => {
                      setStartDate(e.target.value);
                    }}
                  />
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
                    size="small"
                    className="w-full"
                    type="number"
                    onChange={(e: any) => {
                      setNumberOfSignups(e.target.value);
                    }}
                  />
                </div>
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
                  >
                    {country_list.map((data: any, index: number) => {
                      return <MenuItem value={index}>{data}</MenuItem>;
                    })}
                  </Select>{" "}
                </div>
              </div>

              <div className="w-full pl-4">
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
              </div>

              <div className="w-full flex items-center mt-8 ">
                <button
                  className="w-16 ml-4 bg-blue-500 h-8 text-white rounded-md"
                  onClick={() => {
                    if (
                      regex.test(startDate) &&
                      regex.test(country) &&
                      cardNumber !== 0 &&
                      numberOfSignups !== 0
                    ) {
                      setSwitchTab(4);
                    } else {
                      toast.error("All Values are Required !", {
                        position: toast.POSITION.TOP_RIGHT,
                      });
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
              <div className="w-full m-5 border border-gray-200 rounded-md mt-4 mb-4 b-4">
                <div
                  className="w-full h-10 flex items-center pl-4 text-sm"
                  style={{ borderBottom: "1px solid #EEEEEE" }}
                >
                  Targeting
                </div>
                <div className="w-full mt-4 pl-4">
                  <div className="w-full flex">
                    <div className="w-1/3 text-xs">Gender:</div>
                    <div className="w-full text-xs text-gray-400">{gender}</div>
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
                    <div className="w-full text-xs text-gray-400">
                      {keywords}
                    </div>
                  </div>
                  <div className="w-full flex mt-1">
                    <div className="w-1/3 text-xs">Do Not Target:</div>
                    <div className="w-full text-xs text-gray-400">
                      {donotTarget}
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
                    <div className="w-1/3 text-xs">Card Number:</div>
                    <div className="w-full text-xs text-gray-400">
                      {cardNumber}
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full flex items-center mt-8 ">
                <button
                  className="w-16 ml-5 bg-blue-500 h-8 text-white rounded-md"
                  onClick={() => {
                    // if(regex.test(startDate) && regex.test(country)&& cardNumber!==0 && numberOfSignups !==0){
                    //   setSwitchTab(4);
                    //   }else{
                    //     toast.error("All Values are Required !", {
                    //       position: toast.POSITION.TOP_RIGHT,
                    //     });
                    //   }
                  }}
                >
                  Submit
                </button>
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
