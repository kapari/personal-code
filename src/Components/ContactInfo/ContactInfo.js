import React from 'react';
import ContactItem from './ContactItem/ContactItem';
import SvgIcon from '@material-ui/core/SvgIcon';
import AlternateEmail from '@material-ui/icons/AlternateEmail';
import LinkedIn from '@material-ui/icons/LinkedIn';
import Twitter from '@material-ui/icons/Twitter';
import GitHub from '@material-ui/icons/GitHub';
import styles from './ContactInfo.module.css';

const contactLinks = [
    {
        icon: AlternateEmail,
        title: "Email Me",
        url: "#"
    },
    {
        icon: Twitter,
        title: "Twitter Account (opens in a new tab)",
        url: "#"
    },
    {
        icon: LinkedIn,
        title: "LinkedIn Profile (opens in a new tab)",
        url: "#"
    },
    {
        icon: GitHub,
        title: "GitHub Profile (opens in a new tab",
        url: "#"
    }
];

const ContactInfo = () => {
    return (
        <ul className={styles.list}>
            {contactLinks.map((item, index) => (
                <ContactItem 
                    key={index} 
                    url={item.url} 
                    title={item.title}
                    iconElt={<SvgIcon component={item.icon} titleAccess={item.title} />}
                />
            ))}
        </ul>   
    )
}

export default ContactInfo;