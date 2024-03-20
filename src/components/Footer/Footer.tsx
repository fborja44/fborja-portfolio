import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import FooterButton from './FooterButton';

const Footer = () => {
	return (
		<footer className='h-[60px] px-6 sm:px-12 flex flex-row justify-between items-center text-slate-800'>
			<div className='text-xs tracking-wide flex flex-row items-center'>
				© Francis Borja 2023-2024 <span className='hidden sm:block sm:ml-1'>| Software Engineer</span>
			</div>
			<div className='flex flex-row items-cente text-slate-600 gap-[1.5em]'>
				<FooterButton href='https://www.linkedin.com/in/francis-borja-ab05aa188/' external>
					<FiLinkedin className='w-5 h-5' />
				</FooterButton>
				<FooterButton href='https://github.com/fborja44' external>
					<FiGithub className='w-5 h-5' />
				</FooterButton>
				<FooterButton href='mailto:fborja4400@gmail.com'>
					<FiMail className='w-5 h-5' />
				</FooterButton>
			</div>
		</footer>
	);
};

export default Footer;
