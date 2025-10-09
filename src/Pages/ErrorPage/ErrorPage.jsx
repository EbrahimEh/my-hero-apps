import React from 'react';
import errorImg from '../../assets/error-404.png'

const ErrorPage = () => {
    return (
        <div className='flex justify-center items-center h-screen text-center'>
            <div>
                <img src={errorImg} alt="" />
                <h1 className='mt-8 font-bold text-3xl pb-2'>Oops, page not found!</h1>
                <h4 className='secondary pb-2'>The page you are looking for is not available.</h4>
                <button className='gra-clr text-white px-3 py-1 font-semibold rounded'>Go Back</button>
            </div>
        </div>
    );
};

export default ErrorPage;