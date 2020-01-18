import React from 'react';
import styled from '@emotion/styled';
import ProjectCard from './ProjectCard/ProjectCard';

const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style-type: none;
`;

const ProjectList = () => {
    return (
        <List>
            <li>
                <ProjectCard title="Personal Code Site" date="2019">
                    <p>Stuff</p>
                </ProjectCard>
            </li>
            <li>
                <ProjectCard title="DanceMatch" date="2015">
                    <p>Stuff</p>
                </ProjectCard>
            </li>
            <li>
                <ProjectCard title="Twitterbot: On This Day" date="2015">
                    <p>Stuff</p>
                </ProjectCard>
            </li>
            <li>
                <ProjectCard title="Pattern Agents" date="2013">
                    <p>Stuff</p>
                </ProjectCard>
            </li>
        </List>
    )
}

export default ProjectList;