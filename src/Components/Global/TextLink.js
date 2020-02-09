import styled from '@emotion/styled';

const TextLink = styled.a`
    transition: .3s opacity ease-in-out;
    color: var(--text-color);
    text-decoration: none;
    opacity: .8;
    &:hover, &:active, &:focus {
        opacity: 1;
    }
`;

export default TextLink;