import React from 'react';
import styles from './Interests.module.css';

const Interests = () => {
    return (
        <>
            <h2>Other Interests</h2>
            <a
                className={styles.link}
                href="https://dance.arielkaplan.com"
                title="Dance Site"
                target="_blank"
                rel="noopener noreferrer"
            >
                Partner Dance
            </a>
            <a
                className={styles.link}
                href="https://design.arielkaplan.com"
                title="Art & Design Site"
                target="_blank"
                rel="noopener noreferrer"
            >
                Art and Design
            </a>
        </>
    )
}

export default Interests;