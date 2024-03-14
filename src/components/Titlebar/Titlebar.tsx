import { Link } from 'react-router-dom';
import TitleLink from './TitleLink';

const TitleBar = () => {
	return (
		<header className='h-[100px] w-full flex flex-row justify-between items-center select-none border-b border-solid border-black'>
			<Link
				to='/fborja-portfolio'
				className='font-bold text-lg tracking-widest leading-3'
			>
				Francis Borja{' '}
			</Link>
			<div className='flex flex-row items-center'>
				<TitleLink href='/projects'>Projects</TitleLink>
				<TitleLink href='/about'>About Me</TitleLink>
				<TitleLink href='/contact' filled>
					Contact
				</TitleLink>
			</div>
		</header>
	);
};

export default TitleBar;
