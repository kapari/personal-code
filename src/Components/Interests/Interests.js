import React from 'react';
import styled from '@emotion/styled';

const Link = styled.a`
    transition: .3s background-color ease-in-out;
    display: block;
    margin: .75rem auto;
    width: 100%;
    max-width: 250px;
    border: 1px solid currentColor;
    border-radius: 3px;
    background-color: transparent;
    padding: .5em;
    text-align: center;
    color: var(--text-over-dark);
    text-decoration: none;
    &:hover, &:active, &:focus {
        background-color: var(--contrast-color);
    }
`;

const Interests = () => {
    return (
        <>
            <Link
                href="https://dance.arielkaplan.com"
                title="Dance Site"
                target="_blank"
                rel="noopener noreferrer"
            >
                Partner Dance
            </Link>
            <Link
                href="https://design.arielkaplan.com"
                title="Art & Design Site"
                target="_blank"
                rel="noopener noreferrer"
            >
                Art and Design
            </Link>
        </>
    )
}

export default Interests;