import React from 'react';
import PropTypes from 'prop-types';
import styles from './ContactItem.module.css';

const ContactItem = ({url, title, iconElt}) => {
    return (
        <li className={styles.item}>
            <a
                className={styles.link}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                title={title}
            >
                {iconElt}
            </a>
        </li>
    );
}

ContactItem.propTypes = {
    url: PropTypes.string,
    title: PropTypes.string,
    iconElt: PropTypes.node.isRequired
}

ContactItem.defaultProps = {
    url: "/",
    title: "Home"
}

export default ContactItem;