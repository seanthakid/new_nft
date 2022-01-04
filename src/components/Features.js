import React from 'react';
import Borg from './video/borg.mp4';


const Features = () => {
    return (
        <div className = "App">
            <video
            autoPlay
            loop
            muted>
                <source src= {Borg} type  = "video/mp4"/>
            </video>
        </div>
    );
};

export default Features;