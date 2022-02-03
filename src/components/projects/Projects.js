import React from 'react';
import { iconData } from '../data/DataComponents';
import { ProjectFragment } from './ProjectFragment';

export const Projects = () => {
    // 0: Upcoming | 1: Designing | 2: Building | 3: Completed

    const myProjects = [
        {title:'Remir', body:'Una applicacion para IOS en donde puedes organizar tu dia a dia.', status:'2', icon:iconData.swift, github:'https://github.com/b1ack0u7/Remir', tags:['Swift','CoreData']},
        {title:'Luvia', body:'Una applicacion web para organizar archivos de manera mas eficiente.', status:'1', icon:iconData.react, github:'', tags:['React', 'Firebase', 'JS']},
        {title:'Atomas Solver', body:'Un script que te permite ganar en el juego de Atomas utilizando arreglos', status:'3', icon:iconData.python, github:'https://github.com/b1ack0u7/Atomas_solver', tags:['Python']},
        {title:'Portafolio', body:'Este portafolio, en donde puedo poner mis proyectos', status:'2', icon:iconData.react, github:'https://github.com/b1ack0u7/Portfolio', tags:['React', 'Tailwind']}
    ];

    return (
        <section className='w-full h-full grid place-items-center pb-[6rem] font-[Poppins] px-[1rem] md:px-[8rem]' id='projects'>
            <h1 className='text-[22px] font-semibold mb-5 text-[#a1e7c4] md:text-[28px] 2xl:text-[40px]'>Mis Proyectos</h1>

            <div className='grid gap-4 md:grid-cols-3 md:gap-12 md:gap-y-3 2xl:gap-y-10 2xl:gap-x-8'>
                {
                    myProjects.map(item => (
                        <ProjectFragment key={item.title} {...item}/>
                    ))
                }
            </div>
        </section>
    )
};
