import PageLayout from '../components/PageLayout/PageLayout';
import ProjectCardList from '../components/Card/ProjectCardList';

const Homepage = () => {
	return (
		<PageLayout title={'Homepage'}>
			<div className='max-w-[64em]'>
				<h1 className='py-6 text-5xl font-semibold leading-tight'>
					👋 Hey there, I’m Francis Borja!
				</h1>
				<p className='text-lg'>
					I’m an aspiring Web Developer who loves to build practical web apps. Take
					some time to take a peek at some of my work below!
				</p>
			</div>
			<ProjectCardList />
		</PageLayout>
	);
};

export default Homepage;
