import { useState, useEffect, useContext } from "react";
import { Switch } from "@headlessui/react";
import PhoneInput from "react-phone-number-input";
import DatePicker from "react-datepicker";
import {
  optimisticOptions,
  queries,
  getRequest,
  updateRequest,
} from "../../react-query";
import { useMutation, useQuery } from "react-query";
import { AppContext } from "../../context/appContext";
import { useNavigate } from "react-router-dom";
// import SignInlogo from'../../images/SignInlogo.png';
import { FramLeft } from "../util/framLeft";
import { toast } from "react-toastify";

export const regex = /^(?!\s*$).+/;

const SignupTest = () => {
  const navigate = useNavigate();
  const [nextStep, setnextStep] = useState(false);
  const [companyDetails, setCompanyDetails] = useState({
    companyname: "",
    website: "",
    contactperson: "",
    contactnumber: "",
  });

  const [userDetails, setUserDetails] = useState({
    email: "",
    password: "",
    confirmpassword: "",
  });

  const [selectCheck, setSelectCheck] = useState(false);

  return (
    <div className="grid gap-4 grid-cols-2 h-screen">
      <FramLeft />
      <div
        className="grid gap-4 grid-cols-1"
        style={{
          width: "100%",
        }}
      >
        <div
          style={{
            fontFamily: "Open Sans",
            fontStyle: "normal",
            fontWeight: 300,
            fontSize: "21px",
            lineHeight: "27px",
            color: "#333333",
          }}
        >
          Great relationships starts here
        </div>

        <div
          style={{
            fontFamily: "Open Sans",
            fontStyle: "normal",
            fontWeight: 200,
            fontSize: "20px",
            lineHeight: "26px",
            color: "#AAAAAA",
          }}
        >
          Enter your information.
        </div>
        <div>
          <ul
            className="w-100 relative m-0 list-none overflow-hidden p-0 transition-[height] duration-200 ease-in-out"
            data-te-stepper-init
            data-te-stepper-type="vertical"
          >
            <li
              data-te-stepper-step-ref
              className="relative h-fit after:absolute after:left-[2.45rem] after:top-[3.6rem] after:mt-px after:h-[calc(100%-2.45rem)] after:w-px after:bg-[#e0e0e0] after:content-[''] dark:after:bg-neutral-600"
            >
              <div
                data-te-stepper-head-ref
                className="flex cursor-pointer items-center p-6 leading-[1.3rem] no-underline after:bg-[#e0e0e0] after:content-[''] hover:bg-[#f9f9f9] focus:outline-none dark:after:bg-neutral-600 dark:hover:bg-[#3b3b3b]"
              >
                <span
                  data-te-stepper-head-icon-ref
                  style={{
                    backgroundColor: nextStep ? "#01A4EF" : "bg-[#ebedef]",
                  }}
                  className="mr-3 flex h-[1.938rem] w-[1.938rem] items-center justify-center rounded-full bg-[#ebedef] text-sm font-medium text-[#40464f]"
                >
                  1
                </span>
                <span
                  data-te-stepper-head-text-ref
                  className="text-neutral-500 after:absolute after:flex after:text-[0.8rem] after:content-[data-content] dark:text-neutral-300"
                >
                  <span>Company Details</span>
                  <br />
                  <span
                    style={{
                      fontFamily: "Open Sans",
                      fontStyle: "normal",
                      fontWeight: 400,
                      fontSize: "14px",
                      lineHeight: "20px",
                      color: "#AAAAAA",
                    }}
                  >
                    Enter all your company information
                  </span>
                </span>
              </div>
              {!nextStep && (
                <div
                  data-te-stepper-content-ref
                  className="ps-1 transition-[height, margin-bottom, padding-top, padding-bottom] left-0 overflow-hidden pr-6 pb-6 pl-[3.75rem] duration-300 ease-in-out"
                >
                  <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      Company Name
                    </label>
                    <input
                      value={companyDetails.companyname}
                      required={true}
                      style={{ width: "70%" }}
                      type="text"
                      id="first_name"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      onChange={(e: any) => {
                        setCompanyDetails({
                          ...companyDetails,
                          companyname: e.target.value,
                        });
                      }}
                    />
                  </div>
                  <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      Website
                    </label>
                    <input
                      value={companyDetails.website}
                      required={true}
                      style={{ width: "70%" }}
                      type="text"
                      id="first_name"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      onChange={(e: any) => {
                        setCompanyDetails({
                          ...companyDetails,
                          website: e.target.value,
                        });
                      }}
                    />
                  </div>
                  <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      Contact Person
                    </label>
                    <input
                      value={companyDetails.contactperson}
                      required={true}
                      style={{ width: "70%" }}
                      type="text"
                      id="first_name"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      onChange={(e: any) => {
                        setCompanyDetails({
                          ...companyDetails,
                          contactperson: e.target.value,
                        });
                      }}
                    />
                  </div>
                  <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      Contact Number
                    </label>
                    <input
                      value={companyDetails.contactnumber}
                      required={true}
                      style={{ width: "70%" }}
                      type="text"
                      id="first_name"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      onChange={(e: any) => {
                        setCompanyDetails({
                          ...companyDetails,
                          contactnumber: e.target.value,
                        });
                      }}
                    />
                  </div>
                  <div>
                    <button
                      type="submit"
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "center",
                        alignItems: "center",
                        padding: "16px 214px",
                        gap: "10px",
                        // position: 'absolute',
                        width: "40%",
                        height: "56px",
                        left: "1157px",
                        top: "816px",
                        background: "#01A4EF",
                        borderRadius: "12px",
                        marginTop: "10px",
                      }}
                      onClick={() => {
                        // navigate('/signup');
                        if (
                          regex.test(companyDetails.companyname) &&
                          regex.test(companyDetails.contactnumber) &&
                          regex.test(companyDetails.contactperson) &&
                          regex.test(companyDetails.website)
                        ) {
                          setnextStep(true);
                        } else {
                          toast.error("All Values are Required !", {
                            position: toast.POSITION.TOP_RIGHT,
                          });
                        }
                      }}
                    >
                      <div
                        style={{
                          color: "#FFFFFF",
                        }}
                      >
                        Next
                      </div>
                    </button>
                    <div>
                      <span
                        style={{
                          fontFamily: "Open Sans",
                          fontStyle: "normal",
                          fontWeight: 400,
                          fontSize: "14px",
                          lineHeight: "20px",
                          color: "#333333",
                        }}
                      >
                        Already have an account?
                      </span>
                      <span
                        style={{
                          fontFamily: "Open Sans",
                          fontStyle: "normal",
                          fontWeight: 400,
                          fontSize: "14px",
                          lineHeight: "20px",
                          color: "#FF6154",
                        }}
                      >
                        Login
                      </span>
                    </div>
                  </div>
                </div>
              )}
            </li>
            <li
              data-te-stepper-step-ref
              className="relative h-fit after:absolute after:left-[2.45rem] after:top-[3.6rem] after:mt-px after:h-[calc(100%-2.45rem)] after:w-px after:bg-[#e0e0e0] after:content-[''] dark:after:bg-neutral-600"
            >
              <div
                data-te-stepper-head-ref
                className="flex cursor-pointer items-center pl-6 leading-[1.3rem] no-underline after:bg-[#e0e0e0] after:content-[''] hover:bg-[#f9f9f9] focus:outline-none dark:after:bg-neutral-600 dark:hover:bg-[#3b3b3b]"
              >
                <span
                  data-te-stepper-head-icon-ref
                  className="mr-3 flex h-[1.938rem] w-[1.938rem] items-center justify-center rounded-full bg-[#ebedef] text-sm font-medium text-[#40464f]"
                >
                  2
                </span>
                <span
                  data-te-stepper-head-text-ref
                  className="text-neutral-500 after:absolute after:flex after:text-[0.8rem] after:content-[data-content] dark:text-neutral-300"
                >
                  Login Info
                </span>
              </div>
              <div
                data-te-stepper-content-ref
                className="ps-1 transition-[height, margin-bottom, padding-top, padding-bottom] left-0 overflow-hidden pr-6 pb-6 pl-[3.75rem] duration-300 ease-in-out"
              >
                <span
                  style={{
                    fontFamily: "Open Sans",
                    fontStyle: "normal",
                    fontWeight: 400,
                    fontSize: "14px",
                    color: "#AAAAAA",
                  }}
                >
                  Enter login details
                </span>
              </div>
              {nextStep && (
                <div
                  data-te-stepper-content-ref
                  className="ps-1 transition-[height, margin-bottom, padding-top, padding-bottom] left-0 overflow-hidden pr-6 pb-6 pl-[3.75rem] duration-300 ease-in-out"
                >
                  <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      Email
                    </label>
                    <input
                      style={{ width: "70%", height: "56px" }}
                      type="text"
                      id="first_name"
                      value={userDetails.email}
                      onChange={(e: any) => {
                        setUserDetails({
                          ...userDetails,
                          email: e.target.value,
                        });
                      }}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      Password
                    </label>
                    <input
                      style={{ width: "70%", height: "56px" }}
                      type="text"
                      id="first_name"
                      value={userDetails.password}
                      onChange={(e: any) => {
                        setUserDetails({
                          ...userDetails,
                          password: e.target.value,
                        });
                      }}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      Conform Password
                    </label>
                    <input
                      style={{ width: "70%", height: "56px" }}
                      type="text"
                      id="first_name"
                      value={userDetails.confirmpassword}
                      onChange={(e: any) => {
                        setUserDetails({
                          ...userDetails,
                          confirmpassword: e.target.value,
                        });
                      }}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <div className="flex items-center h-8">
                      <div className="flex items-center">
                        <input
                          className="h-4 w-4 rounded-sm mr-2 cursor-pointer"
                          type="checkbox"
                          checked={selectCheck}
                          id="checkboxDefault"
                          onClick={() => {
                            setSelectCheck(!selectCheck);
                          }}
                        />
                        <label className="inline-block pl-[0.15rem] hover:cursor-pointer">
                          <span>Accept all the &nbsp;</span>
                          <span
                            style={{
                              color: "#01A4EF",
                            }}
                          >
                            Terms &nbsp;
                          </span>
                          <span>& &nbsp;</span>
                          <span
                            style={{
                              color: "#01A4EF",
                            }}
                          >
                            Conditions
                          </span>
                        </label>
                      </div>
                    </div>
                  </div>
                  <div>
                    <button
                      type="submit"
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "center",
                        alignItems: "center",
                        width: "70%",
                        height: "56px",
                        background: "#01A4EF",
                        borderRadius: "12px",
                        marginTop: "10px",
                      }}
                      onClick={() => {
                        if (
                          regex.test(userDetails.email) &&
                          regex.test(userDetails.password) &&
                          regex.test(userDetails.confirmpassword) &&
                          userDetails.password === userDetails.confirmpassword && selectCheck
                        ) {
                          toast.success("Successfully Registered !", {
                            position: toast.POSITION.TOP_RIGHT,
                          });
                          navigate("/registered");
                        }else if (
                          regex.test(userDetails.email) &&
                          regex.test(userDetails.password) &&
                          regex.test(userDetails.confirmpassword) &&
                          userDetails.password !== userDetails.confirmpassword 
                        ) {
                          toast.warn("Password and Confirmed Password are not Matched !", {
                            position: toast.POSITION.TOP_RIGHT,
                          });
                        }else if(!selectCheck){
                          toast.warn("Please Accept Terms And Conditions",{
                            position:toast.POSITION.TOP_RIGHT
                          })
                        } else {
                          toast.error("All Values are Required !", {
                            position: toast.POSITION.TOP_RIGHT,
                          });
                        }
                      }}
                    >
                      <div
                        style={{
                          color: "#FFFFFF",
                        }}
                      >
                        Submit
                      </div>
                    </button>
                    <div>
                      <span
                        style={{
                          fontFamily: "Open Sans",
                          fontStyle: "normal",
                          fontWeight: 400,
                          fontSize: "14px",
                          lineHeight: "20px",
                          color: "#333333",
                        }}
                      >
                        Already have an account?
                      </span>
                      <span
                        style={{
                          fontFamily: "Open Sans",
                          fontStyle: "normal",
                          fontWeight: 400,
                          fontSize: "14px",
                          lineHeight: "20px",
                          color: "#FF6154",
                        }}
                        onClick={() => {
                          navigate("/loginTest");
                        }}
                      >
                        Login
                      </span>
                    </div>
                  </div>
                </div>
              )}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SignupTest;
