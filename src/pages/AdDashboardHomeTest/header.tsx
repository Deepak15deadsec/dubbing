import React from 'react';
import { useNavigate } from 'react-router-dom';
import mainLogo from'../../images/logo.png';

export function Header(){
    const navigate = useNavigate();
    return(
        <div className="grid gap-2 grid-cols-2" style={{
            
        }}>
            <div>
                <img  src={mainLogo}  alt="fireSpot" style={{width:'89px', height:'48px', margin:'26px 0px 26px 141px'}}/>
            </div>
            <div className="flex justify-end">
                <div style={{
                    margin: '22px 0px'
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
                            navigate('/signupTest');
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
                        margin:'22px 139px 22px 20px'
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
                                navigate('/signupTest');
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