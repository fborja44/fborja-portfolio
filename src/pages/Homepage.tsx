import PageLayout from '../components/PageLayout/PageLayout';
import ProjectCardList from '../components/Card/ProjectCardList';

const Homepage = () => {
	return (
		<PageLayout title={'Homepage'}>
			<div className='max-w-[64em]'>
				<h1 className='py-6 uppercase text-5xl font-bold leading-tight'>
					{/* <span className='bg-neon'> */}
					Crafting Digital Experiences
					{/* </span>*/} Through Thoughtful Web Applications
				</h1>
				<p className='text-lg'>
					Hey there, I’m Francis Borja! I’m an aspiring Front-End Engineer who
					loves to build web apps. Take some to to take a peek at
					some of my work below!
				</p>
			</div>
			<ProjectCardList />
		</PageLayout>
	);
};

export default Homepage;
