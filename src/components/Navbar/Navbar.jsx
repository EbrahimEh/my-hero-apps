import React from 'react';
import logoImg from '../../assets/logo.png'
import { FaGithub } from "react-icons/fa6";


const Navbar = () => {
    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <li><a>Item 1</a></li>
                        <li>
                            <a>Parent</a>
                            <ul className="p-2">
                                <li><a>Submenu 1</a></li>
                                <li><a>Submenu 2</a></li>
                            </ul>
                        </li>
                        <li><a>Item 3</a></li>
                    </ul>
                </div>
                <div className='flex items-center'>
                    <img className='w-[40px] h-[40px]' src={logoImg} alt="" />
                    <h2 className='clr font-bold ml-1 text-lg'>Hero.IO</h2>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <div role="tablist" className="tabs tabs-border">
                    <a role="tab" className="tab">Home</a>
                    <a role="tab" className="tab tab-active">Apps</a>
                    <a role="tab" className="tab">Installation</a>
                </div>
            </div>
            <div className="navbar-end">
                <a href='https://github.com/EbrahimEh' target='blank' className="btn gra-clr text-white"><FaGithub /> Contribute</a>
            </div>
        </div>
    );
};

export default Navbar;