import { Link } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import mainLogo from "../../images/logo.png";

const twitter = require("../../images/twitter.png");
const telegram = require("../../images/telegram.png");
const linkedIn = require("../../images/linkedIn.png");

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
                cursor: "pointer",
                fontSize: "14px",
                fontWeight: 400,
                marginBottom: "2px",
                color: "#333333",
              }}
              onClick={() => {
                window.scrollTo(0, 0);
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
                cursor: "pointer",
              }}
              onClick={() => {
                window.scrollTo(0, 0);
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
            <Link href="#" underline="none">
              <div
                style={{
                  fontSize: "14px",
                  fontWeight: 400,
                  marginBottom: "2px",
                  color: "#333333",
                  cursor: "pointer",
                }}
                onClick={() => {
                  window.scrollTo(0, 0);
                }}
              >
                Privacy Policy
              </div>
            </Link>
          </div>
          <div>
        
              <div
                style={{
                  fontSize: "14px",
                  fontWeight: 400,
                  marginBottom: "2px",
                  color: "#333333",
                  cursor: "pointer",
                }}
                onClick={() => {
                  window.scrollTo(0, 0);
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
            <Link
              href="https://test.avniads.com/company"
              target="_blank"
              underline="none"
            >
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
            </Link>
          </div>
          <div>
            <Link
              href="https://test.avniads.com/faq"
              target="_blank"
              underline="none"
            >
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
            </Link>
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
            <Link
              href="https://t.me/s/avniclub"
              target="_blank"
              underline="none"
            >
              <img src={twitter} className="w-7 h-7 mr-2" />
            </Link>
            <Link
              href="https://t.me/s/avniclub"
              target="_blank"
              underline="none"
            >
              <img src={linkedIn} className="w-6 h-6 mr-2" />
            </Link>
            <Link
              href="https://t.me/s/avniclub"
              target="_blank"
              underline="none"
            >
              <img src={telegram} className="w-7 h-7 mr-2" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
