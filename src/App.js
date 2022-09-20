import { GlobalStyles } from './components/Global/GlobalStyles';
import Navbar from './components/Sections/Navigation';
import { StyledMain } from './components/Global/styles';
import Hero from './components/Sections/Hero';
import About from './components/Sections/About';
import Projects from './components/Sections/Projects';
import Contact from './components/Sections/Contact';
import Footer from './components/Sections/Footer';

function App() {
	return (
		<>
			<GlobalStyles />
			<Navbar />
			<StyledMain>
				<Hero />
				<About />
				<Projects />
				<Contact />
			</StyledMain>
			<Footer />
		</>
	);
}

export default App;
