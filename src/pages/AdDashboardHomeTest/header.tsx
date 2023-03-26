import React from 'react';
import { useNavigate } from 'react-router-dom';
import mainLogo from'../../images/logo.png';

export function Header(){
    const navigate = useNavigate();
    return(
        <div className="flex justify-between px-20 mt-[1rem]" >
            <div>
                <img  src='https://res.cloudinary.com/dgjxmcrkg/image/upload/v1678778021/avni-logo2_p0fzel.webp'  alt="fireSpot" style={{width:'57px', height:'68px' }}/>
            </div>
            <div className="flex space-x-2">
                <div style={{
                    
                }}>
                    <button
                        type="submit"
                        style={{
                            height: '56px',
                            width: '105px',
                            left: '1505px',
                            top: '22px',
                            borderRadius: '12px',
                            padding: '16px 20px 16px 20px',
                            background: '#01A4EF'
                        }}
                        onClick={()=>{
                            navigate('/login');
                        }}
                    >
                        <div style={{
                            color: '#FFFFFF'
                        }}>
                            Sign In
                        </div>
                    </button>
                </div>
                    <div style={{
                        
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
        </div>
    )
}