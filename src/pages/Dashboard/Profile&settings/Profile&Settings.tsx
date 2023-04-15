import React, { useState, useEffect } from "react";
import Sidebar from "../SideBar/sideBar";
import { Link } from "react-router-dom";
import { isWbsite, regex } from "../../signupTest";
import CountryCode from "../../loginTest/Countrycodedropdown";
import countries from "../../signupTest/countries.json";
import { CircularProgress, Modal } from "@mui/material";
import axios from "axios";
import { useStoreState } from "../../../store/easy-peasy/hooks";
import { toast } from "react-toastify";

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
    url,
    user,
  } = props;
  const [country, setCountry] = useState({
    name: "India",
    dial_code: "+91",
    code: "IN",
  });
  const [openClose, setOpenClose] = useState(false);
  const handleClose = () => setOpenClose(false);

  const [isPassword, setIsPassword] = useState(false);

  const [passwordDetails, setPasswordDetails] = useState({
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  return (
    <div className="w-full">
      <div className="w-full my-2">
        <div>
          <label className="block mb-1 mt-3 text-sm font-medium text-gray-900 ">
            Company Name
          </label>
          <input
            value={companyDetails.companyName}
            required={true}
            style={{ width: "70%" }}
            type="text"
            id="first_name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            onChange={(e: any) => {
              setCompanyDetails({
                ...companyDetails,
                companyName: e.target.value,
              });
            }}
          />
          {!regex.test(companyDetails.companyName) &&
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
            value={companyDetails.contactPerson}
            required={true}
            style={{ width: "70%" }}
            type="text"
            id="first_name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            onChange={(e: any) => {
              setCompanyDetails({
                ...companyDetails,
                contactPerson: e.target.value,
              });
            }}
          />

          {!regex.test(companyDetails.contactPerson) &&
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
              value={companyDetails.companyNumber}
              required={true}
              type="text"
              id="first_name"
              minLength={10}
              maxLength={10}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-r-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              onChange={(e: any) => {
                if (
                  /^[0-9]*$/.test(e.target.value) &&
                  companyDetails.companyNumber.length <= 10
                ) {
                  setCompanyDetails({
                    ...companyDetails,
                    companyNumber: e.target.value,
                  });
                }
              }}
            />
          </div>
          {!regex.test(companyDetails.companyNumber) &&
            showErrorMessage.one === true && (
              <div className="w-full text-xs font-semibold text-red-500 mt-1">
                {errorMessageOne.isRequired}
              </div>
            )}
          {regex.test(companyDetails.companyNumber) &&
            companyDetails.companyNumber.length !== 10 &&
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
          <div className="w-full flex items-center">
            <input
              style={{ width: "70%", height: "56px" }}
              type="password"
              id="first_name"
              value={"**********"}
              disabled
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            />
            <button
              className="mx-3 h-8 hover:bg-green-300 font-semibold  bg-[#30D792] text-xs text-white px-2 rounded-[20px]"
              onClick={() => {
                setOpenClose(true);
              }}
            >
              Change Password
            </button>
          </div>
        </div>
        <Modal
          className="w-full h-full flex justify-center items-center"
          open={openClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <div className="w-1/3 p-4  bg-white rounded flex flex-col justify-center items-start">
            <div className="w-full text-center text-lg font-semibold">
              {" "}
              Update the password
            </div>
            <div className="w-full">
              <label className="block mb-1 mt-3 text-sm font-medium text-gray-900 ">
                Old Password
              </label>
              <div className="w-full flex items-center">
                <input
                  style={{ width: "100%", height: "56px" }}
                  type="password"
                  id="first_name"
                  value={passwordDetails.oldPassword}
                  onChange={(e: any) => {
                    setPasswordDetails({
                      ...passwordDetails,
                      oldPassword: e.target.value,
                    });
                  }}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                />
              </div>
              {!regex.test(passwordDetails.oldPassword) &&
                isPassword === true && (
                  <div className="w-full text-xs font-semibold text-red-500 mt-1">
                    {errorMessageOne.isRequired}
                  </div>
                )}
            </div>
            <div className="w-full">
              <label className="block mb-1 mt-3 text-sm font-medium text-gray-900 ">
                New Password
              </label>
              <div className="w-full flex items-center">
                <input
                  style={{ width: "100%", height: "56px" }}
                  type="password"
                  id="first_name"
                  value={passwordDetails.newPassword}
                  onChange={(e: any) => {
                    setPasswordDetails({
                      ...passwordDetails,
                      newPassword: e.target.value,
                    });
                  }}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                />
              </div>
              {!regex.test(passwordDetails.newPassword) &&
                isPassword === true && (
                  <div className="w-full text-xs font-semibold text-red-500 mt-1">
                    {errorMessageOne.isRequired}
                  </div>
                )}
            </div>
            <div className="w-full">
              <label className="block mb-1 mt-3 text-sm font-medium text-gray-900 ">
                Confirm Password
              </label>
              <div className="w-full flex items-center">
                <input
                  style={{ width: "100%", height: "56px" }}
                  type="password"
                  id="first_name"
                  value={passwordDetails.confirmPassword}
                  onChange={(e: any) => {
                    setIsPassword(false)
                    setPasswordDetails({
                      ...passwordDetails,
                      confirmPassword: e.target.value,
                    });
                  }}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                />
              </div>
              {!regex.test(passwordDetails.confirmPassword) &&
                isPassword === true && (
                  <div className="w-full text-xs font-semibold text-red-500 mt-1">
                    {errorMessageOne.isRequired}
                  </div>
                )}
                {regex.test(passwordDetails.confirmPassword) &&
                isPassword === true && passwordDetails.newPassword !== passwordDetails.confirmPassword &&(
                  <div className="w-full text-xs font-semibold text-red-500 mt-1">
                   New password and confirm password are not matched
                  </div>
                )}
            </div>
            <div className="w-full flex justify-center mt-3">
              <button
                className="px-4 w-24 bg-green-500 h-8 text-white rounded-[20px] hover:bg-green-400 ml-3"
                onClick={async() => {
                  if (
                    regex.test(passwordDetails.newPassword) &&
                    regex.test(passwordDetails.oldPassword) &&
                    regex.test(passwordDetails.confirmPassword) &&
                    passwordDetails.newPassword ===
                      passwordDetails.confirmPassword
                  ) {
                    const payload = {
                      email:companyDetails.email,
                      old_password:passwordDetails.oldPassword,
                      new_password:passwordDetails.newPassword,
                    };

                    const { data: campaign } = await axios({
                      url: `${process.env.REACT_APP_SERVER_ENDPOINT}/password/update`,
                      method: "POST",
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
                      window.location.reload();
                    }
                  } else setIsPassword(true);
                }}
              >
                Update
              </button>
              <button
                className="px-4 w-24 bg-orange-500 h-8 text-white rounded-[20px] hover:bg-orange-400 ml-3"
                onClick={() => {
                  handleClose();
                  setIsPassword(false);
                 setPasswordDetails({
                    oldPassword: "",
                    newPassword: "",
                    confirmPassword: "",
                  })
                }}
              >
                Close
              </button>
            </div>
          </div>
        </Modal>
      </div>
    </div>
  );
}

function ProfileAndSettings() {
  const [companyDetails, setCompanyDetails] = useState({
    companyName: "",
    website: "",
    contactPerson: "",
    companyNumber: "",
    email: "",
    name: "",
  });

  const [errorMessageOne, setErrorMessageOne] = useState({
    isRequired: "Value is Required",
    isEmail: "Invalid Email",
    isWebsite: "Invalid Website URL",
    isPhoneNumber: "Contact number should be of 10 digits",
    isMatchPassword: "Password and Confirm password are not matched",
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
  const user = useStoreState((state) => state.user);
  const queryUrl = window.location.pathname;

  useEffect(() => {
    const fetchData = async () => {
      const { data: campaigns } = await axios({
        url: `${process.env.REACT_APP_SERVER_ENDPOINT}/profile/view?id=${user.id}`,
        method: "GET",
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });

      setCompanyDetails(campaigns?.data[0]);
    };
    fetchData();
  }, []);

  return (
    <div className="w-full flex bg-neutral-100">
      <Sidebar />
      <div className="w-full flex items-center">
        <div className="w-full flex items-center justify-center">
          {editFlag === false && companyDetails?.companyName !== "" && (
            <div className="bg-white w-1/2 p-2 rounded border border-sm">
              <div className="w-full rounded border border-sm p-4">
                <span className="text-lg font-semibold">Company Details</span>
                <div className="mt-3 flex text-sm">
                  <div>Company Name : </div>
                  <div className="pl-1">{companyDetails.companyName}</div>
                </div>
                <div className="mt-3 flex text-sm">
                  <div>Website : </div>
                  <div className="pl-1">{companyDetails.website}</div>
                </div>

                <div className="mt-3 flex text-sm">
                  <div>Contact Person : </div>
                  <div className="pl-1">{companyDetails.contactPerson}</div>
                </div>

                <div className="mt-3 flex text-sm">
                  <div>Contact Number : </div>
                  <div className="pl-1">{companyDetails.companyNumber}</div>
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
                  <div className="pl-1">**********</div>
                </div>
              </div>
              <div className="w-full flex">
                <div className="mt-4 w-full flex justify-start mb-5">
                  <button className="w-24 bg-gray-500 h-8 text-white rounded-[20px] hover:bg-gray-400">
                    <Link to={"/dashboard"}>Back</Link>
                  </button>
                </div>
                <div className="mt-4 w-full flex justify-end mb-5">
                  <button
                    className="w-24 bg-[#30D792] h-8 text-white rounded-[20px] hover:bg-green-300"
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
                user={user}
              />
              <div className="w-full flex">
                <div className="mt-4 w-full flex justify-start mb-5">
                  <button
                    className="w-24 bg-orange-500 h-8 text-white rounded-[20px] hover:bg-orange-400"
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
                          className="px-4 w-24 bg-green-500 h-8 text-white rounded-[20px] hover:bg-green-400 ml-3"
                          onClick={() => {
                            setEditFlag(false);
                            window.location.reload();
                          }}
                        >
                          Yes
                        </button>
                        <button
                          className="px-4 w-24 bg-orange-500 h-8 text-white rounded-[20px] hover:bg-orange-400 ml-3"
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
                    className="w-24 bg-[#30D792] h-8 text-white rounded-[20px] hover:bg-green-300"
                    onClick={() => {
                      //  setEditFlag()

                      if (
                        regex.test(companyDetails.companyName) &&
                        regex.test(companyDetails.companyNumber) &&
                        regex.test(companyDetails.contactPerson) &&
                        regex.test(companyDetails.website) &&
                        isWbsite.test(companyDetails.website) &&
                        companyDetails.companyNumber.length === 10 &&
                        regex.test(companyDetails.email)
                      ) {
                        //do nothing
                        handleOpenSave();
                      } else {
                        setShowErrorMessage({
                          ...showErrorMessage,
                          two: false,
                        });
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
                        <button
                          className="px-4 w-24 bg-green-500 h-8 text-white flex items-center justify-center rounded-[20px] hover:bg-green-400 ml-3"
                          onClick={async () => {
                            const payload = {
                              id: user.id,
                              name: companyDetails.name,
                              email: companyDetails.email,
                              companyName: companyDetails.companyName,
                              website: companyDetails.website,
                              contactPerson: companyDetails.contactPerson,
                              companyNumber: companyDetails.companyNumber,
                            };

                            const { data: campaign } = await axios({
                              url: `${process.env.REACT_APP_SERVER_ENDPOINT}/profile/update`,
                              method: "POST",
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
                              window.location.reload();
                            }
                          }}
                        >
                          {savingLoader === true ? (
                            <CircularProgress size={20} color="success" />
                          ) : (
                            "Yes"
                          )}
                        </button>
                        <button
                          className="px-4 w-24 bg-orange-500 h-8 text-white rounded-[20px] hover:bg-orange-400 ml-3"
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
