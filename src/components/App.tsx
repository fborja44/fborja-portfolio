import '../css/App.css';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Homepage from './Pages/Homepage';
import Projects from './Pages/Projects';
import AlbumNowPage from './Project/AlbumNowPage';
import CodifyPage from './Project/CodifyPage';
import NextGenPage from './Project/NextGenPage';
import NotifyPage from './Project/NotifyPage';
import Footer from './Footer/Footer';
import TitleBar from './Titlebar/Titlebar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TMTPage from './Project/TMTPage';
import ImmaculateMeleePage from './Project/ImmaculateMeleePage';
import NotFound from './Pages/NotFound';

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
					<Route path='/project/tmt' element={<TMTPage />} />
					<Route
						path='/project/immaculate-melee'
						element={<ImmaculateMeleePage />}
					/>
					<Route path='/project/notify' element={<NotifyPage />} />
					<Route path='/design/albumnow' element={<AlbumNowPage />} />
					<Route path='/design/nextgen' element={<NextGenPage />} />
					<Route path='/design/codify' element={<CodifyPage />} />
					<Route path='*' element={<NotFound />} />
				</Routes>
				<Footer />
			</main>
		</BrowserRouter>
	);
}

export default App;
