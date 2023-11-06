import { useState, useEffect, useContext } from "react";
import { useStoreActions, useStoreState } from "../../store/easy-peasy/hooks";
import { useNavigate } from "react-router-dom";
// import SignInlogo from'../../images/SignInlogo.png';
import { FramLeft } from "../util/framLeft";

import { toast } from "react-toastify";
const showicon = require("../../images/open.png");
const hideicon = require("../../images/hide.png");
const avniWhiteLogo2 = require("../../images/avniWhiteLogo2.png");


export const emailRegex = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;

const Login = () => {
  const [loginCredentials, setLoginCredentials] = useState({
    username: "",
    password: "",
  });

  const [errorMessageOne, setErrorMessageOne] = useState({
    isRequired: "Value is Required",
    isEmail: "Invalid Email",
  });
  const [showErrorMessage, setShowErrorMessage] = useState({
    one: false,
    two: false,
  });


  const user = useStoreState((store) => store.user);
  const [input, setInput] = useState({ email: "", password: "" })
  const addUser = useStoreActions((state) => state.addUser)
  const addToken = useStoreActions((state) => state.addToken)
  const [showpassword, setShowpassword] = useState(false);
  const [passwordfocus, setPasswordfocus] = useState(false)

  


  const onChangeHandler = (value: string, email: string) => {
    setInput({ ...input, [email]: value })
  }

  const navigate = useNavigate();
  return (
    <div className="flex h-screen justify-end items-center bg-[#30D792]">
      <div className="z-10 absolute top-20 right-4 flex items-center cursor-pointer" onClick={() => {
        navigate('/')
      }}>
        <img src={avniWhiteLogo2} className=" h-16 w-16" />{" "}
        
      </div>
      <div className="h-[400px] mr-[5rem]">
        <div
          className="flex flex-col p-6 justify-center items-center bg-white rounded-xl"
          style={{
            width: "100%",
          }}
        >
          <div
            style={{
              fontFamily: "Open Sans",
              fontStyle: "normal",
              fontWeight: 600,
              fontSize: "42px",
              lineHeight: "57px",
              color: "#333333",
            }}
          >
         dubdub.ai
          </div>

          <div
            style={{
              fontFamily: "Open Sans",
              fontWeight: 200,
              fontSize: "20px",
              lineHeight: "26px",
              color: "#AAAAAA",
            }}
          >
            Enter your information.
          </div>
          <form >
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 ">
                Email
              </label>
              <input
                value={input.email}
                type="text"
                style={{ width: "100%", height: "56px" }}
                id="first_name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                onChange={(e) => onChangeHandler(e.target.value, "email")}
              />
            </div>



            <div>
              <label className="block mt-4 mb-2 text-sm font-medium text-gray-900 ">
                Password
              </label>
              <div className="w-full flex items-center bg-gray-50 rounded-lg" style={{ 'border': passwordfocus ? "2px solid" : '1px solid rgb(209 213 219)' }}>
                <input
                  value={input.password}
                  type={showpassword ? "text" : "password"}
                  style={{ width: "100%", height: "56px", outline: "none" }}
                  id="first_name"
                  className="bg-gray-50 text-gray-900 text-sm rounded-lg  block w-full p-2.5 "
                  onChange={(e) => onChangeHandler(e.target.value, "password")}
                  onFocus={() => {
                    setPasswordfocus(true)
                  }}
                  onBlur={() => {
                    setPasswordfocus(false)
                  }}
                />
                <div className="w-8 text-end">
                  <img src={showpassword ? showicon : hideicon} className='w-5 h-5 cursor-pointer' alt="passwordicon" onClick={() => {
                    setShowpassword(!showpassword)
                  }} />
                </div>
              </div>
            </div>

            <div></div>
            <div>
              <div>
                <div
                  className="min-h-[1.5rem] pl-[1.5rem] flex mt-6 mb-8"
                  style={{ marginTop: "10px" }}
                >
                  <input
                    className="relative float-left mt-[0.15rem] mr-[6px] -ml-[1.5rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-[rgba(0,0,0,0.25)] bg-white outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:ml-[0.25rem] checked:after:-mt-px checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-t-0 checked:after:border-l-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:bg-white focus:after:content-[''] checked:focus:border-primary checked:focus:bg-primary checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:ml-[0.25rem] checked:focus:after:-mt-px checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-t-0 checked:focus:after:border-l-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent"
                    type="checkbox"
                    value=""
                    id="checkboxDefault"
                  />
                  <label className="inline-block pl-[0.15rem] hover:cursor-pointer w-2/4">
                    <span>Remember Me</span>
                  </label>
                  <div
                    className="flex justify-end w-1/2"
                    style={{
                      color: "#01A4EF",
                      fontFamily: "Open Sans",
                      fontSize: "16px",
                      fontWeight: 600,
                      cursor: "pointer",
                    }}
                    onClick={() => {
                      navigate(`/maindashboard`);
                    }}
                  >
                    Forgot Password ?
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
                      padding: "16px 214px",
                      gap: "10px",
                      // position: 'absolute',
                      width: "100%",
                      height: "56px",
                      left: "1157px",
                      top: "816px",
                      background: "#30D792",
                      borderRadius: "35px",
                      marginTop: "10px",
                    }}
                  >
                    <div
                      style={{
                        color: "#FFFFFF",
                      }}
                    >
                      Login
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
                      Do you have an account? &nbsp;
                    </span>
                    <span
                      style={{
                        fontFamily: "Open Sans",
                        fontStyle: "normal",
                        fontWeight: 400,
                        fontSize: "14px",
                        lineHeight: "20px",
                        color: "#FF6154",
                        cursor: 'pointer'
                      }}
                      onClick={() => {
                        navigate("/signup");
                      }}
                    >
                      Sign Up
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login;
