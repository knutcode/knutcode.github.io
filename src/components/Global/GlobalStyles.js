import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

    body {   
        background-color: ${(props) => props.theme.background};
        color: ${(props) => props.theme.color};
	    text-shadow: ${(props) => props.theme.textshadow};
    }

    .section-title {
        font-size: 3.5rem;
        color: ${(props) => props.theme.color};
        border-bottom: ${(props) => props.theme.borderbottom};
        margin-bottom: 10rem;
        text-align: center;
    }

    a:link,
    a:active,
    a:visited {
        color: ${(props) => props.theme.link};
    }

    a:hover {
        color: ${(props) => props.theme.color};
    }

    .highlight {
        font-weight: ${(props) => props.theme.weight};
        text-decoration: ${(props) => props.theme.herounderline};
    }

    @media (max-width: 600px) {
        .section-title {
            font-size: 3rem;
            margin-bottom: 7rem;
        }
        .highlight {
            font-weight: normal;
            text-decoration: none;
        }
    }
`;
