import React from 'react';

export const ProjectFragment = ({title, body, status, icon, github, tags}) => {
    // 0: Upcoming | 1: Designing | 2: Building | 3: Completed

    const statusComponent = () => {
        switch(status) {
            case '0':
                return (
                    <div className='-mt-[9px]'>
                        <i data-tooltip-target='tooltip-0' data-tooltip-placement='bottom' data-tooltip-style='light' className='bi bi-lightbulb-fill text-[22px] text-purple-500 md:text-[24px]'/>
                            <div id="tooltip-0" role="tooltip" className="inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 shadow-sm opacity-0 tooltip ">
                                Por venir
                            <div className="tooltip-arrow" data-popper-arrow></div>
                        </div>
                    </div>
                )
            case '1':
                return (
                    <div className='-mt-[9px] md:-mt-[7px]'>
                        <i data-tooltip-target='tooltip-1' data-tooltip-placement='bottom' data-tooltip-style='light' className='bi bi-columns-gap text-[22px] text-cyan-400 md:text-[24px]'/>
                            <div id="tooltip-1" role="tooltip" className="inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 shadow-sm opacity-0 tooltip ">
                                Diseñando
                            <div className="tooltip-arrow" data-popper-arrow></div>
                        </div>
                    </div>
                )
            case '2':
                return (
                    <div className='-mt-[6px] md:-mt-[7px]'>
                        <i data-tooltip-target='tooltip-2' data-tooltip-placement='bottom' data-tooltip-style='light' className='bi bi-code-slash text-[#F8FE2D] md:text-[28px]'/>
                            <div id="tooltip-2" role="tooltip" className="inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 shadow-sm opacity-0 tooltip ">
                                En desarrollo
                            <div className="tooltip-arrow" data-popper-arrow></div>
                        </div>
                    </div>
                )
            case '3':
                return (
                    <div className='-mt-[6px]'>
                        <i data-tooltip-target='tooltip-3' data-tooltip-placement='bottom' data-tooltip-style='light' className='bx bx-check-circle text-emerald-400 md:text-[28px]'/>
                            <div id="tooltip-3" role="tooltip" className="inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 shadow-sm opacity-0 tooltip ">
                                Terminado
                            <div className="tooltip-arrow" data-popper-arrow></div>
                        </div>
                    </div>
                )
            default:
                return <p>error</p>
        };
    }
    
    return (
        <div className='bg-[#152c53] w-[260px] h-[210px] px-4 pt-4 rounded-lg md:w-[280px] md:h-[220px] 2xl:w-[450px] 2xl:h-[250px]'>
            <div className='w-full flex justify-between text-[28px]'>
                <i className={`${icon} md:text-[32px]`}/>
                {statusComponent()}
                <a className='bx bxl-github duration-200 hover:text-[#7feeb6] md:text-[32px]' href={github} target="_blank" rel="noopener noreferrer"/>
            </div>

            <div className='grid'>
                <h2 className='text-[18px] font-[Roboto] font-normal md:text-[22px] 2xl:text-[26px]'>{title}</h2>
                <p className='text-[14px] h-[90px] md:text-[16px] md:font-light 2xl:text-[20px]'>{body}</p>

                <div className='flex justify-around font-extralight mt-2 md:mt-4 md:text-[16px] 2xl:text-[18px] 2xl:mt-8'>
                    {
                        tags.map(tag => (
                            <p>{tag}</p>
                        ))
                    }
                </div>
            </div>
        </div>
    )
};
