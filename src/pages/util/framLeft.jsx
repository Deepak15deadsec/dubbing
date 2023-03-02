import React from 'react';
import { useNavigate } from 'react-router-dom';
import SignInlogo from'../../images/SignInlogo.png';

export function FramLeft(){
    return(
        <div className="grid gap-4 grid-cols-2" style={{position: 'absolute',
            width: '50%',
            height: '100%',
            left: '0px',
            top: '0px',
            background: 'radial-gradient(50% 50% at 50% 50%, #508CA0 0%, #15506B 100%)'}}
        >
            <div  style={{
            fontFamily: 'Open Sans',
            fontStyle: 'normal',
            fontWeight: 300,
            fontSize: '30px',
            lineHeight: '40px',
            color: '#FFFFFF',
            position:'relative',
            width: '95%',
            height: '100%',
            left: '30%',
            top: '65%',
            // bottom:'40%'

            }}>
            Acquire customers and grow your business
            </div>
            <div>
                <img  src={SignInlogo}  alt="fireSpot" style={{
                position: 'relative',
                width: '35%',
                height: '30%',
                left: '30%',
                top: '55%',
                transform: 'rotate(3.41deg)'
                }}/>
            </div>
            <div  style={{
                position:'relative',
                left: '30%',
                top: '10%',
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