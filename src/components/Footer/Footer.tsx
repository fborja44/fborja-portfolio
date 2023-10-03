import { FiGithub, FiInstagram, FiLinkedin, FiMail } from 'react-icons/fi';

const Footer = () => {
	return (
		<footer className='h-[100px] flex flex-row justify-between items-center'>
			<div className='uppercase text-xs tracking-wide'>
				© Francis Borja 2023 | Software Engineer
			</div>
			<div className='flex flex-row items-center text-black gap-[1.5em]'>
				<FiLinkedin className='w-5 h-5' />
				<FiGithub className='w-5 h-5' />
				<FiInstagram className='w-5 h-5' />
				<FiMail className='w-5 h-5' />
			</div>
		</footer>
	);
};

export default Footer;
