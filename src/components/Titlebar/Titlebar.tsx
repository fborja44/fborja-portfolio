import { Link } from 'react-router-dom';
import TitleLink from './TitleLink';

const TitleBar = () => {
	return (
		<header className='h-[100px] w-full flex flex-row justify-between items-center select-none border-b border-solid border-black'>
			<Link
				to='/'
				className='uppercase font-bold text-lg tracking-widerest leading-3'
			>
				Francis Borja{' '}
				<span className='text-4xl relative top-[12px] leading-3'>°</span>
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
