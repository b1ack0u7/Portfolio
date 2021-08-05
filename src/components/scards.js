import React from 'react'
import { isMobileOnly } from "react-device-detect"
import ScardBrowser from "./scardBrowser"
import ScardMobile from './scardMobile'

//npm: devices detect resource: https://www.npmjs.com/package/react-device-detect

export default function scard(passed) {
    if(isMobileOnly) {
        return (
            <ScardMobile title={passed.title} desc={passed.desc} subtitle={passed.subtitle} techs={passed.techs} icon={passed.icon} loop={passed.loop} />
        );
    }
    
    else {
        return (
            <ScardBrowser title={passed.title} desc={passed.desc} subtitle={passed.subtitle} techs={passed.techs} icon={passed.icon} loop={passed.loop}/>
        );
    }
}
