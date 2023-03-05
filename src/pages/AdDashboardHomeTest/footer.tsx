import React from 'react';
import { useNavigate } from 'react-router-dom';
import mainLogo from '../../images/logo.png';

export function Footer() {
    const navigate = useNavigate();
    return (
        <div className="flex pt-12 pb-12 items-center pl-20 pr-20" style={{ background: '#EEEEEE' }} >
            <div className="justify-center grid gap-2 grid-cols-1 w-1/3">
                <div>
                    <img src={mainLogo} alt="fireSpot" style={{ width: '89px', height: '48px', }} />
                </div>
                <div style={{
                    fontFamily: 'Open Sans',
                    fontStyle: 'normal',
                    fontWeight: 400,
                    fontSize: '14px',
                    lineHeight: '20px',
                    color: '#333333',
                   textAlign:'justify'
                }}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </div>
            </div>
            <div className='h-1/2 w-2/3 flex justify-evenly'>
                <div >
                    <div>
                        <div style={{ "fontSize": "16px", fontWeight: 600, marginBottom: '10px', color: '#333333' }}>Company</div>
                    </div>
                    <div>
                        <div style={{ "fontSize": "14px", fontWeight: 400, marginBottom: '10px', color: '#333333' }}>About</div>
                    </div>
                    <div>
                        <div style={{ "fontSize": "14px", fontWeight: 400, marginBottom: '10px', color: '#333333' }}>Newsroom</div>
                    </div>
                    <div>
                        <div style={{ "fontSize": "14px", fontWeight: 500, marginBottom: '10px', color: '#333333' }}>Careers</div>
                    </div>
                </div>
                <div >
                    <div>
                        <div style={{ "fontSize": "16px", fontWeight: 600, marginBottom: '10px', color: '#333333' }}>Learn</div>
                    </div>
                    <div>
                        <div style={{ "fontSize": "14px", fontWeight: 400, marginBottom: '10px', color: '#333333' }}>Blog</div>
                    </div>
                    <div>
                        <div style={{ "fontSize": "14px", fontWeight: 400, marginBottom: '10px', color: '#333333' }}>Guides</div>
                    </div>
                </div>
                <div >
                    <div>
                        <div style={{ "fontSize": "16px", fontWeight: 600, marginBottom: '10px', color: '#333333' }}>Legal</div>
                    </div>
                    <div>
                        <div style={{ "fontSize": "14px", fontWeight: 400, marginBottom: '10px', color: '#333333' }}>Privacy Policy</div>
                    </div>
                    <div>
                        <div style={{ "fontSize": "14px", fontWeight: 400, marginBottom: '10px', color: '#333333' }}>Legal Disclosures</div>
                    </div>
                </div>
                <div >
                    <div>
                        <div style={{ "fontSize": "16px", fontWeight: 600, marginBottom: '10px', color: '#333333' }}>Contact Us</div>
                    </div>
                    <div>
                        <div style={{ "fontSize": "14px", fontWeight: 400, marginBottom: '10px', color: '#333333' }}>Help Center</div>
                    </div>
                    <div>
                        <div style={{ "fontSize": "14px", fontWeight: 400, marginBottom: '10px', color: '#333333' }}>Talk to us</div>
                    </div>
                    <div>
                        <div style={{ "fontSize": "14px", fontWeight: 500, marginBottom: '10px', color: '#333333' }}>hello@avni.finance</div>
                    </div>
                </div>
            </div>
        </div>
    )
}