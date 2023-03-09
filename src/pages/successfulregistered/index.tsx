import React from 'react'
import { useNavigate } from 'react-router-dom'
import { FramLeft } from '../util/framLeft'
const shieldpng = require('../../images/shield.png')

function SuccessfullyRegistered() {
    const navigate= useNavigate()
  return (
    <div className='h-screen w-screen flex'>
        <div className='w-full h-screen'>
            <FramLeft />
        </div>
        <div className='w-full h-screen flex flex-col items-center justify-center'>
            <div className='h-1/2 flex flex-col items-center justify-center w-3/4'>
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
               <button className='text-white bg-blue-500 rounded-lg h-12 w-3/4'
               onClick={()=>{
                navigate('/loginTest')
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