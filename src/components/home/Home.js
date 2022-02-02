import React from 'react';
import '@themesberg/flowbite';

export const Home = () => {

    return (
        <section className='w-full h-full grid place-items-center pt-4 pb-20 font-[Poppins] px-[1rem] md:px-[8rem]' id='home'>
            <h1 className='text-[22px] font-semibold mb-5 text-[#a1e7c4] md:text-[28px] 2xl:text-[40px]'>¿Quien soy?</h1>

            <div className=' grid grid-cols-2 mb-11'>
                <div className='grid place-items-center'>
                    <p className='text-[10px] text-[#8c96b8] md:text-[18px] 2xl:text-[22px]'>Hola , yo soy</p>
                    <h1 className='font-bold text-[10px] text-[#ccd6f6] mb-4 md:text-[28px] md:mb-8 2xl:text-[32px]'>Axel Montes de Oca</h1>
                    <div className='w-[70px] h-[70px] rounded-full bg-slate-300 mb-6 md:w-[150px] md:h-[150px] md:mb-10 2xl:mb-12'/>

                    <ul className='w-full flex justify-around md:px-16 2xl:px-36'>
                        <li className='bg-[#2a3b65] text-[10px] p-1 select-none rounded-lg ring-1 ring-orange-400 md:text-base md:p-2 md:ring-2 2xl:text-[20px] 2xl:p-2'>#Swift</li>

                        <li className='bg-[#2a3b65] text-[10px] p-1 select-none rounded-lg ring-1 ring-blue-500 md:text-base md:p-2 md:ring-2 2xl:text-[20px] 2xl:p-2'>#Python</li>
                        
                        <li data-tooltip-target='tooltip-tf' data-tooltip-placement='bottom' data-tooltip-style='light' className='bg-[#2a3b65] text-[10px] p-1 select-none rounded-lg ring-1 ring-red-500 md:text-base md:p-2 md:ring-2 2xl:text-[20px] 2xl:p-2'>#TF</li>
                        <div id="tooltip-tf" role="tooltip" className="inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 shadow-sm opacity-0 tooltip ">
                            Tensorflow
                            <div className="tooltip-arrow" data-popper-arrow></div>
                        </div>
                    </ul>
                </div>

                <div className='grid content-center text-center 2xl:mx-20 2xl:pr-40'>
                    <p className='text-[10px] md:text-[20px] 2xl:text-[24px]'>Soy un desarrollador y he trabajado con varias tecnologias a lo largo de mis estudios, pero actualmente estoy trabajando con desarrollo web y applicaciones para moviles.</p>
                    <br/>
                    <p className='text-[10px] text-[#ccd6f6] md:text-base 2xl:text-[18px]'>Ademas de que me gusta mucho el tema de "Machine Learning" y todas sus ramas.</p>
                </div>
            </div>

            <h2 className='font-semibold text-[#a1e7c4] md:text-[20px] 2xl:text-[30px]'>Lo que me gusta hacer</h2>
            <div className='w-full grid gap-4 place-items-center mt-4 md:grid-cols-3 md:gap-0 md:mt-6 2xl:px-56'>

                <div className='grid gap-1 text-center bg-[#152c53] w-[190px] h-[170px] p-2 rounded-lg md:w-[250px] md:h-[200px] 2xl:w-[300px] 2xl:h-[250px]'>
                    <h3 className='text-[16px] text-[#ccd6f6] font-semibold md:text-[22px] 2xl:text-[26px] 2xl:mt-2'>Desarrollo Movil</h3>
                    <p className='text-[12px] md:text-[14px] 2xl:text-[18px]'>Me gusta desarrollar applicaciones nativas para dispositivos moviles</p>
                    <i className='bi bi-phone text-[22px] md:text-[28px] 2xl:text-[33px]'/>
                    <div className='flex justify-between font-extralight select-none mx-5 md:text-[20px] 2xl:text-[24px]'>
                        <p className='text-orange-400'>SwiftUI</p>
                        <p className='text-green-400'>Kotlin</p>
                    </div>
                </div>

                <div className='grid gap-1 text-center bg-[#152c53] w-[190px] h-[170px] p-2 rounded-lg md:w-[250px] md:h-[200px] 2xl:w-[300px] 2xl:h-[250px]'>
                    <h3 className='text-[16px] text-[#ccd6f6] font-semibold md:text-[22px] 2xl:text-[26px] 2xl:mt-2'>Desarrollo Web</h3>
                    <p className='text-[12px] md:text-[14px] 2xl:text-[18px]'>Tambien desarrollo sitios web FrontEnd y BackEnd</p>
                    <i className='bi bi-laptop text-[22px] md:text-[30px] 2xl:text-[33px]'/>
                    <div className='flex justify-between font-extralight select-none mx-5 md:text-[20px] 2xl:text-[24px]'>
                        <p className='text-cyan-400'>React</p>
                        <p className='text-rose-500'>Firebase</p>
                    </div>
                </div>

                <div className='grid gap-1 text-center bg-[#152c53] w-[190px] h-[170px] p-2 rounded-lg md:w-[250px] md:h-[200px] 2xl:w-[300px] 2xl:h-[250px]'>
                    <h3 className='text-[16px] text-[#ccd6f6] font-semibold md:text-[22px] 2xl:text-[26px] 2xl:mt-2'>IA</h3>
                    <p className='text-[12px] md:text-[14px] 2xl:text-[18px]'>Me encanta aprender mas sobre Machine Learning</p>
                    <i className='bx bx-scatter-chart text-[22px] md:text-[30px] 2xl:text-[33px]'/>
                    <div className='flex justify-between font-extralight select-none mx-2 md:text-[20px] 2xl:text-[24px]'>
                        <p className='text-blue-500'>Python</p>
                        <p className='text-red-500'>Tensorflow</p>
                    </div>
                </div>
            </div>
        </section>
    )
};
