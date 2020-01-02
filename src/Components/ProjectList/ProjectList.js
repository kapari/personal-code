import React from 'react';
import styles from './ProjectList.module.css';

const ProjectList = () => {
    return (
        <ul className={styles.list}>
            <li className={styles.item}>
                <article>
                    <h3>Current Personal Site</h3>
                    <p>2019</p>
                    <p>Stuff</p>
                </article>
            </li>
            <li className={styles.item}>
                <article>
                    <h3>DanceMatch</h3>
                    <p>2015</p>
                    <p>Stuff</p>
                </article>
            </li>
            <li className={styles.item}>
                <article>
                    <h3>Twitterbot: On This Day</h3>
                    <p>2015</p>
                    <p>Stuff</p>
                </article>
            </li>
            <li className={styles.item}>
                <article>
                    <h3>Pattern Agents</h3>
                    <p>2013</p>
                    <p>Stuff</p>
                </article>
            </li>
        </ul>
    )
}

export default ProjectList;