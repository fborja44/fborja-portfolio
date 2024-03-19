import { motion } from 'framer-motion';
import PageLayout from '../PageLayout/PageLayout';

const NotFound = () => {
	return (
		<PageLayout title='Invalid Page'>
			<motion.div
				initial={{ opacity: 0, y: '5px' }}
				animate={{ opacity: 1, y: '0px' }}
				transition={{ duration: 0.75, delay: 0.75 }}
				className='flex flex-col gap-4 pt-4 text-slate-800'
			>
				Page Not Found
			</motion.div>
		</PageLayout>
	);
};

export default NotFound;
