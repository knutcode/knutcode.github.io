import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

import { createGlobalStyle } from 'styled-components';

export const GlobalAOS = () => {
	useEffect(() => {
		Aos.init({ duration: 1000 });
	}, []);
};

export const GlobalStyles = createGlobalStyle`

    body {   
        color: #f0f0f0;
        text-shadow: 1px 1px 1px black;
        background-color: #141415;
    }

    .section-title {
        font-size: 3.5rem;
        color: #f0f0f0;
        border-bottom: solid 3px #79c1ff;
        margin-bottom: 10rem;
        text-align: center;
    }

    a:link,
    a:active,
    a:visited {
        color: #79c1ff;
    }

    a:hover {
        color: #f0f0f0;
    }

    .highlight {
        font-weight: 500;
        text-decoration: underline 3px #79c1ff;
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
