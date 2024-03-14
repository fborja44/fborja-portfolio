import Button from '../components/Button/Button';
import PageLayout from '../components/PageLayout/PageLayout';
import { VscSend } from 'react-icons/vsc';
import Token from '../components/Token/Token';
import { MdOutlineWorkOutline } from 'react-icons/md';
import Me from '../assets/img/me.jpg';
import { motion } from 'framer-motion';

const Homepage = () => {
	return (
		<PageLayout>
			<motion.section
				initial={{ opacity: 0, y: '5px' }}
				animate={{ opacity: 1, y: '0px' }}
				transition={{ duration: 0.75, delay: 0.25 }}
				className='flex flex-row justify-between'
			>
				<div>
					<div className='flex flex-row items-center gap-7'>
						<h1 className='text-4xl font-bold'>I'm Francis Borja!</h1>
						<Token icon={<MdOutlineWorkOutline className='w-4 h-4' />}>
							Available For Work
						</Token>
					</div>
					<div className='text-slate-800 text-lg font-normal mt-5 mb-6 w-[480px]'>
						<p>
							I am a Software Engineer from New Jersey who gradudated with a B.S
							Computer Science from Stevens Institute of Technology.
						</p>
					</div>
					<Button icon={<VscSend className='w-5 h-5' />}>
						Let's Get In Touch
					</Button>
				</div>
				<div className='mr-6 box-content bg-gradient-to-br from-cyan-500 from-10% via-indigo-500 to-pink-500 to-90% rounded-full p-1'>
					<img src={Me} className='h-56 w-56 rounded-full profile-shadow' />
				</div>
			</motion.section>
		</PageLayout>
	);
};

export default Homepage;
