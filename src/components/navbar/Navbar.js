import React from 'react';
import { IconFragment } from './IconFragment';

export const Navbar = () => {
    const iconMenu = [
        {id: 0, icon: 'bx-home-alt', target: "#home"},
        {id: 1, icon: 'bx-stats', target: "#stats"},
        {id: 2, icon: 'bx-book-content', target: "#projects"},
        {id: 3, icon: 'bx-message-square-dots', target: "#contact"}
    ];

    return (
        <>
            <div className='fixed top-0 left-0 w-full py-2 px-[2rem] md:px-[3rem] 2xl:px-[7rem]'>
                <div className='flex justify-between items-center'>
                    <p className='text-[#a9e0c5] font-semibold duration-150 text-[22px] font-[Poppins] select-none'>Axel</p>
                    <div>
                        <i className='bi bi-translate duration-300 text-[20px] text-[#ccd6f6] mr-8 hover:text-[#7feeb6] hover:cursor-pointer'/>
                        <i className='bx bx-moon duration-300 text-[20px] text-[#ccd6f6]'/>
                        {/* <i className='bx bx-moon duration-300 text-[20px] text-gray-300 hover:text-[#7feeb6] hover:cursor-pointer'/> */}
                    </div>
                </div>
            </div>

            <nav className='flex justify-center items-center'>
                <div className='fixed w-[70%] py-5 px-8 bottom-4 backdrop-blur-sm bg-[#50617E]/50 rounded-full md:w-[35%] 2xl:w-[20%]'>
                    <ul className='flex justify-between items-center -mb-2'>
                        {
                            iconMenu.map(item => (
                                <IconFragment key={item.id} icon={item.icon} target={item.target}/>
                            ))
                        }
                    </ul>
                </div>
            </nav>
        </>
    )
};
