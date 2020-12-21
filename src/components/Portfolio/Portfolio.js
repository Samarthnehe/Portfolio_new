import React from 'react';

import {SideNav} from '../SideNav/SideNav';
import {SectionContainer} from '../SectionContainer/SectionContainer';
import './portfolio.css';

export const Portfolio = ({sectionHeading,sectionInfo,sectionQuote,sectionHandleClick,about,skills,projects}) => {
    return (
        <div className="portfolio-container">
            <div className="sidenav-container">
                <SideNav sectionHandleClick={sectionHandleClick}/>
            </div>
            <div className="main-section-container">
                <SectionContainer sectionHeading={sectionHeading} sectionInfo={sectionInfo} sectionQuote={sectionQuote} sectionHandleClick={sectionHandleClick} about={about} skills={skills} projects={projects}/>
            </div>
        </div>
    );
};