import ScrollToTop from '../Scroll/ScrollToTop';

interface PageLayoutProps {
	title?: string;
	children: React.ReactNode;
}

const PageLayout = ({ children, title }: PageLayoutProps) => {
	return (
		<>
			<ScrollToTop />
			<main className='py-8 fill'>
				{title && (
					<div className='uppercase text-base font-bold tracking-wider'>
						{title}
					</div>
				)}
				{children}
			</main>
		</>
	);
};

export default PageLayout;
