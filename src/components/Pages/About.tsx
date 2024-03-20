import { motion } from 'framer-motion';
import Avatar from '../Avatar/Avatar';
import PageLayout from '../PageLayout/PageLayout';

const About = () => {
	return (
		<PageLayout title='About Me'>
			<motion.div
				initial={{ opacity: 0, y: '5px' }}
				animate={{ opacity: 1, y: '0px' }}
				transition={{ duration: 0.75, delay: 0.75 }}
				className='py-4 lg:py-8 flex flex-col lg:flex-row gap-8 items-center lg:flex-end lg:justify-center'
			>
				<Avatar />
				<div className='max-w-xl flex flex-col gap-4 text-slate-800'>
					<p className='font-medium'>Hey there!</p>
					<p>
						I'm Francis Borja. I recently graduated from Stevens Institute of
						Technology in New Jersey with a B.S. in Computer Science. I am
						extremely passionate about creating practical web apps, and have
						been most recently exploring a blossoming interest in design!
					</p>
					<p>Thank you for taking the time to check out my portfolio!</p>
				</div>
			</motion.div>
		</PageLayout>
	);
};

export default About;
