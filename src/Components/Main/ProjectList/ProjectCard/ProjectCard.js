import React from 'react';

const ProjectCard = ({title, date, children}) => {
    return (
        <article>
            <header>
                <h3>{title}</h3>
                <p>{date}</p>
            </header>
            <div>{children}</div>
        </article>
    )
}

export default ProjectCard;