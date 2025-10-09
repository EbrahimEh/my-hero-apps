import React, { useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import dicon from '../../assets/icon-downloads.png'
import aicon from '../../assets/icon-ratings.png'
import ricon from '../../assets/icon-review.png'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const MySwal = withReactContent(Swal)

const AppDetails = () => {
    const { id } = useParams()
    const data = useLoaderData();
    const appsId = parseInt(id)
    // console.log(appsId)

    const [install, setInstall] = useState(true)
    const handleButton = () => {
        if (!install) {
            return;
        }
        setInstall(!install)

        MySwal.fire({
            title: <p>Installing....</p>,
            didOpen: () => {
                MySwal.showLoading();

                // 2 second পর automatically close হবে
                setTimeout(() => {
                    MySwal.close();
                    MySwal.fire({
                        title: <p>Installed Successfully!</p>,
                        icon: 'success',
                        timer: 800,
                        showConfirmButton: false
                    });
                }, 2000);
            },
        });
    }

    const singleApps = data.find(app => app.id === appsId)
    console.log(singleApps)
    const { image, description, title, ratings, reviews, downloads, companyName, ratingAvg, } = singleApps;
    return (
        <div className='md:mt-30 md:mb-10 md:max-w-[1440px] mx-auto'>
            <div className='flex gap-x-10 items-center'>
                <div className='w-[350px] h-[350px] rounded bg-gray-200'>
                    <img className='p-3 w-full object-cover h-[350px] rounded-2xl' src={image} alt="" />
                </div>
                <div>
                    <div className='mb-5'>
                        <h2 className='text-3xl font-semibold pb-2'>{title}</h2>
                        <p><span className='secondary'>Developed by</span> <span className='clr font-semibold'>{companyName} i.o</span></p>
                    </div>
                    <div className='border-1 w-260 border-gray-400 mb-5'></div>
                    <div className='flex gap-x-12'>
                        <div>
                            <img className='w-6' src={dicon} alt="" />
                            <h3>Downloads</h3>
                            <span className='text-3xl font-bold'>{downloads}M</span>
                        </div>
                        <div>
                            <img className='w-6' src={aicon} alt="" />
                            <h3>Avarage Rating</h3>
                            <span className='text-3xl font-bold'>{ratingAvg}</span>
                        </div>
                        <div>
                            <img className='w-6' src={ricon} alt="" />
                            <h3>Total Reviews</h3>
                            <span className='text-3xl font-bold'>{reviews}</span>
                        </div>
                    </div>
                    <div onClick={() => handleButton()} className='mt-6'>
                        <button disabled={!install} className='btn btn-success'>{install ? "Installed Now (291 MB)" : "Installed"}</button>
                    </div>
                </div>
            </div>

            <div className='border-1 w-full md:mt-8 border-gray-200 mb-5'></div>

            {/* ---Ratings */}
            <div className='z-0'>
                <h2 className='font-semibold text-2xl'>Ratings</h2>
                <div className='h-96 mt-5 bg-white p-5 rounded-lg shadow'>
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart
                            layout="vertical"
                            data={ratings}
                            margin={{
                                top: 10,
                                right: 20,
                                left: 20,
                                bottom: 10
                            }}
                        >
                            <Tooltip></Tooltip>

                            <XAxis type="number" />
                            <YAxis
                                type="category"
                                dataKey="name"
                                width={40}
                                reversed={true}
                            />
                            <Tooltip />
                            <Legend />
                            <Bar
                                dataKey="count"
                                fill="#FF8811"
                                name="Number of Ratings"
                                radius={[0, 4, 4, 0]}
                            />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>

            {/* ---Description */}
            <div className='md:mt-8'>
                <h2 className='font-semibold text-2xl'>Description</h2>
                <div className='mt-5'>
                    <p className='text-justify'>{description}</p>
                </div>
            </div>
        </div >
    );
};

export default AppDetails;