import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import AllApps from '../AllApps/AllApps';
import NoApps from '../NoApps/NoApps';

const Apps = () => {
    const allApps = useLoaderData();
    // console.log(allApps)
    const [searchApps, setSearchApps] = useState('')
    // console.log(searchApps)
    const filterApps = allApps.filter(app => app.title.toLowerCase().includes(searchApps.toLowerCase()));

    return (
        <div className='md:mt-30 md:max-w-[1440px] mx-auto md:mb-10'>
            <div className=''>
                <h1 className='text-4xl font-bold text-center'>Our All Applications</h1>
                <p className='text-center mt-3 mb-8 text-[#627382]'>Explore All Apps on the Market developed by us. We code for Millions</p>
            </div>
            <div>
                <div className='flex justify-between items-center'>
                    <div className='font-semibold'><span>({filterApps.length})</span> Apps Found</div>
                    <div className='border border-gray-300 px-3 py-1 md:w-60 rounded'>
                        <input className='focus:outline-none' value={searchApps} onChange={(e) => setSearchApps(e.target.value)} type="text" placeholder='Search Apps' />
                    </div>
                </div>
                {
                    filterApps.length === 0 && searchApps && (
                        <div>
                            <NoApps></NoApps>
                        </div>
                    )
                }
                <div className='grid md:grid-cols-4 gap-x-5 gap-y-5'>
                    {
                        filterApps.map(app => <AllApps key={app.id} app={app}></AllApps>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Apps;