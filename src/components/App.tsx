import '../css/App.css';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Homepage from '../pages/Homepage';
import Projects from '../pages/Projects';
import AlbumNowPage from '../pages/project/AlbumNowPage';
import CodifyPage from '../pages/project/CodifyPage';
import NextGenPage from '../pages/project/NextGenPage';
import NoteworksPage from '../pages/project/NoteworksPage';
import Footer from './Footer/Footer';
import TitleBar from './Titlebar/Titlebar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
	return (
		<BrowserRouter>
			<div id='root'>
				<TitleBar />
				<Routes>
					<Route path='/' element={<Homepage />} />
					<Route path='/projects' element={<Projects />} />
					<Route path='/about' element={<About />} />
					<Route path='/contact' element={<Contact />} />
					<Route path='/albumnow' element={<AlbumNowPage />} />
					<Route path='/nextgen' element={<NextGenPage />} />
					<Route path='/codify' element={<CodifyPage />} />
					<Route path='/noteworks' element={<NoteworksPage />} />
				</Routes>
				<Footer />
			</div>
		</BrowserRouter>
	);
}

export default App;
