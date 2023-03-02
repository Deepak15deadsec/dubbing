import React from 'react';
import { useNavigate } from 'react-router-dom';
import mainLogo from'../../images/logo.png';

export function Footer(){
    const navigate = useNavigate();
    return(
        <div className="grid gap-2 grid-cols-5" style={{background: '#EEEEEE'}} >
            <div className="flex justify-center grid gap-2 grid-cols-1">
                <div>
                    <img  src={mainLogo}  alt="fireSpot" style={{width:'89px', height:'48px', margin:'26px 0px 26px 141px'}}/>
                </div>
                <div style={{
                    fontFamily: 'Open Sans',
                    fontStyle: 'normal',
                    fontWeight: 400,
                    fontSize: '14px',
                    lineHeight: '20px',
                    color: '#333333',
                    marginLeft:'141px',
                }}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.

                </div>

            </div>
            <div className="flex justify-center grid gap-2 grid-cols-1">
                <div>
                    <div className="flex justify-center" style={{
                        fontFamily: 'Open Sans',
                        fontStyle: 'normal',
                        fontWeight: 600,
                        fontSize: '16px',
                        lineHeight: '22px',
                        color: '#333333',
                        marginTop:'60px'
                    }}>
                        Company
                    </div>
                    <div className="flex justify-center" style={{
                        fontFamily: 'Open Sans',
                        fontStyle: 'normal',
                        fontWeight: 400,
                        fontSize: '14px',
                        lineHeight: '20px',
                        color: '#333333'
                    }}>
                        About
                    </div>

                    <div className="flex justify-center" style={{
                        fontFamily: 'Open Sans',
                        fontStyle: 'normal',
                        fontWeight: 400,
                        fontSize: '14px',
                        lineHeight: '20px',
                        color: '#333333'
                    }}>
                        Newsroom
                    </div>

                    <div className="flex justify-center" style={{
                        fontFamily: 'Open Sans',
                        fontStyle: 'normal',
                        fontWeight: 400,
                        fontSize: '14px',
                        lineHeight: '20px',
                        color: '#333333'
                    }}>
                        Career
                    </div>

                </div>
            </div>

            <div className="flex justify-center grid gap-2 grid-cols-1">
                <div>
                    <div className="flex justify-center" style={{
                        fontFamily: 'Open Sans',
                        fontStyle: 'normal',
                        fontWeight: 600,
                        fontSize: '16px',
                        lineHeight: '22px',
                        color: '#333333',
                        marginTop:'60px'
                    }}>
                        Learn
                    </div>
                    <div className="flex justify-center" style={{
                        fontFamily: 'Open Sans',
                        fontStyle: 'normal',
                        fontWeight: 400,
                        fontSize: '14px',
                        lineHeight: '20px',
                        color: '#333333'
                    }}>
                        Blog
                    </div>

                    <div className="flex justify-center" style={{
                        fontFamily: 'Open Sans',
                        fontStyle: 'normal',
                        fontWeight: 400,
                        fontSize: '14px',
                        lineHeight: '20px',
                        color: '#333333'
                    }}>
                        Guides
                    </div>

                </div>
            </div>

            <div className="flex justify-center grid gap-2 grid-cols-1">
                <div>
                    <div className="flex justify-center" style={{
                        fontFamily: 'Open Sans',
                        fontStyle: 'normal',
                        fontWeight: 600,
                        fontSize: '16px',
                        lineHeight: '22px',
                        color: '#333333',
                        marginTop:'60px'
                    }}>
                        Legal
                    </div>
                    <div className="flex justify-center" style={{
                        fontFamily: 'Open Sans',
                        fontStyle: 'normal',
                        fontWeight: 400,
                        fontSize: '14px',
                        lineHeight: '20px',
                        color: '#333333'
                    }}>
                        Privacy Policy
                    </div>

                    <div className="flex justify-center" style={{
                        fontFamily: 'Open Sans',
                        fontStyle: 'normal',
                        fontWeight: 400,
                        fontSize: '14px',
                        lineHeight: '20px',
                        color: '#333333'
                    }}>
                        Legal Disclosures
                    </div>

                </div>
            </div>
           
            <div className="flex justify-center grid gap-2 grid-cols-1">
                <div>
                    <div className="flex justify-center" style={{
                        fontFamily: 'Open Sans',
                        fontStyle: 'normal',
                        fontWeight: 600,
                        fontSize: '16px',
                        lineHeight: '22px',
                        color: '#333333',
                        marginTop:'60px'
                    }}>
                        Contact Us
                    </div>
                    <div className="flex justify-center" style={{
                        fontFamily: 'Open Sans',
                        fontStyle: 'normal',
                        fontWeight: 400,
                        fontSize: '14px',
                        lineHeight: '20px',
                        color: '#333333'
                    }}>
                        Help Center
                    </div>

                    <div className="flex justify-center" style={{
                        fontFamily: 'Open Sans',
                        fontStyle: 'normal',
                        fontWeight: 400,
                        fontSize: '14px',
                        lineHeight: '20px',
                        color: '#333333'
                    }}>
                        Talk to us
                    </div>

                    <div className="flex justify-center" style={{
                        fontFamily: 'Open Sans',
                        fontStyle: 'normal',
                        fontWeight: 400,
                        fontSize: '14px',
                        lineHeight: '20px',
                        color: '#333333'
                    }}>
                        hello@avni.finance
                    </div>

                </div>
            </div>

        </div>
    )
}