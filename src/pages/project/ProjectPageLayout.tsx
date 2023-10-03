import PageLayout from '../../components/PageLayout/PageLayout';

interface ProjectPageLayout {
	type: 'Case Study' | 'Web App' | 'Coding';
	title: string;
	children: React.ReactNode;
}

const ProjectPageLayout = ({ children, type, title }: ProjectPageLayout) => {
	return (
		<PageLayout title={type}>
			<h1 className='my-6 uppercase text-5xl font-bold leading-tight'>
				{title}
			</h1>
			<div>{children}</div>
		</PageLayout>
	);
};

export default ProjectPageLayout;
