import React from 'react';
import appError from '../../assets/App-Error.png'
import { NavLink } from 'react-router';

const NoApps = () => {
    return (
        <div className='flex justify-center items-center text-center'>
            <div>
                <img className='bg-center mx-auto' src={appError} alt="" />
                <h1 className='mt-8 text-3xl font-semibold pb-2'>OPPS!! APP NOT FOUND</h1>
                <p className='secondary'>The App you are requesting is not found on our system.  please try another apps</p>
                <NavLink to='/'>
                    <button className='gra-clr mt-5 text-white px-3 py-1 font-semibold rounded'>Go Back</button>
                </NavLink>
            </div>
        </div>
    );
};

export default NoApps;