import React from 'react';
import { StatsFragment } from './StatsFragment';

export const Stats = () => {

    const skills = {
        front: [
            {name:"HTML", icon:"bx bxl-html5 text-red-400", level:"Intermedio"}, 
            {name:"CSS", icon:"bx bxl-css3 text-amber-400", level:"Intermedio+"}, 
            {name:"Tailwind", icon:"bx bxl-tailwind-css text-teal-300", level:"Intermedio+"}, 
            {name:"JavaScript", icon:"bx bxl-javascript text-[#F8FE2D]", level:"Intermedio"}, 
            {name:"React", icon:"bx bxl-react text-cyan-400", level:"Intermedio"}
        ],
        back: [
            {name:"SQL", icon:"bx bxs-data", level:"Intermedio"}, 
            {name:"PHP", icon:"bx bxl-php text-indigo-400", level:"Basico"}, 
            {name:"Firebase", icon:"bx bxl-firebase text-rose-500", level:"Intermedio"}, 
            {name:"NodeJS", icon:"bx bxl-nodejs text-green-400", level:"Basico"}
        ],
        mobile: [
            {name:"Swift", icon:"bx bxl-apple text-[#F8BC47]", level:"Avanzado+"}, 
            {name:"Kotlin", icon:"bx bxl-android text-lime-400", level:"Basico"}
        ],
        languages: [
            {name:"Python", icon:"bx bxl-python text-blue-500", level:"Avanzado"}, 
            {name:"C++", icon:"bx bxl-c-plus-plus text-blue-300", level:"Intermedio"}, 
            {name:"R", icon:"bx bx-line-chart text-blue-400", level:"Basico"}, 
            {name:"Shell", icon:"bx bx-terminal", level:"Basico+"}
        ]
    };

    return (
        <section className='w-full h-full grid place-items-center font-[Poppins] px-[1rem] pb-20 md:px-[8rem]' id='stats'>
            <h1 className='text-[22px] font-semibold mb-5 text-[#a1e7c4] md:text-[28px] 2xl:text-[40px]'>Mis habilidades</h1>

            <div className='w-full grid grid-cols-1 place-items-center gap-4 md:grid-cols-2 md:px-[3rem] md:gap-8 2xl:px-[21rem]'>

                <div className='text-center bg-[#152c53] w-[260px] h-[200px] p-2 rounded-lg md:w-[350px] md:h-[240px] 2xl:w-[450px] 2xl:h-[285px]'>
                    <h2 className='font-medium text-[#ccd6f6] md:text-[22px] md:pb-2 2xl:text-[26px]'>Frontend</h2>
                    <div className='text-left place-content-center place-items-start grid grid-cols-2 gap-y-5 mt-1 ml-2'>
                        {
                            skills.front.map(item => (
                                <StatsFragment key={item.name} {...item}/>
                            ))
                        }
                    </div>
                </div>

                <div className='text-center bg-[#152c53] w-[260px] h-[140px] p-2 rounded-lg md:w-[350px] md:h-[240px] 2xl:w-[450px] 2xl:h-[285px]'>
                    <h2 className='font-medium text-[#ccd6f6] md:text-[22px] md:pb-2 2xl:text-[26px]'>Backend</h2>
                    <div className='text-left place-content-center place-items-start grid grid-cols-2 gap-y-5 mt-1 ml-2'>
                        {
                            skills.back.map(item => (
                                <StatsFragment key={item.name} {...item}/>
                            ))
                        }
                    </div>
                </div>

                <div className='text-center bg-[#152c53] w-[260px] h-[150px] p-2 rounded-lg md:w-[350px] md:h-[200px] 2xl:w-[450px] 2xl:h-[250px]'>
                    <h2 className='font-medium text-[#ccd6f6] md:text-[22px] md:pb-2 2xl:text-[26px]'>Movil</h2>
                    <div className='text-left place-content-center place-items-start grid grid-cols-2 gap-y-5 mt-1 ml-2'>
                        {
                            skills.mobile.map(item => (
                                <StatsFragment key={item.name} {...item}/>
                            ))
                        }
                        <img className='w-[50px] ml-5 md:w-[70px] md:ml-6 2xl:w-[90px]' src='https://is2-ssl.mzstatic.com/image/thumb/Purple126/v4/24/0e/2d/240e2d5d-6aef-cecd-fed8-05223333f8af/Xcode-85-220-0-4-2x.png/1200x630bb.png' alt='xcode'/>
                        <img className='w-[40px] ml-7 md:w-[60px] md:ml-8 2xl:w-[80px]' src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Android_Studio_Icon_%282014-2019%29.svg/1200px-Android_Studio_Icon_%282014-2019%29.svg.png' alt='androidSTD'/>
                        
                    </div>
                </div>

                <div className='text-center bg-[#152c53] w-[260px] h-[140px] p-2 rounded-lg md:w-[350px] md:h-[200px] 2xl:w-[450px] 2xl:h-[250px]'>
                    <h2 className='font-medium text-[#ccd6f6] md:text-[22px] md:pb-2 2xl:text-[26px]'>Lenguajes</h2>
                    <div className='text-left place-content-center place-items-start grid grid-cols-2 gap-y-5 mt-1 ml-2'>
                        {
                            skills.languages.map(item => (
                                <StatsFragment key={item.name} {...item}/>
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
    )
};
