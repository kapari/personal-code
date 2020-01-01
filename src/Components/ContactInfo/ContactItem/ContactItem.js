import React from 'react';
import styles from './ContactItem.module.css';

const ContactItem = (props) => {
    return (
        <li className={styles.item}>
            <a
                className={styles.link}
                href={props.url || "#"}
                target="_blank"
                rel="noopener noreferrer"
                title={props.title}
            >
                {props.iconElt}
            </a>
        </li>
    );
}

export default ContactItem;