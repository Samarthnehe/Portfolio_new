import React from 'react';
import myImg from '../samarth.jpeg';
import './sidenav.css';

export const SideNav = ({sectionHandleClick}) => {
    return (
        <div className="sidenav">
            <img src={myImg} alt=""></img>
            <h2 className="main-name">Samarth Nehe</h2>
            <p className="subtitle">Front End Web Developer and Speedcuber</p>
            <div className="sections-list">
                <p onClick={()=>sectionHandleClick("about")} className="section-list-element">About Me</p>
                <p onClick={()=>sectionHandleClick("skills")} className="section-list-element">Skills</p>
                <p onClick={()=>sectionHandleClick("projects")} className="section-list-element">Projects</p>
            </div>

        </div>
    );
};