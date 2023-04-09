import React, { useState } from "react";
import Sidebar from "../SideBar/sideBar";
import { Link } from "react-router-dom";
import { isWbsite, regex } from "../../signupTest";
import CountryCode from "../../loginTest/Countrycodedropdown";
import countries from "../../signupTest/countries.json";
import { CircularProgress, Modal } from "@mui/material";

const showicon = require("../../../images/open.png");
const hideicon = require("../../../images/hide.png");

function EditProfile(props: any) {
  const {
    companyDetails,
    setCompanyDetails,
    errorMessageOne,
    setErrorMessageOne,
    showErrorMessage,
    setShowErrorMessage,
  } = props;
  const [country, setCountry] = useState({
    name: "India",
    dial_code: "+91",
    code: "IN",
  });

  return (
    <div className="w-full">
      <div className="w-full my-2">
        <div>
          <label className="block mb-1 mt-3 text-sm font-medium text-gray-900 ">
            Company Name
          </label>
          <input
            value={companyDetails.companyname}
            required={true}
            style={{ width: "70%" }}
            type="text"
            id="first_name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            onChange={(e: any) => {
              setCompanyDetails({
                ...companyDetails,
                companyname: e.target.value,
              });
            }}
          />
          {!regex.test(companyDetails.companyname) &&
            showErrorMessage.one === true && (
              <div className="w-full text-xs font-semibold text-red-500 mt-1">
                {errorMessageOne.isRequired}
              </div>
            )}
        </div>
        <div>
          <label className="block mb-1 mt-3 text-sm font-medium text-gray-900 ">
            Website
          </label>
          <input
            value={companyDetails.website}
            required={true}
            style={{ width: "70%" }}
            type="text"
            id="first_name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            onChange={(e: any) => {
              setCompanyDetails({
                ...companyDetails,
                website: e.target.value,
              });
            }}
          />
          {!regex.test(companyDetails.website) &&
            showErrorMessage.one === true && (
              <div className="w-full text-xs font-semibold text-red-500 mt-1">
                {errorMessageOne.isRequired}
              </div>
            )}
          {!isWbsite.test(companyDetails.website) &&
            regex.test(companyDetails.website) &&
            showErrorMessage.one === true && (
              <div className="w-full text-xs font-semibold text-red-500 mt-1">
                {errorMessageOne.isWebsite}
              </div>
            )}
        </div>
        <div>
          <label className="block mb-1 mt-3 text-sm font-medium text-gray-900 ">
            Contact Person
          </label>
          <input
            value={companyDetails.contactperson}
            required={true}
            style={{ width: "70%" }}
            type="text"
            id="first_name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            onChange={(e: any) => {
              setCompanyDetails({
                ...companyDetails,
                contactperson: e.target.value,
              });
            }}
          />

          {!regex.test(companyDetails.contactperson) &&
            showErrorMessage.one === true && (
              <div className="w-full text-xs font-semibold text-red-500 mt-1">
                {errorMessageOne.isRequired}
              </div>
            )}
        </div>
        <div style={{ width: "70%" }}>
          <label className="block mb-1 mt-3 text-sm font-medium text-gray-900 ">
            Contact Number
          </label>
          <div className="w-full inline-flex items-center ">
            <CountryCode
              country={country}
              setCountry={setCountry}
              countries={countries}
            />
            <input
              value={companyDetails.contactnumber}
              required={true}
              type="text"
              id="first_name"
              minLength={10}
              maxLength={10}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-r-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              onChange={(e: any) => {
                if (
                  /^[0-9]*$/.test(e.target.value) &&
                  companyDetails.contactnumber.length <= 10
                ) {
                  setCompanyDetails({
                    ...companyDetails,
                    contactnumber: e.target.value,
                  });
                }
              }}
            />
          </div>
          {!regex.test(companyDetails.contactnumber) &&
            showErrorMessage.one === true && (
              <div className="w-full text-xs font-semibold text-red-500 mt-1">
                {errorMessageOne.isRequired}
              </div>
            )}
          {regex.test(companyDetails.contactnumber) &&
            companyDetails.contactnumber.length !== 10 &&
            showErrorMessage.one === true && (
              <div className="w-full text-xs font-semibold text-red-500 mt-1">
                {errorMessageOne.isPhoneNumber}
              </div>
            )}
        </div>
        <div>
          <label className="block mb-1 mt-3 text-sm font-medium text-gray-900 ">
            Email
          </label>
          <input
            style={{ width: "70%", height: "56px" }}
            type="text"
            id="first_name"
            value={companyDetails.email}
            onChange={(e: any) => {
              setCompanyDetails({
                ...companyDetails,
                email: e.target.value,
              });
            }}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
          />
          {!regex.test(companyDetails.email) &&
            showErrorMessage.one === true && (
              <div className="w-full text-xs font-semibold text-red-500 mt-1">
                {errorMessageOne.isRequired}
              </div>
            )}
        </div>
        <div>
          <label className="block mb-1 mt-3 text-sm font-medium text-gray-900 ">
            Password
          </label>
          <input
            style={{ width: "70%", height: "56px" }}
            type="text"
            id="first_name"
            value={companyDetails.password}
            onChange={(e: any) => {
              setCompanyDetails({
                ...companyDetails,
                password: e.target.value,
              });
            }}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
          />
          {!regex.test(companyDetails.password) &&
            showErrorMessage.one === true && (
              <div className="w-full text-xs font-semibold text-red-500 mt-1">
                {errorMessageOne.isRequired}
              </div>
            )}
        </div>
      </div>
    </div>
  );
}

function ProfileAndSettings() {
  const [companyDetails, setCompanyDetails] = useState({
    companyname: "Avni Company",
    website: "www.avni-ads.com",
    contactperson: "Avni Person",
    contactnumber: "9999999999",
    email: "www.avni@gmail.com",
    password: "avniPassword",
  });

  const [errorMessageOne, setErrorMessageOne] = useState({
    isRequired: "Value is Required",
    isEmail: "Invalid Email",
    isWebsite: "Invalid Website URL",
    isPhoneNumber: "Contact number should be of 10 digits",
  });
  const [showErrorMessage, setShowErrorMessage] = useState({
    one: false,
    two: false,
  });

  const [openClose, setOpenClose] = useState(false);
  const handleOpenClose = () => setOpenClose(true);
  const handleClose = () => setOpenClose(false);
  const [savingLoader, setSavingLoader] = useState(false);

  const [openSave, setOpenSave] = useState(false);
  const handleOpenSave = () => setOpenSave(true);
  const handleSave = () => setOpenSave(false);

  const [showPassword, setShowPassword] = useState(false);
  const [editFlag, setEditFlag] = useState(false);

  return (
    <div className="w-full flex bg-neutral-100">
      <Sidebar />
      <div className="w-full flex items-center">
        <div className="w-full flex items-center justify-center">
          {editFlag === false && (
            <div className="bg-white w-1/2 p-2 rounded border border-sm">
              <div className="w-full rounded border border-sm p-4">
                <span className="text-lg font-semibold">Company Details</span>
                <div className="mt-3 flex text-sm">
                  <div>Company Name : </div>
                  <div className="pl-1">{companyDetails.companyname}</div>
                </div>
                <div className="mt-3 flex text-sm">
                  <div>Website : </div>
                  <div className="pl-1">{companyDetails.website}</div>
                </div>

                <div className="mt-3 flex text-sm">
                  <div>Contact Person : </div>
                  <div className="pl-1">{companyDetails.contactperson}</div>
                </div>

                <div className="mt-3 flex text-sm">
                  <div>Contact Number : </div>
                  <div className="pl-1">{companyDetails.contactnumber}</div>
                </div>
              </div>
              <div className="w-full rounded border border-sm p-4 my-1">
                <span className="text-lg font-semibold">Login Details</span>
                <div className="mt-3 flex text-sm">
                  <div>Email : </div>
                  <div className="pl-1">{companyDetails.email}</div>
                </div>
                <div className="mt-3 flex text-sm">
                  <div>Password : </div>
                  <div className="pl-1 flex">
                    {showPassword === false && <div>************</div>}
                    {showPassword === true && (
                      <div className="flex">
                        <div>{companyDetails.password}</div>
                      </div>
                    )}

                    <img
                      src={showPassword ? showicon : hideicon}
                      className="w-5 h-5 cursor-pointer ml-5"
                      alt="passwordicon"
                      onClick={() => {
                        setShowPassword(!showPassword);
                      }}
                    />
                  </div>
                </div>
              </div>
              <div className="w-full flex">
                <div className="mt-4 w-full flex justify-start mb-5">
                  <button className="w-16 bg-blue-500 h-8 text-white rounded-sm hover:bg-blue-400">
                    <Link to={"/dashboard"}>Back</Link>
                  </button>
                </div>
                <div className="mt-4 w-full flex justify-end mb-5">
                  <button
                    className="w-16 bg-blue-500 h-8 text-white rounded-sm hover:bg-blue-400"
                    onClick={() => {
                      setEditFlag(true);
                    }}
                  >
                    Edit
                  </button>
                </div>
              </div>
            </div>
          )}
          {editFlag === true && (
            <div className="bg-white w-1/2 p-2 rounded border border-sm">
              <EditProfile
                companyDetails={companyDetails}
                setCompanyDetails={setCompanyDetails}
                errorMessageOne={errorMessageOne}
                setErrorMessageOne={setErrorMessageOne}
                showErrorMessage={showErrorMessage}
                setShowErrorMessage={setShowErrorMessage}
              />
              <div className="w-full flex">
                <div className="mt-4 w-full flex justify-start mb-5">
                  <button
                    className="w-16 bg-blue-500 h-8 text-white rounded-sm hover:bg-blue-400"
                    onClick={() => {
                      handleOpenClose();
                    }}
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
                        <button
                          className="px-4 bg-green-500 h-8 text-white rounded-sm hover:bg-green-400 ml-3"
                          onClick={() => {
                            setEditFlag(false);
                            window.location.reload();
                          }}
                        >
                          Yes
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
                </div>
                <div className="mt-4 w-full flex justify-end mb-5">
                  <button
                    className="w-16 bg-blue-500 h-8 text-white rounded-sm hover:bg-blue-400"
                    onClick={() => {
                      //  setEditFlag()
                      if (
                        regex.test(companyDetails.companyname) &&
                        regex.test(companyDetails.contactnumber) &&
                        regex.test(companyDetails.contactperson) &&
                        regex.test(companyDetails.website) &&
                        isWbsite.test(companyDetails.website) &&
                        companyDetails.contactnumber.length === 10 &&
                        regex.test(companyDetails.email) &&
                        regex.test(companyDetails.password)
                      ) {
                        //do nothing
                        handleOpenSave()
                      } else {
                        setShowErrorMessage({ ...showErrorMessage, one: true });
                      }
                    }}
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
                      <button className="px-4 bg-green-500 h-8 text-white flex items-center justify-center rounded-sm hover:bg-green-400 ml-3"
                      onClick={()=>{
                    //     setSavingLoader(true);
                    //   const payload = {
                    //     campaignId: id,
                    //     advertiserId: user?.id,
                    //     campaignName: adTitle,
                    //     campaignType: adValue,
                    //     adTitle: adTitle,
                    //     adImage: imageArray,
                    //     adDesc: description,
                    //     transactionCount: 90,
                    //     adStartDate: startDate,
                    //     adEndDate: endDate,
                    //     targetGeoCordinates: 123,
                    //     targetGeoName: "targetGeoName",
                    //     targetCategory: category[0],
                    //     targetSubCategory: subcategory[0],
                    //     targetGender: gender,
                    //     targetAgeRange: {
                    //       min: sliderValue[0],
                    //       max: sliderValue[1],
                    //     },
                    //     targetKeywords: keywordsArray,
                    //     targetDonotKeywords: donotTargetArray,
                    //     billingCountry: country,
                    //     status: "Active",
                    //   };
                    //   const { data: campaign } = await axios({
                    //     url: `${process.env.REACT_APP_SERVER_ENDPOINT}/campaign/update`,
                    //     method: "POST",
                    //     headers: {
                    //       Authorization: `Bearer ${user.token}`,
                    //     },
                    //     data: payload,
                    // });

                    //   if (campaign && campaign.status == "success") {
                    //     toast.success("Successfully Created !", {
                    //       position: toast.POSITION.TOP_RIGHT,
                    //     });
                    //     navigate('/draft_campaign')
                        
                    //   }else{
                    //     toast.error("Something went wrong !", {
                    //       position: toast.POSITION.TOP_RIGHT,
                    //     });
                    //     setSavingLoader(false)
                    //   }
                      }}
                      >
                        {savingLoader === true ? <CircularProgress size={20} color="success" /> : "Yes"}
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
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProfileAndSettings;
