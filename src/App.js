import { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles, GlobalAOS, darkMode, lightMode } from './components/global/GlobalStyles';
import { StyledMain } from './components/global/styles';
import Navbar from './components/sections/navigation';
import Hero from './components/sections/hero';
import About from './components/sections/about';
import Projects from './components/sections/projects';
import Contact from './components/sections/contact';
import Footer from './components/sections/footer';

function App() {
	const [theme, setTheme] = useState();

	useEffect(() => {
		window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? setTheme('dark') : setTheme('light');

		window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (event) => {
			event.matches ? setTheme('dark') : setTheme('light');
		});
	}, []);

	return (
		<ThemeProvider theme={theme === 'dark' ? darkMode : lightMode}>
			<GlobalStyles />
			<GlobalAOS />
			<Navbar />
			<StyledMain>
				<Hero />
				<About />
				<Projects />
				<Contact />
			</StyledMain>
			<Footer />
		</ThemeProvider>
	);
}

export default App;
