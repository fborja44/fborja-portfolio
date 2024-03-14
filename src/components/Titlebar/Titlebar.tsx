import { Link } from 'react-router-dom';
import TitleLink from './TitleLink';
import { FiCpu } from 'react-icons/fi';

const TitleBar = () => {
	return (
		// TODO: Border only on scroll
		<header className='h-[90px] w-full flex flex-row justify-between items-center select-none'>
			<Link
				to='/fborja-portfolio'
				className='uppercase font-bold text-lg tracking-wide leading-3 flex flex-row items-center gap-2'
			>
				<FiCpu className='text-indigo-800'/>
				<span className='flex flex-row items-center'>
					<span>FrancisBorja</span>
					<span className='text-slate-800 text-xs font-semibold tracking-wide relative top-[2px]'>.dev</span>
				</span>
			</Link>
			<div className='flex flex-row items-center'>
				<TitleLink href='/projects'>Projects</TitleLink>
				<TitleLink href='/about'>About Me</TitleLink>
				<TitleLink href='/contact'>Contact</TitleLink>
			</div>
		</header>
	);
};

export default TitleBar;
