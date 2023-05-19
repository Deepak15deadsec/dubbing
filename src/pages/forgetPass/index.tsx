import React from "react";
import { useNavigate } from "react-router-dom";
const avniWhiteLogo2 = require("../../images/avniWhiteLogo2.png");

function ForgetPassWord() {
  const navigate = useNavigate();

  return (
    <div className="w-screen flex bg-[#30D792]">
      <div className="w-full h-screen flex flex-col items-center justify-center">
        <div
          className="z-10 absolute top-4 left-4 flex items-center cursor-pointer"
          onClick={() => {
            navigate("/");
          }}
        >
          <img src={avniWhiteLogo2} className=" h-16 w-16" />{" "}
          <span className="text-white text-3xl ">avni</span>
        </div>
        <div className=" flex flex-col p-6 justify-center items-center bg-white rounded-xl">
          <div
            style={{
              fontFamily: "Open Sans",
              fontWeight: 600,
              fontSize: "40px",
            }}
          >
            Forgot Password
          </div>
          <div
            style={{
              fontFamily: "Open Sans",
              fontWeight: 400,
              fontSize: "16px",
              margin: "10px 0px",
              color: "#AAAAAA",
            }}
          >
            Please enter your email address to receive a verification code
          </div>
          <div
            style={{
              fontFamily: "Open Sans",
              fontSize: "16px",
              marginTop: "30px",
              marginBottom: "5px",
            }}
          >
            Email
          </div>
          <div className="w-full">
            <input
              className="h-12 w-full p-4"
              style={{ border: "1px solid #CCCCCC", borderRadius: "10px" }}
            />
          </div>
          <div className="w-full mt-4">
            <button
              className="h-12 w-full"
              style={{
                backgroundColor: "#30D792",
                borderRadius: "30px",
                color: "#fff",
                cursor: "pointer",
              }}
              onClick={() => {
                navigate("/otpverification");
              }}
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ForgetPassWord;
