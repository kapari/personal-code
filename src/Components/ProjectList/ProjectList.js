import React from 'react';
import styled from '@emotion/styled';
import Codepen from "react-codepen-embed";
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
                <ProjectCard title="CSS Art" date="2020">
                    <Codepen
                        hash="GRJgmQz"
                        user="kapari"
                        height="300px"
                        loader={() => <div>Loading...</div>}
                    />
                </ProjectCard>
            </li>
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