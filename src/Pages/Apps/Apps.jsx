import React from 'react';
import { useLoaderData } from 'react-router';
import AllApps from '../AllApps/AllApps';

const Apps = () => {
    const allApps = useLoaderData();
    // console.log(allApps)
    return (
        <div className='md:mt-30 md:max-w-[1440px] mx-auto md:mb-10'>
            <div className=''>
                <h1 className='text-4xl font-bold text-center'>Our All Applications</h1>
                <p className='text-center mt-3 mb-8 text-[#627382]'>Explore All Apps on the Market developed by us. We code for Millions</p>
            </div>
            <div>
                <div className='flex justify-between items-center'>
                    <div className='font-semibold'><span>({allApps.length})</span> Apps Found</div>
                    <div className='border border-gray-300 px-3 py-1 md:w-60 rounded'>
                        <input type="text" placeholder='Search Apps' />
                    </div>
                </div>
                <div className='grid md:grid-cols-4 gap-x-5 gap-y-5'>
                    {
                        allApps.map(app => <AllApps key={app.id} app={app}></AllApps>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Apps;