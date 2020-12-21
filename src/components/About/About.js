import React from 'react';

import './about.css';

export const About = ({data}) => {
    return (
        <div className="about-container">
            <p>{data.bio}</p>
        </div>
    )
}