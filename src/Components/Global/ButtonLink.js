import PropTypes from 'prop-types';
import styled from '@emotion/styled';

const ButtonLink = styled.a`
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
    color: ${props => props.theme === "primary" ? "red" : "var(--text-over-dark)"};
    text-decoration: none;
    &:hover, &:active, &:focus {
        background-color: var(--contrast-color);
    }
`;

ButtonLink.propTypes = {
    theme: PropTypes.oneOf["primary", "secondary"]
}

ButtonLink.defaultProps = {
    theme: "secondary"
}

export default ButtonLink;