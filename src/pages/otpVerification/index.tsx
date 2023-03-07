import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { FramLeft } from '../util/framLeft';
import OtpInput from 'react-otp-input'

function OtpVerification() {
    const navigate = useNavigate();
    const [OTP, setOTP] = useState("");
    return (
        <div className='flex w-screen'>
            <div className='w-1/2 h-screen'>
                <FramLeft />
            </div>
            <div className='w-1/2 h-screen flex flex-col items-center justify-center'>
                <div className='h-1/2'>
                    <div style={{ "fontFamily": 'Open Sans', fontWeight: 600, fontSize: '40px' }}>OTP Verification</div>
                    <div style={{ "fontFamily": 'Open Sans', fontWeight: 400, fontSize: '16px', margin: '10px 0px', color: '#AAAAAA' }}>Please enter your verification code which is send to your mail.</div>
                    <div className='w-full'>
                        <OtpInput
                            value={OTP}
                            onChange={()=>{
                                setOTP("")
                            }}
                            numInputs={6}
                            separator={<span>-</span>}
                        />
                    </div>
                    <div className='w-full mt-16'>
                        <button className='h-12 w-full' style={{ "backgroundColor": '#01A4EF', borderRadius: '10px', color: '#fff', cursor: 'pointer' }}
                            onClick={() => {
                                // navigate('/otpverification')
                            }}>Verify</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OtpVerification