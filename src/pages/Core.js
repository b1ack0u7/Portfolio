import React from 'react';
import { Home } from '../components/home/Home';
import { Navbar } from '../components/navbar/Navbar';
import { Projects } from '../components/projects/Projects';
import { Stats } from '../components/stats/Stats';
import { Footers } from '../components/UI/Footers';

export const Core = () => {
    return (
        <div className='h-full w-full px-[1rem] md:[3rem] bg-[#0a192f] text-white'>
                <Navbar/>
                <Footers/>

                <div className='pt-14'>
                    <Home/>
                    <Stats/>
                    <Projects/>
                </div>

                <div className='w-full text-center pb-20 font-[Poppins] text-[10px] text-zinc-400 font-light md:text-[14px] md:pb-22'>
                    <p>Diseñado por mi</p>
                    <p>ʕ•́ᴥ•̀ʔっ</p>
                </div>
        </div>
    )
};
