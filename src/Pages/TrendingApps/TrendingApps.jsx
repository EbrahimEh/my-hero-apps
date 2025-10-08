import React from 'react';
import Trending from '../Trending/Trending';

const TrendingApps = ({trend}) => {
    // console.log(trend)
    
    return (
        <div className='md:mt-10 md:mb-10'>
            <h1 className='text-4xl font-bold text-center'>Trending Apps</h1>
            <p className='text-center mt-3 mb-8 text-[#627382]'>Explore All Trending Apps on the Market developed by us</p>
            <div className='grid md:grid-cols-4 gap-x-5 gap-y-5'>
                {
                    trend.map(apps => <Trending apps={apps}></Trending>)
                }
            </div>
            <div className='flex justify-center md:mt-10'>
                <button className='btn gra-clr px-8 text-white'>Show All</button>
            </div>
        </div>
    );
};

export default TrendingApps;