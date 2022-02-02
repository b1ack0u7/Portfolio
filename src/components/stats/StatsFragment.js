import React from 'react';

export const StatsFragment = ({name, icon, level}) => {
    return (
        <div className='flex'>
            <i className={`${icon} pt-1 pr-2 md:text-[20px] 2xl:text-[26px]`}/>
            <div>
                <h2 className='font-bold md:text-[18px] 2xl:text-[22px]'>{name}</h2>
                <p className='text-[8px] md:text-[12px] 2xl:text-[16px] 2xl:font-light'>{level}</p>
            </div>
        </div>
    )
};
