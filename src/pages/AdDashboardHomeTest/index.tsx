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
import mainLogo from'../../images/logo.png';
import Group65 from '../../images/Group65.png';
import Group67 from '../../images/Group67.png';
import Group66 from '../../images/Group66.png';
import Logo2 from'../../images/logo2.png';

const AdDashboardHomeTest = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Header />
      <div className="grid gap-4 grid-cols-1" style={{ maxHeight: "900px",
      overflowY: "scroll"}}>
        <div className="grid gap-4 grid-cols-2" >

          <div className="grid gap-4 grid-cols-1">
            <div style={{
              fontFamily: 'Open Sans',
              fontSize: '30px',
              fontWeight: 300,
              lineHeight: '40px',
              letterSpacing: '0em',
              textAlign: 'left',
              color: '#01A4EF',
              marginLeft: '130px'
            }}>
              Acquire customers and grow your businss with Avni
            </div>
            <div style={{
                fontFamily: 'Open Sans',
                fontSize: '12px',
                fontWeight: 200,
                lineHeight: '16px',
                letterSpacing: '0em',
                textAlign: 'left',
                marginLeft: '130px'
            }}>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
            </div>
            <div style={{
              marginLeft: '130px'
            }}>
              <button
                type="submit"
                style={{
                        height: '56px',
                        width: '151px',
                        left: '1630px',
                        top: '22px',
                        borderRadius: '12px',
                        padding: '16px 20px 16px 20px',
                        border: '1px solid #01A4EF'
                    }}
                onClick={()=>{
                  navigate('/signup');
                }}
              >
                <div style={{
                    color: '#01A4EF'
                }}>
                  Get Started
                </div>
              </button>
            </div>
          </div>
          <div className="flex justify-center">
            <img  src={Group65}  alt="fireSpot" style={{
              // height: '320.3762817382812px',
              width: '150.2215270996094px',
              left: '612.768310546875px',
              top: '80.197265625px',
              borderRadius: '0px'
              
            }}  />
          </div>
          <div className="flex justify-center">
            <img  src={Group66}  alt="fireSpot" style={{
              // height: '320.3762817382812px',
              width: '150.2215270996094px',
              left: '612.768310546875px',
              top: '80.197265625px',
              borderRadius: '0px'
            }}  />
          </div>
          <div className="grid gap-4 grid-cols-1">
            <div style={{
              fontFamily: 'Open Sans',
              fontSize: '10px',
              fontWeight: 200,
              lineHeight: '10px',
              letterSpacing: '0em',
              textAlign: 'left'
              
            }}>
              STEP 1
            </div>
            <div style={{
            fontFamily: 'Open Sans',
            fontStyle: 'normal',
            fontWeight: 150,
            fontSize: '15px',
            lineHeight: '20px',
            color: '#FF6154'

              
            }}>
              Company Details
            </div>
            <div style={{
              fontFamily: 'Open Sans',
              fontStyle: 'normal',
              fontWeight: 200,
              fontSize: '12px',
              lineHeight: '16px',
            }}>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
            </div>
          </div>
          <div className="grid gap-4 grid-cols-1">
            <div className="grid gap-4 grid-cols-1" style={{ marginLeft: '130px'}}>
              <div style={{
                  fontFamily: 'Open Sans',
                  fontSize: '10px',
                  fontWeight: 200,
                  lineHeight: '10px',
                  letterSpacing: '0em',
                  textAlign: 'left'
                  
                }}>
                  STEP 2
                </div>
                <div style={{
                  fontFamily: 'Open Sans',
                  fontStyle: 'normal',
                  fontWeight: 300,
                  fontSize: '30px',
                  lineHeight: '40px',            
                  color: '#67DF87',
                  // marginLeft: '130px'
                }}>
                  Login Details
                </div>
                <div style={{
                  fontFamily: 'Open Sans',
                  fontStyle: 'normal',
                  fontWeight: 200,
                  fontSize: '12px',
                  lineHeight: '16px',
                  color: '#333333',
                  // marginLeft: '130px',
                }}>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                </div>
            </div>
            
          </div>

          <div className="flex justify-center">
            <img  src={Group67}  alt="fireSpot" style={{
              // height: '320.3762817382812px',
              width: '150.2215270996094px',
              left: '612.768310546875px',
              top: '80.197265625px',
              borderRadius: '0px'
            }}  />
          </div>

      



          {/* <div className="grid gap-4 grid-cols-1">
          
          </div> */}

          
        </div>
      </div>
      {/* <div className="grid gap-4 grid-cols-1">
        <div className="flex justify-center">
            <img  src={Logo2}  alt="fireSpot" style={{
            width: '71px',
            height: '99px',
            //  left: '836px',
            //  top: '2186.98px',
            }}  />
            
        </div>
        <div className="flex justify-center" style={{
          fontFamily: 'Open Sans',
          fontStyle: 'normal',
          fontWeight: 300,
          fontSize: '30px',
          lineHeight: '40px',
          textAlign: 'center',
          color: '#FFB703',
        }}>
          Create your first ad
        </div>
        <div className="flex justify-center" style={{
          fontFamily: 'Open Sans',
          fontStyle: 'normal',
          fontWeight: 200,
          fontSize: '12px',
          lineHeight: '16px',
          textAlign: 'center',
          color: '#333333'
        }}>
          Get started with free personalised support. Create your custom ad plan with a Google Ads Expert.
        </div>
      </div> */}


      <div className="grid gap-4 grid-cols-1">
        <Footer />
      </div>

      
    </div>
  );
};

export default AdDashboardHomeTest;
