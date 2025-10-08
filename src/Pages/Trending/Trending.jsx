import React from 'react';
import { IoStar } from "react-icons/io5";
import { MdOutlineFileDownload } from "react-icons/md";

const Trending = ({apps}) => {
    console.log(apps)
    const {image, ratingAvg,downloads, companyName} = apps;
    return (
        <div className='w-[350px] h-[435px] shadow-lg rounded-lg p-3'>
            <div className=''>
                <img className='object-cover rounded-lg pb-3 w-full h-[310px]' src={image} alt="" />
                <h2 className='font-semibold'>{companyName}</h2>
                <div className='flex justify-between py-3'>
                    <div className='flex items-center rounded px-2 py-1 bg-[#e2fcf3] gap-x-1 font-semibold text-[#00D390]'><MdOutlineFileDownload />
                        <span>{downloads}</span>M
                    </div>
                    <div className='flex text-[#FF8811] px-2 py-1 rounded bg-[#f5eae0] items-center gap-x-1'><IoStar />
                        {ratingAvg}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Trending;