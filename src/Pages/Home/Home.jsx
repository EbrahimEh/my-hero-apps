import React from 'react';
import Banner from '../../components/Banner/Banner';
import Reviews from '../Reviews/Reviews';
import TrendingApps from '../TrendingApps/TrendingApps';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Reviews></Reviews>
            <div className='md:max-w-[1440px] mx-auto'>
                <TrendingApps></TrendingApps>
            </div>
        </div>
    );
};

export default Home;