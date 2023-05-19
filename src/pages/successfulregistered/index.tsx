import React from 'react'
import { useNavigate } from 'react-router-dom'
const avniWhiteLogo2 = require("../../images/avniWhiteLogo2.png");
const shieldpng = require('../../images/shield.png')

function SuccessfullyRegistered() {
    const navigate= useNavigate()
  return (
    <div className='h-screen w-screen flex bg-[#30D792]'>
       <div
          className="z-10 absolute top-4 left-4 flex items-center cursor-pointer"
          onClick={() => {
            navigate("/");
          }}
        >
          <img src={avniWhiteLogo2} className=" h-16 w-16" />{" "}
          <span className="text-white text-3xl ">avni</span>
        </div>
        <div className='w-full h-screen flex flex-col items-center justify-center'>
            <div className='h-1/2 flex flex-col items-center justify-center w-1/2 rounded-xl bg-white'>
              <div>
                <img src={ shieldpng} className='w-36 h-40'/>
              </div>
              <div style={{'color':'#67DF87', fontFamily:'Open Sans', fontSize:'24px', marginTop:'15px',marginBottom:'10px'}}>
                Successfully
              </div>
              <div style={{'fontFamily':'Open Sans', fontSize:'13px'}}>
              Sign Up done
              </div>
              <div className='mt-12 w-full flex justify-center'>
               <button className='text-white bg-[#30D792] rounded-[30px] h-12 w-3/4'
               onClick={()=>{
                navigate('/login')
               }}
               >
                 Login
               </button>
              </div>
            </div>
        </div>
    </div>
  )
}

export default SuccessfullyRegistered