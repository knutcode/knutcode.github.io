import { GlobalStyles, GlobalAOS } from './components/global/GlobalStyles';
import { StyledMain } from './components/global/styles';
import Navbar from './components/sections/navigation';
import Hero from './components/sections/hero';
import About from './components/sections/about';
import Projects from './components/sections/projects';
import Contact from './components/sections/contact';
import Footer from './components/sections/footer';

function App() {
	return (
		<>
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
		</>
	);
}

export default App;
