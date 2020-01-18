import React from 'react';
import ContactItem from './ContactItem/ContactItem';
import SvgIcon from '@material-ui/core/SvgIcon';
import Mail from '@material-ui/icons/Mail';
import LinkedIn from '@material-ui/icons/LinkedIn';
import Twitter from '@material-ui/icons/Twitter';
import GitHub from '@material-ui/icons/GitHub';
import styles from './ContactInfo.module.css';

const contactLinks = [
    {
        icon: Mail,
        title: "Email Me",
        url: "mailto:ariel@arielkaplan.com"
    },
    {
        icon: Twitter,
        title: "Twitter Account (opens in a new tab)",
        url: "https://twitter.com/arielhkaplan"
    },
    {
        icon: LinkedIn,
        title: "LinkedIn Profile (opens in a new tab)",
        url: "https://www.linkedin.com/in/arielhkaplan/"
    },
    {
        icon: GitHub,
        title: "GitHub Profile (opens in a new tab",
        url: "https://github.com/kapari"
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