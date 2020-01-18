import React from 'react';
import styled from '@emotion/styled';

const Link = styled.a`
    display: block;
    margin-bottom: .75rem;
    width: 400px;
    max-width: 80%;
    border: 1px solid currentColor;
    border-radius: 3px;
    padding: .5em;
    text-align: center;
    color: var(--text-over-dark);
    text-decoration: none;
`;

const Interests = () => {
    return (
        <>
            <h2>Other Interests</h2>
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