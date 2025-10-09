import React from 'react';
import playstr from '../../assets/fi_16076057.png';
import appstr from '../../assets/fi_5977575.png';
import hero from '../../assets/hero.png';

const Banner = () => {
    return (
        <div className='flex items-center justify-center'>
            <div className='mt-20 text-center'>
                <h1 className='text-6xl mb-6 font-bold '>We Build <br />
                    <span className='clr'>Productive</span> Apps</h1>
                <p className='text-[#627382] mb-6'>At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. <br />Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
                <div className='flex  items-center justify-center gap-x-4'>
                    <div onClick={() => window.open('https://play.google.com/store/apps?hl=en')} className='btn'><img src={playstr} alt="" /> Google Play</div>
                    <div onClick={() => window.open('https://www.apple.com/app-store/')} className='btn'><img src={appstr} alt="" /> App Store</div>
                </div>
                <img className='mt-10' src={hero} alt="" />
            </div>
            

        </div>
    );
};

export default Banner;