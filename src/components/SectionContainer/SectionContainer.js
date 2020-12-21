import React from 'react';

import {About} from '../About/About';
import {Skills} from '../Skills/Skills';
import {Projects} from '../Projects/Projects';
import './section-container.css';

export const SectionContainer = ({sectionHeading, sectionInfo, sectionQuote, sectionHandleClick,about,skills,projects}) => {
    return (
        <div className="section-container">
            <div className="section-heading-container">
                <h4 className="main-heading">{sectionHeading}</h4>
                <p className="main-quote">{sectionQuote}</p>
            </div>
            <div className="section-component">
                {
                    {about:<About data={about}/>,
                    projects:<Projects projects={projects}/>,
                    skills:<Skills skills={skills}/>
                    }[sectionInfo]
                }
            </div>
        </div>
    )
}