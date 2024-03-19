import { motion } from 'framer-motion';
import ScrollToTop from '../Scroll/ScrollToTop';

interface PageLayoutProps {
	title?: string;
	children: React.ReactNode;
}

const PageLayout = ({ children, title }: PageLayoutProps) => {
	return (
		<>
			<ScrollToTop />
			<main className='py-8 px-12 pt-[100px] fill'>
				{title && (
					<motion.div
						initial={{ opacity: 0, y: '5px' }}
						animate={{ opacity: 1, y: '0px' }}
						transition={{ duration: 0.75, delay: 0.25 }}
						className='uppercase text-2xl font-bold mb-6'
					>
						{title}
					</motion.div>
				)}
				{children}
			</main>
		</>
	);
};

export default PageLayout;
