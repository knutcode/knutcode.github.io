import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

import { createGlobalStyle } from 'styled-components';

export const GlobalAOS = () => {
	useEffect(() => {
		Aos.init({ duration: 1000 });
	}, []);
};

export const darkMode = {
	background: '#141415',
	neutral: '#202020e4',

	color: '#f0f0f0',
	textshadow: '1px 1px 1px black',
	whitecolor: '#f0f0f0',

	navlogo: '#79c1ff',
	navlink: '#79c1ff',
	navborderbottom: 'solid 2px #f0f0f0',

	weight: '500',
	herounderline: 'underline 3px #79c1ff',
	borderbottom: 'solid 3px #79c1ff',

	projectlink: '#79c1ff',
	projectunderline: 'underline #f0f0f0 2px',
	projectboxshadow: '',

	contactcolor: '#79c1ff',
	contactunderline: 'underline #f0f0f0 2px',

	footercolor: '#79c1ff',
	footerunderline: 'underline #f0f0f0 1px',
};

export const lightMode = {
	background: 'lightgrey',
	neutral: '#f0f0f0',

	color: '#333',
	textshadow: '1px 1px 1px grey',
	whitecolor: '#lightgrey',

	navlogo: '#79c1ff',
	navlink: '#79c1ff',
	navborderbottom: 'solid 2px #f0f0f0',

	weight: '',
	herounderline: 'underline 3px #A0C6F2',
	borderbottom: 'solid 4px #79c1ff',

	projectlink: '#79c1ff',
	projectunderline: 'underline #f0f0f0 2px',
	projectboxshadow: '2px 2px 5px grey',

	contactcolor: '#333333',
	contactunderline: '',

	footercolor: '#79c1ff',
	footerunderline: 'underline #f0f0f0 1px',
};

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
        color: #f0f0f0;
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
