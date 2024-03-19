import { Link } from 'react-router-dom';
import TitleLink from './TitleLink';
import { FiCpu } from 'react-icons/fi';
import { useEffect, useState } from 'react';

const TitleBar = () => {
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			const { scrollY } = window;
			if (scrollY > 0) {
				setScrolled(true);
			} else {
				setScrolled(false);
			}
		};

		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		// TODO: Border only on scroll
		<header
			className={`w-full select-none bg-white/90 transition-colors backdrop-blur z-10 fixed ${
				scrolled ? 'border-b border-slate-200' : ''
			}`}
		>
			<div className='h-[90px] px-12  max-page-width flex flex-row justify-between items-center '>
				<Link
					to='/fborja-portfolio'
					className='uppercase font-bold text-lg tracking-wide leading-3 flex flex-row items-center gap-2'
				>
					<FiCpu className='text-indigo-800' />
					<span className='flex flex-row items-center'>
						<span>FrancisBorja</span>
						<span className='text-slate-800 text-xs font-semibold tracking-wide relative top-[2px]'>
							.dev
						</span>
					</span>
				</Link>
				<div className='flex flex-row items-center'>
					<TitleLink href='/projects'>Projects</TitleLink>
					<TitleLink href='/about'>About Me</TitleLink>
					<TitleLink href='/contact'>Contact</TitleLink>
				</div>
			</div>
		</header>
	);
};

export default TitleBar;
