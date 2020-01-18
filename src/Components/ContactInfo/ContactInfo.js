import React from 'react';
import ContactItem from './ContactItem/ContactItem';
import SvgIcon from '@material-ui/core/SvgIcon';
import Mail from '@material-ui/icons/Mail';
import LinkedIn from '@material-ui/icons/LinkedIn';
import Twitter from '@material-ui/icons/Twitter';
import GitHub from '@material-ui/icons/GitHub';
import styled from '@emotion/styled';

const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style-type: none;
`;


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
        <List>
            {contactLinks.map((item, index) => (
                <ContactItem 
                    key={index} 
                    url={item.url} 
                    title={item.title}
                    iconElt={<SvgIcon component={item.icon} titleAccess={item.title} />}
                />
            ))}
        </List>   
    )
}

export default ContactInfo;