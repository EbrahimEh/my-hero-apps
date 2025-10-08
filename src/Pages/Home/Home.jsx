import React from 'react';
import Banner from '../../components/Banner/Banner';
import Reviews from '../Reviews/Reviews';
import TrendingApps from '../TrendingApps/TrendingApps';
import { useLoaderData } from 'react-router';

const Home = () => {
    const trend = useLoaderData()
    // console.log(trend)
    return (
        <div>
            <Banner></Banner>
            <Reviews></Reviews>
            <div className='md:max-w-[1440px] mx-auto'>
                <TrendingApps trend={trend}></TrendingApps>
            </div>
        </div>
    );
};

export default Home;