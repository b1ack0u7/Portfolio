import React from 'react';

export const Footers = () => {
    const copyEmail = () => {
        const mID = document.getElementById('toast');
        navigator.clipboard.writeText('axelmontes@protonmail.com');
        mID.classList.remove('opacity-0');
        mID.classList.add('opacity-100');

        setTimeout(() => {
            mID.classList.remove('opacity-100');
            mID.classList.add('opacity-0');
        }, 2000);
    }

    return (
        <div>
            <div id="toast" className="fixed flex right-8 top-16 items-center w-full max-w-xs p-4 space-x-4 divide-x rounded-lg shadow text-gray-200 divide-gray-400 space-x bg-gray-700 duration-500 opacity-0" role="alert">
                <i className='bi bi-clipboard-check text-[24px] text-emerald-400'/>
                <div className="pl-4 text-sm font-normal">Correo copiado</div>  
            </div>

            <div className='fixed bottom-4 grid justify-items-center gap-4 md:pl-8 2xl:pl-16'>
                <a className='bx bxl-github text-[25px] text-[#ccd6f6] duration-200 hover:text-[#7feeb6]' href='https://github.com/b1ack0u7' target="_blank" rel="noopener noreferrer"/>
                
                <i className='bi bi-envelope-fill text-[20px] text-[#ccd6f6] cursor-pointer duration-200 hover:text-[#7feeb6]' onClick={copyEmail}/>
                
                <div className='w-[2px] h-[60px] rounded-xl bg-[#ccd6f6]'/>
            </div>

        </div>
    )
};
