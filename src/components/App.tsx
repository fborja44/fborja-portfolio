import '../css/App.css';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Homepage from './Pages/Homepage';
import Projects from './Pages/Projects';
import AlbumNowPage from './Project/AlbumNowPage';
import CodifyPage from './Project/CodifyPage';
import NextGenPage from './Project/NextGenPage';
import NoteworksPage from './Project/NoteworksPage';
import Footer from './Footer/Footer';
import TitleBar from './Titlebar/Titlebar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
	return (
		<BrowserRouter>
			<TitleBar />
			<main id='main'>
				<Routes>
					<Route path='/fborja-portfolio' element={<Homepage />} />
					<Route path='/projects' element={<Projects />} />
					<Route path='/about' element={<About />} />
					<Route path='/contact' element={<Contact />} />
					<Route path='/albumnow' element={<AlbumNowPage />} />
					<Route path='/nextgen' element={<NextGenPage />} />
					<Route path='/codify' element={<CodifyPage />} />
					<Route path='/noteworks' element={<NoteworksPage />} />
				</Routes>
				<Footer />
			</main>
		</BrowserRouter>
	);
}

export default App;
