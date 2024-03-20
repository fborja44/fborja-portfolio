import { Link } from 'react-router-dom';
import TitleLink from './TitleLink';
import { FiCpu } from 'react-icons/fi';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

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
		<motion.header
			className={`w-full select-none transition-colors z-10 fixed ${
				scrolled ? 'border-b border-slate-200' : ''
			}`}
		>
			<div className='h-[90px] px-6 sm:px-12 max-page-width flex flex-row justify-between items-center bg-white/80 backdrop-blur'>
				<Link
					to='/fborja-portfolio'
					className='uppercase font-bold text-base sm:text-lg tracking-wide leading-3 flex flex-row items-center gap-2 hover:text-indigo-700 transition-colors'
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
					<TitleLink href='/about'>About <span className='hidden sm:block sm:ml-1'>Me</span></TitleLink>
					<TitleLink href='/contact' className='hidden sm:block'>Contact</TitleLink>
				</div>
			</div>
		</motion.header>
	);
};

export default TitleBar;
