import React from 'react';
import {ProjectCard} from '../ProjectCard/ProjectCard';
import './projects.css';

export const Projects = ({ projects }) => {
    return (
        <div className="projects-container">
            <div className="industry-skill-container">
                {projects.projectList.map(project=><ProjectCard name={project.name} desc={project.description} link={project.link}/>)}
            </div>
        </div>
    )
}