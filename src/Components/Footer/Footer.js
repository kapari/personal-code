import React from 'react';
import styled from '@emotion/styled';
import ContactInfo from './../ContactInfo/ContactInfo';

const Element = styled.footer`
  background-color: var(--bg-color);
  padding: 2em;
  text-align: center;
`;

const Footer = () => {
    return (
        <Element>
            <ContactInfo />
            <p>&copy; 2019 &ndash; {new Date().getFullYear()} Ariel Kaplan</p>
        </Element>
    );
}

export default Footer;