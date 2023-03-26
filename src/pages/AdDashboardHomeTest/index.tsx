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
import { Header } from "./header";
import { Footer } from "./footer";
import { useNavigate } from 'react-router-dom';
import mainLogo from '../../images/logo.png';
import Group65 from '../../images/Group65.png';
import Group67 from '../../images/Group67.png';
import Group66 from '../../images/Group66.png';
import Logo2 from '../../images/logo2.png';

const AdDashboardHomeTest = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-[100vh]">
      <Header />
      <div className="grid gap-4 grid-cols-1 pl-20 pr-20 mt-8 mb-12">
        <div className="grid gap-4 lg:grid-cols-2 sm:grid-cols-1" id="main" >
          <div className="flex flex-col justify-center">
            <div style={{
              fontFamily: 'Open Sans',
              fontSize: '40px',
              fontWeight: 400,
              lineHeight: '50px',
              textAlign: 'left',
              color: '#01A4EF',
            }}>
              Acquire customers and grow your businss with Avni
            </div>
            <div className="mt-4 mb-4" style={{
              fontFamily: 'Open Sans',
              fontSize: '16px',
              fontWeight: 400,
              textAlign: 'justify',
            }}>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
            </div>
            <div >
              <button
                type="submit"
                style={{
                  fontSize: '20px',
                  fontWeight: 600,
                  minWidth: '150px',
                  height: '56px',
                  left: '1630px',
                  top: '22px',
                  borderRadius: '12px',
                  textAlign: "center",
                  border: '1px solid #01A4EF',
                  color: '#01A4EF'
                }}
                onClick={() => {
                  navigate('/signup');
                }}
              >
                Get Started
              </button>
            </div>
          </div>
          <div className="flex justify-center">
            <img className="max-h-fit lg:max-w-lg sm:max-w-sm" src={Group65} alt="fireSpot" />
          </div>
          <div className="mt-12 sm:mt-8" >
            <div className="flex justify-center">
              <img className="max-h-fit max-w-lg" src={Group66} alt="fireSpot" />
            </div>
          </div>
          <div className="mt-12 sm:8 h-full flex  justify-center items-center">
            <div className="grid gap-4 grid-cols-1 h-1/3">
              <div style={{
                fontFamily: 'Open Sans',
                fontSize: '16px',
                fontWeight: 400,
                lineHeight: '20px',
                letterSpacing: '0em',
                textAlign: 'left'

              }}>
                STEP 1
              </div>
              <div style={{
                fontFamily: 'Open Sans',
                fontWeight: 600,
                fontSize: '40px',
                lineHeight: '20px',
                color: '#FF6154'
              }}>
                Company Details
              </div>
              <div style={{
                fontFamily: 'Open Sans',
                fontWeight: 400,
                fontSize: '16px',
                textAlign:'justify'
              }}>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
              </div>
            </div>
          </div>
          <div className="mt-12 sm:mt-8 h-full flex  justify-center items-center">
            <div className="grid gap-4 grid-cols-1 h-1/3">
              <div style={{
                fontFamily: 'Open Sans',
                fontSize: '16px',
                fontWeight: 400,
                lineHeight: '10px',
                letterSpacing: '0em',
              }}>
                STEP 2
              </div>
              <div style={{
                fontFamily: 'Open Sans',
                fontStyle: 'normal',
                fontWeight: 600,
                fontSize: '40px',
                lineHeight: '30px',
                color: '#67DF87'
              }}>
                Login Details
              </div>
              <div style={{
                fontFamily: 'Open Sans',
                fontWeight: 400,
                fontSize: '16px',
                textAlign:'justify'
              }}>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
              </div>
            </div>
          </div>
          <div className="mt-12 sm:mt-8" >
            <div className="flex justify-center">
              <img className="max-h-fit max-w-lg" src={Group67} alt="fireSpot" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center mt-16 mb-16">
        <div className="w-36 h-20">
          <img src={Logo2} />
        </div>
        <div style={{ "color": "#FFB703", fontFamily: 'open sans', fontWeight: 600, fontSize: '40px' }}>
          Create your first ad
        </div>
        <div className="w-3/4 mb-4 text-center" style={{ "fontFamily": "open sans", fontSize: '16px' }}>
          Get started with free personalised support. Create your custom ad plan with a Google Ads Expert.
        </div>
        <div>
          <button style={{ 
           "backgroundColor": "#01A4EF",
           borderRadius: '12px', 
           textAlign: 'center', 
           color: "#fff", 
           fontFamily: "Open Sans", 
           fontSize: "20px",
           height:'56px',
           width:'150px' 
            }}
            onClick={()=>{
              navigate('/signup');
          }}>Get Started</button>
        </div>
      </div>
      <div className="grid gap-4 grid-cols-1">
        <Footer />
      </div>


    </div>
  );
};

export default AdDashboardHomeTest;
