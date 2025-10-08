import React from 'react';
import { useLoaderData, useParams } from 'react-router';

const AppDetails = () => {
    const { id } = useParams()
    const data = useLoaderData();
    const appsId = parseInt(id)
    // console.log(appsId)

    const singleApps = data.find(app => app.id === appsId)
    console.log(singleApps)
    const { image, title, reviews,downloads, companyName, ratingAvg, } = singleApps;
    return (
        <div className='md:mt-30 md:mb-10 md:max-w-[1440px] mx-auto'>
            <div className='flex gap-x-10 items-center'>
                <div className='w-[350px] h-[350px] bg-gray-200'>
                    <img className='p-3 w-full object-cover h-[300px]' src={image} alt="" />
                </div>
                <div>
                    <div>
                        <h2>{title}</h2>
                        <p>{companyName}</p>
                    </div>
                    <div>
                        <div>
                            <h3>Downloads</h3>
                            <span>{downloads}</span>
                        </div>
                        <div>
                            <h3>Avarage Rating</h3>
                            <span>{ratingAvg}</span>
                        </div>
                        <div>
                            <h3>Total Reviews</h3>
                            <span>{reviews}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppDetails;