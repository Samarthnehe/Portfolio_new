import React from 'react'

import './project-card.css';

export const ProjectCard = ({name,desc,link}) => {
    return (
        <div className="project-card">
            
            <h2>{name}</h2>
            <p>{desc}</p>
            <a href={link}>Project Link</a>
        </div>
    )
}