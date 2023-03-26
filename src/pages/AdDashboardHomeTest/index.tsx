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
import Logo from '../../images/just-logo.webp';

const AdDashboardHomeTest = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-[100vh]">
      <Header />
      <div className="grid gap-4 grid-cols-1 pl-20 pr-20 mt-8 mb-12">
        <div className="grid gap-4 lg:grid-cols-2 sm:grid-cols-1" id="main" >
          <div className="flex flex-col justify-center">
          <div className="mt-4 mb-4" style={{
              fontFamily: 'Open Sans',
              fontSize: '70px',
              fontWeight: 800,
              lineHeight: '80px',
              textAlign: 'left',
              color: '#434343',
            }}>
              Cut through the clutter
            </div>
            <div className="mt-4 mb-4 ml-1.5" style={{
              fontFamily: 'Open Sans',
              fontSize: '30px',
              fontWeight: 400,
              textAlign: 'left',
              color: 'grey',
            }}>
              <p>Generate <s>impressions</s> that create value </p>
              <p className="ml-[8.6rem] text-[#54cca0]">transactions</p>
            </div>
            <div className="mt-4 mb-4 ml-1.5" style={{
              fontFamily: 'Open Sans',
              fontSize: '30px',
              fontWeight: 400,
              textAlign: 'left',
              color: 'grey',
            }}>
              <p>Welcome to the world of ad-<s>blockers</s></p>
              <p className="ml-[24.8rem] text-[#54cca0]">consent</p>
            </div>
            <div >
              
            </div>
          </div>
          <div className="flex flex-col justify-center pl-20">
            <img className="max-h-fit lg:max-w-lg sm:max-w-sm mb-5" src={Group65} alt="fireSpot" />
          <div className="pl-3.5">
          <button 
                type="submit"
                style={{
                  fontSize: '20px',
                  fontWeight: 600,
                  width: '500px',
                  height: '45px',
                  left: '1630px',
                  top: '22px',
                  borderRadius: '12px',
                  textAlign: "center",
                  border: '1px solid #01A4EF',
                  color: '#ffffff',
                  backgroundColor: '#01A4EF'
                }}
                onClick={() => {
                  navigate('/signup');
                }}
              >
                Create your first ad with free 1000 ad-credits
              </button></div>
              </div>
          <div className="mt-20 sm:mt-20" >
            <div className="flex justify-center mt-12">
              <img className="max-h-fit max-w-lg" src={Group66} alt="fireSpot" />
            </div>
          </div>
          <div className="mt-12 sm:8 h-full flex  justify-center items-center">
            <div className="grid gap-4 grid-cols-1 ">
            <div className="ml-[20rem] mt-4 mb-4" style={{
              fontFamily: 'Open Sans',
              fontSize: '55px',
              fontWeight: 700,
              lineHeight: '80px',
              textAlign: 'right',
              color: '#434343',
            }}>
              Leverage zero party market data
            </div>
            <div className="ml-[15rem] mt-4 mb-4" 
            style={{
              fontFamily: 'Open Sans',
              fontSize: '33px',
              fontWeight: 600,
              lineHeight: '40px',
              textAlign: 'right',
              color: 'grey',
            }}>
              Reach out to customers who are ready to hear you!
            </div>
            <div className="ml-[10rem] mt-4 mb-4" style={{
              fontFamily: 'Open Sans',
              fontSize: '18px',
              fontWeight: 400,
              lineHeight: '40px',
              textAlign: 'right',
              color: 'grey',
            }}>
              With the power of consent & a rewarding platform like avni, create ads that are personalized in real sense
            </div>
              
              
            </div>
          </div>
          <div className="mt-15 sm:mt-8 h-full flex  justify-center items-center">
            <div className="grid gap-4 grid-cols-1 ">
            <div className="mb-4 mr-[10rem] mt-12" style={{
              fontFamily: 'Open Sans',
              fontSize: '70px',
              fontWeight: 800,
              lineHeight: '80px',
              textAlign: 'left',
              color: '#434343',
            }}>
              Generate ROI & hit your campaign goals
            </div>
            <div className='mt-5'
              style={{
              fontFamily: 'Open Sans',
              fontSize: '33px',
              fontWeight: 600,
              lineHeight: '40px',
              textAlign: 'left',
              color: 'grey',
            }}>
                Measure each ad unit with avni's transaction settlement system 
              </div>
              <div className="mr-20 mt-10"
              style={{
              fontFamily: 'Open Sans',
              fontSize: '18px',
              fontWeight: 400,
              lineHeight: '40px',
              textAlign: 'left',
              color: 'grey',
            }}>
                Avni is where people get rewarded for ad-engagement & are on a lookout for brand offers 
                You can reach out to your relevant customers with personalized brand offers & targeted ad-campaigns
              </div>
            </div>
          </div>
          <div className="mt-20 sm:mt-20" >
            <div className="flex justify-center mt-12">
              <img className="max-h-fit max-w-lg" src={Group67} alt="fireSpot" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center mt-16 mb-16">
        <div className="w-36 h-20">
          <img src={Logo} />
        </div>
        <div className="mt-20"
        style={{ "color": "#333333", fontFamily: 'open sans', fontWeight: 600, fontSize: '40px' }}>
        Acquire more customers with avni
        </div>
        <div className="w-3/4 mb-4 text-center" style={{ "fontFamily": "open sans", fontSize: '25px',fontWeight: 300 }}>
        Create your first ad with free 1000 ad-credits
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
        <div className="w-3/4 mb-4 text-center mt-4" style={{ "fontFamily": "open sans", fontSize: '25px', fontWeight: 300 }}>
        Still got questions? <a href="/"><u>Contact Us!</u></a>
        </div>
      </div>
      <div className="grid gap-4 grid-cols-1">
        <Footer />
      </div>


    </div>
  );
};

export default AdDashboardHomeTest;
