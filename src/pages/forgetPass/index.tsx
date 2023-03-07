import React from 'react'
import {useNavigate} from 'react-router-dom'
import { FramLeft } from '../util/framLeft'

function ForgetPassWord() {

    const navigate = useNavigate();

    return (
        <div className='w-screen flex'>
            <div className='w-1/2 h-screen'>
                <FramLeft />
            </div>
            <div className='w-1/2 h-screen flex flex-col items-center justify-center'>
                <div className='h-1/2'>
                    <div style={{ "fontFamily": 'Open Sans', fontWeight: 600, fontSize: '40px' }}>Forgot Password</div>
                    <div style={{ "fontFamily": 'Open Sans', fontWeight: 400, fontSize: '16px', margin: '10px 0px', color: '#AAAAAA' }}>Please enter your email address to receive a verification code</div>
                    <div style={{"fontFamily":'Open Sans', fontSize:'16px',marginTop:'30px',marginBottom:'5px'}}>Email</div>
                    <div className='w-full'>
                        <input className='h-12 w-full p-4' style={{"border":'1px solid #CCCCCC', borderRadius:'10px'}} />
                    </div>
                    <div className='w-full mt-16'>
                        <button className='h-12 w-full' style={{"backgroundColor":'#01A4EF',borderRadius:'10px',color:'#fff', cursor:'pointer'}}
                         onClick={()=>{
                            navigate('/otpverification')
                        }}>Send</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ForgetPassWord