import { useState, useEffect, Suspense } from 'react';
import { GlobalAOS } from './components/global/aos';
import { GlobalStyles } from './components/global/GlobalStyles';
import { ThemeProvider } from 'styled-components';
import { lightMode, darkMode } from './components/global/themes';
import { StyledMain } from './components/global/styles';
import { Skeleton } from './components/suspense';
import Navbar from './components/sections/navbar';
import Hero from './components/sections/hero';
import About from './components/sections/about';
import Projects from './components/sections/projects';
import Contact from './components/sections/contact';
import Footer from './components/sections/footer';
import Aos from 'aos';

function App() {
	const [theme, setTheme] = useState();

	useEffect(() => {
		window.matchMedia('(prefers-color-scheme: dark)').matches ? setTheme('dark') : setTheme('light');
		window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (event) => {
			event.matches ? setTheme('dark') : setTheme('light');
		});
		Aos.refresh();
	}, [theme]);

	return (
		<ThemeProvider theme={theme === 'light' ? lightMode : darkMode}>
			<Suspense fallback={<Skeleton />}>
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
			</Suspense>
		</ThemeProvider>
	);
}

export default App;
