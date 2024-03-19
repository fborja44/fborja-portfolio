import { motion } from 'framer-motion';
import PageLayout from '../components/PageLayout/PageLayout';
import StyledLink from '../components/StyledLink/StyledLink';

const Contact = () => {
	return (
		<PageLayout title='Contact'>
			<motion.div
				initial={{ opacity: 0, y: '5px' }}
				animate={{ opacity: 1, y: '0px' }}
				transition={{ duration: 0.75, delay: 0.75 }}
				className='flex flex-col gap-4 pt-4 text-slate-800'
			>
				<div>If you would to reach out, let's connect on LinkedIn! </div>
				<div>
					<StyledLink href='https://www.linkedin.com/in/francis-borja-ab05aa188/' external>
						You can view my profile here.
					</StyledLink>
				</div>
			</motion.div>
		</PageLayout>
	);
};

export default Contact;
