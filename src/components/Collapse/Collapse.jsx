import { useState } from 'react';
import './collapse.css';

export default function Collapse({ children, collapsedLabel, expandedLabel, isExpanded }) {
    const [expanded, setExpanded] = useState(isExpanded)
    const handleExpandedChange = () => {
        setExpanded((expanded) => !expanded)
    }
    
    return (
        <div className='container'>
            {expanded && children}
            <div className='container-btn'>
                <button className='btn' onClick={handleExpandedChange}>
                    {expanded ? expandedLabel : collapsedLabel}
                </button>
            </div>
        </div>
    )    
}

Collapse.defaultProps = {
    collapsedLabel: 'Подробнее',
    expandedLabel: 'Скрыть'
}