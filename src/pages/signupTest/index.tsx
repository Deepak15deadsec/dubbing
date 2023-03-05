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
import { useNavigate } from 'react-router-dom';
// import SignInlogo from'../../images/SignInlogo.png';
import { FramLeft } from "../util/framLeft";


const SignupTest = () => {
  const navigate = useNavigate();



  return (
    <div className="grid gap-4 grid-cols-2 h-screen">
      <FramLeft />
      <div className="grid gap-4 grid-cols-1" style={{
            width: '100%',
      }}>
        <div style={{
          fontFamily: 'Open Sans',
          fontStyle: 'normal',
          fontWeight: 300,
          fontSize: '21px',
          lineHeight: '27px',
          color: '#333333'
        }}>
          Great relationships starts here
        </div>

        <div style={{
          fontFamily: 'Open Sans',
          fontStyle: 'normal',
          fontWeight: 200,
          fontSize: '20px',
          lineHeight: '26px',
          color: '#AAAAAA',
          position:'relative',
          // width: '95%',
          // height: '100%',
          // left: '30%',
          top: '-90%',
        }}>
          Enter your information.
        </div>
        <div style={{
          // fontFamily: 'Open Sans',
          // fontStyle: 'normal',
          // fontWeight: 200,
          // fontSize: '20px',
          // lineHeight: '26px',
          // color: '#AAAAAA',
          position:'relative',
          // width: '95%',
          // height: '100%',
          // left: '30%',
          top: '-8%',
        }}>
          
        <ul
        className="w-100 relative m-0 list-none overflow-hidden p-0 transition-[height] duration-200 ease-in-out"
        data-te-stepper-init
        data-te-stepper-type="vertical">
        <li
          data-te-stepper-step-ref
          className="relative h-fit after:absolute after:left-[2.45rem] after:top-[3.6rem] after:mt-px after:h-[calc(100%-2.45rem)] after:w-px after:bg-[#e0e0e0] after:content-[''] dark:after:bg-neutral-600">
          <div
            data-te-stepper-head-ref
            className="flex cursor-pointer items-center p-6 leading-[1.3rem] no-underline after:bg-[#e0e0e0] after:content-[''] hover:bg-[#f9f9f9] focus:outline-none dark:after:bg-neutral-600 dark:hover:bg-[#3b3b3b]">
            <span
              data-te-stepper-head-icon-ref
              className="mr-3 flex h-[1.938rem] w-[1.938rem] items-center justify-center rounded-full bg-[#ebedef] text-sm font-medium text-[#40464f]">
              1
            </span>
            <span
              data-te-stepper-head-text-ref
              className="text-neutral-500 after:absolute after:flex after:text-[0.8rem] after:content-[data-content] dark:text-neutral-300">
              <span>
              Company Details
              </span>
              <br />
              <span style={{
                fontFamily: 'Open Sans',
                fontStyle: 'normal',
                fontWeight: 400,
                fontSize: '14px',
                lineHeight: '20px',
                color: '#AAAAAA'
              }}>
                Enter all your company information
              </span>

            </span>
          </div>
          {/* <div
            data-te-stepper-content-ref
            className="ps-1 transition-[height, margin-bottom, padding-top, padding-bottom] left-0 overflow-hidden pr-6 pb-6 pl-[3.75rem] duration-300 ease-in-out">
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Company Name</label>
              <input style={{width:'70%'}} type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Website</label>
              <input style={{width:'70%'}} type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Contact Person</label>
              <input style={{width:'70%'}} type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Contact Number</label>
              <input style={{width:'70%'}} type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  />
            </div>
            <div>
              <button
                  type="submit"
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: '16px 214px',
                    gap: '10px',
                    // position: 'absolute',
                    width: '40%',
                    height: '56px',
                    left: '1157px',
                    top: '816px',
                    background: '#01A4EF',
                    borderRadius: '12px',
                    marginTop:'10px'
                  }}
                  onClick={()=>{
                      // navigate('/signup');
                  }}
              >
                  <div style={{
                      color: '#FFFFFF'
                  }}>
                      Next
                  </div>
              </button>
              <div>
                <span style={{
                  fontFamily: 'Open Sans',
                  fontStyle: 'normal',
                  fontWeight: 400,
                  fontSize: '14px',
                  lineHeight: '20px',
                  color: '#333333'
                }}>
                  Already have an account?
                </span>
                <span style={{
                  fontFamily: 'Open Sans',
                  fontStyle: 'normal',
                  fontWeight: 400,
                  fontSize: '14px',
                  lineHeight: '20px',
                  color: '#FF6154'
                }}>
                  Login
                </span> 
              </div>
            </div>
          </div> */}
        </li>
        <li
          data-te-stepper-step-ref
          className="relative h-fit after:absolute after:left-[2.45rem] after:top-[3.6rem] after:mt-px after:h-[calc(100%-2.45rem)] after:w-px after:bg-[#e0e0e0] after:content-[''] dark:after:bg-neutral-600">
          <div
            data-te-stepper-head-ref
            className="flex cursor-pointer items-center p-6 leading-[1.3rem] no-underline after:bg-[#e0e0e0] after:content-[''] hover:bg-[#f9f9f9] focus:outline-none dark:after:bg-neutral-600 dark:hover:bg-[#3b3b3b]">
            <span
              data-te-stepper-head-icon-ref
              className="mr-3 flex h-[1.938rem] w-[1.938rem] items-center justify-center rounded-full bg-[#ebedef] text-sm font-medium text-[#40464f]">
              2
            </span>
            <span
              data-te-stepper-head-text-ref
              className="text-neutral-500 after:absolute after:flex after:text-[0.8rem] after:content-[data-content] dark:text-neutral-300">
              Login Info
            </span>
          </div>
          <div
            data-te-stepper-content-ref
            className="ps-1 transition-[height, margin-bottom, padding-top, padding-bottom] left-0 overflow-hidden pr-6 pb-6 pl-[3.75rem] duration-300 ease-in-out">
              <span style={{
                fontFamily: 'Open Sans',
                fontStyle: 'normal',
                fontWeight: 400,
                fontSize: '14px',
                lineHeight: '20px',
                color: '#AAAAAA'
              }}>
                Enter login details
              </span>
          </div>
          <div
            data-te-stepper-content-ref
            className="ps-1 transition-[height, margin-bottom, padding-top, padding-bottom] left-0 overflow-hidden pr-6 pb-6 pl-[3.75rem] duration-300 ease-in-out">
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
              <input style={{width:'70%',height:'56px'}} type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
              <input style={{width:'70%',height:'56px'}} type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Conform Password</label>
              <input style={{width:'70%',height:'56px'}} type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  />
            </div>
            <div>
             <div>
             <div className="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]" style={{marginTop:'10px'}}>
              <input
                className="relative float-left mt-[0.15rem] mr-[6px] -ml-[1.5rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-[rgba(0,0,0,0.25)] bg-white outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:ml-[0.25rem] checked:after:-mt-px checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-t-0 checked:after:border-l-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:bg-white focus:after:content-[''] checked:focus:border-primary checked:focus:bg-primary checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:ml-[0.25rem] checked:focus:after:-mt-px checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-t-0 checked:focus:after:border-l-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent"
                type="checkbox"
                value=""
                id="checkboxDefault" />
              <label
                className="inline-block pl-[0.15rem] hover:cursor-pointer"
                >
              <span>
                Accept all the &nbsp;
              </span>
              <span style={{
                color: '#01A4EF'
              }}>
                Terms &nbsp;
              </span>
              <span>
                  & &nbsp;
                </span>
                <span style={{
                color: '#01A4EF'
              }}>
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
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '70%',
                    height: '56px',
                    background: '#01A4EF',
                    borderRadius: '12px',
                    marginTop:'10px'
                  }}
                  onClick={()=>{
                      navigate('/loginTest');
                  }}
              >
                  <div style={{
                      color: '#FFFFFF'
                  }}>
                      Submit
                  </div>
              </button>
              <div>
                <span style={{
                  fontFamily: 'Open Sans',
                  fontStyle: 'normal',
                  fontWeight: 400,
                  fontSize: '14px',
                  lineHeight: '20px',
                  color: '#333333'
                }}>
                  Already have an account?
                </span>
                <span style={{
                  fontFamily: 'Open Sans',
                  fontStyle: 'normal',
                  fontWeight: 400,
                  fontSize: '14px',
                  lineHeight: '20px',
                  color: '#FF6154'
                }}
                onClick={()=>{
                  navigate('/loginTest');
                }}
                >
                  Login
                </span> 
              </div>
            </div>
          </div>
        </li>
      </ul>

        </div>
      </div>

  </div>
  );
};

export default SignupTest;
