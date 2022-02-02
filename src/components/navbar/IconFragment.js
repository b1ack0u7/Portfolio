import React from 'react';

export const IconFragment = ({icon, isActive = false, target}) => {
    return (
        <li>
            <a href={target}>
                <i className={`bx ${icon} text-[1.6rem] duration-300 hover:text-[#7feeb6] ${(isActive ? 'text-[#7feeb6]' : 'text-gray-200')}`}></i>
            </a>
        </li>
    )
};
