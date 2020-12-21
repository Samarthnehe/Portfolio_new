import React from 'react';

import './skill-card.css';

export const SkillCard = ({data}) => {
    return (
        <div className="skill-card">
            {data}
        </div>
    )
}