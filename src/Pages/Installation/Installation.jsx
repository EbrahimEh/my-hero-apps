import React from 'react';
import { useLoaderData } from 'react-router';

const Installation = () => {
    const allApps = useLoaderData();
    console.log(allApps)
    return (
        <div className='md:mt-30 md:max-w-[1440px] mx-auto'>
            <div className='text-center'>
                <h1 className='text-3xl font-semibold pb-2'>Your Installed Apps</h1>
                <p className='secondary pb-8'>Explore All Trending Apps on the Market developed by us</p>
            </div>
            <div className='flex justify-between mb-5'>
                <h2>{} Apps Found</h2>
                <div className='flex items-center px-2 py-1 rounded shadow border border-gray-300 w-fit'>
                    <h2>Short By</h2>
                    <select>
                        <option value=""></option>
                        <option value="">B</option>
                    </select>
                    
                </div>
            </div>
        </div>
    );
};

export default Installation;