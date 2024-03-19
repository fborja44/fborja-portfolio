import { motion } from 'framer-motion';
import PageLayout from '../../PageLayout/PageLayout';

interface ProjectPageLayout {
	type: 'Case Study' | 'Web App' | 'Coding';
	title: string;
	children: React.ReactNode;
}

const ProjectPageLayout = ({ children, type, title }: ProjectPageLayout) => {
	return (
		<PageLayout title={type}>
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 0.75, delay: 0.75 }}
			>
				<h1 className='my-6 uppercase text-4xl font-bold leading-tight'>
					{title}
				</h1>
				<div>{children}</div>
			</motion.div>
		</PageLayout>
	);
};

export default ProjectPageLayout;
