import React from "react";
import { useNavigate } from "react-router-dom";
import mainLogo from "../../images/logo.png";

const twitter= require('../../images/twitter.png')
const telegram= require('../../images/telegram.png')
const linkedIn= require('../../images/linkedIn.png')

export function Footer() {
  const navigate = useNavigate();
  return (
    <div
      className="flex pt-12 pb-12 items-center px-20"
      style={{ background: "#EEEEEE" }}
    >
      <div className="justify-center grid gap-2 grid-cols-1 w-1/3">
        <div>
          <img
            src="https://res.cloudinary.com/dgjxmcrkg/image/upload/v1678950521/just-logo_nmy0bh.webp"
            alt="fireSpot"
            style={{ width: "58px", height: "44px" }}
          />
        </div>
        <div
          style={{
            fontFamily: "Open Sans",
            fontStyle: "normal",
            fontWeight: 400,
            fontSize: "14px",
            lineHeight: "20px",
            color: "#333333",
            textAlign: "justify",
          }}
        >
          We are a company building bridges between brands and consumers. All
          data and transactions are encrypted to ensure a completely secure
          experience for our users.{" "}
        </div>
      </div>
      <div className="h-1/2 w-2/3 flex justify-evenly">
       
        <div>
          <div>
            <div
              style={{
                fontSize: "16px",
                fontWeight: 600,
                marginBottom: "2px",
                color: "#333333",
              }}
            >
              Learn
            </div>
          </div>
          <div>
            <div
              style={{
                fontSize: "14px",
                fontWeight: 400,
                marginBottom: "2px",
                color: "#333333",
              }}
            >
              Blogs
            </div>
          </div>
          <div>
            <div
              style={{
                fontSize: "14px",
                fontWeight: 400,
                marginBottom: "2px",
                color: "#333333",
              }}
            >
              Whitepaper
            </div>
          </div>
        </div>
        <div>
          <div>
            <div
              style={{
                fontSize: "16px",
                fontWeight: 600,
                marginBottom: "2px",
                color: "#333333",
              }}
            >
              Legal
            </div>
          </div>
          <div>
            <div
              style={{
                fontSize: "14px",
                fontWeight: 400,
                marginBottom: "2px",
                color: "#333333",
              }}
            >
              Privacy Policy
            </div>
          </div>
          <div>
            <div
              style={{
                fontSize: "14px",
                fontWeight: 400,
                marginBottom: "2px",
                color: "#333333",
              }}
            >
              Legal Disclosures
            </div>
          </div>
        </div>
        <div>
          <div>
            <div
              style={{
                fontSize: "16px",
                fontWeight: 600,
                marginBottom: "2px",
                color: "#333333",
              }}
            >
              Company
            </div>
          </div>
          <div>
            <div
              style={{
                fontSize: "14px",
                fontWeight: 400,
                marginBottom: "2px",
                color: "#333333",
              }}
            >
              About us
            </div>
          </div>
          <div>
            <div
              style={{
                fontSize: "14px",
                fontWeight: 400,
                marginBottom: "2px",
                color: "#333333",
              }}
            >
              FAQs
            </div>
          </div>
          
        </div>
        <div>
          <div>
            <div
              style={{
                fontSize: "16px",
                fontWeight: 600,
                marginBottom: "2px",
                color: "#333333",
              }}
            >
              Contact Us
            </div>
          </div>
          
          <div className="flex p-1 justify-start items-center">
             <img src={twitter} className="w-7 h-7 mr-2" />
             <img src={linkedIn} className="w-6 h-6 mr-2" />
             <img src={telegram} className="w-7 h-7 mr-2" />
          </div>

        </div>
      </div>
    </div>
  );
}
