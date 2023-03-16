import React from 'react';
import { useNavigate } from 'react-router-dom';
import SignInlogo from '../../images/SignInlogo.png';

export function FramLeft() {
    return (
        <div className="flex justify-center items-center h-full flex-col" style={{
            width: '100%',
            left: '0px',
            top: '0px',
            background: 'radial-gradient(50% 50% at 50% 50%, #508CA0 0%, #15506B 100%)'
        }}
        >
            <div className='flex p-8'>
                <div className='w-3/4' style={{
                    fontFamily: 'Open Sans',
                    fontStyle: 'normal',
                    fontWeight: 300,
                    fontSize: '30px',
                    lineHeight: '40px',
                    color: '#FFFFFF',
                    textAlign:'center'
                }}>
                    Acquire customers and grow your business
                </div>
                <div className='w-1/4'>
                    <img src='https://res.cloudinary.com/dgjxmcrkg/image/upload/v1678950521/just-logo_nmy0bh.webp' alt="fireSpot" style={{
                        width: '80px',
                        transform: 'rotate(3.41deg)'
                    }} />
                </div>
            </div>
            <div style={{
                fontFamily: 'Open Sans',
                fontStyle: 'normal',
                fontWeight: 200,
                fontSize: '15px',
                lineHeight: '26px',
                color: '#FFFFFF',
            }}>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </div>
        </div>
    )
}