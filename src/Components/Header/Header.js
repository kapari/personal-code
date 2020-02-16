import React from 'react';
import styled from '@emotion/styled';
import logo from './../../logo.svg';

const Element = styled.header`
  display: flex;
  align-items: center;
  padding: 6vmin 20px;
  font-size: calc(6px + 2vmin);
`;

const Logo = styled.img`
  height: 10vmin;
  margin-right: 2vmin;
`;

const PageHeading = styled.h1`
  margin: 0;
  font-size: calc(10px + 3vmin);
  line-height: 1;
`;

const PageSubheading = styled.p`
  margin: .5em 0 0;
  line-height: 1;
`;

const Header = () => {
    return (
        <Element>
            <Logo src={logo} alt="logo" />
            <div>
                <PageHeading>Ariel Kaplan</PageHeading>
                <PageSubheading>Front-End Dev / UX</PageSubheading>
            </div>
        </Element>
    )
}

export default Header;