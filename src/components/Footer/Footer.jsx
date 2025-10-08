import React from 'react';
import logoImg from '../../assets/logo.png'

const Footer = () => {
    return (
        <div className='md:max-w-[1600px] bg-gray-300 md:h-[210px] flex justify-center items-center mx-auto'>
            <footer className=''>
                <div className=''>
                    <div className='flex items-center justify-center pb-5'>
                        <img className='w-[40px] h-[40px]' src={logoImg} alt="" />
                        <h2 className='clr font-bold ml-1 text-lg'>Hero.IO</h2>
                    </div>
                    <ul className='flex gap-x-4 items-center justify-center mb-5'>
                        <li>Home</li>
                        <li>About</li>
                        <li>Company</li>
                        <li>Services</li>
                        <li>Contact Us</li>
                        
                    </ul>
                </div>
                <p>Copyright © 2025 - All right reserved by ACME Industries Ltd</p>
            </footer>
        </div>
    );
};

export default Footer;