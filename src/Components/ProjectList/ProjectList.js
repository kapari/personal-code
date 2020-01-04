import React from 'react';
import ProjectCard from './ProjectCard/ProjectCard';
import styles from './ProjectList.module.css';

const ProjectList = () => {
    return (
        <ul className={styles.list}>
            <li className={styles.item}>
                <ProjectCard title="Personal Code Site" date="2019">
                    <p>Stuff</p>
                </ProjectCard>
            </li>
            <li className={styles.item}>
                <ProjectCard title="DanceMatch" date="2015">
                    <p>Stuff</p>
                </ProjectCard>
            </li>
            <li className={styles.item}>
                <ProjectCard title="Twitterbot: On This Day" date="2015">
                    <p>Stuff</p>
                </ProjectCard>
            </li>
            <li className={styles.item}>
                <ProjectCard title="Pattern Agents" date="2013">
                    <p>Stuff</p>
                </ProjectCard>
            </li>
        </ul>
    )
}

export default ProjectList;