import PageLayout from '../components/PageLayout/PageLayout';
import Me from '../assets/img/me.jpg';

const About = () => {
	return (
		<PageLayout title='About'>
			<div className='py-8 flex flex-row gap-8 flex-end'>
				<div className='p-2 border border-solid border-black'>
					<img src={Me} className='h-80 w-80' />
				</div>
				<div className='max-w-2xl flex flex-col gap-4'>
					<p>Hey there!</p>
					<p>
						I'm Francis Borja. I recently graduated from Stevens Institute of
						Technology in New Jersey with a B.S. in Computer Science. I am
						extremely passionate about creating practical web apps, and have
						been most recently exploring a blossoming interest in design!
					</p>
					<p>Thank you for taking the time to check out my portfolio!</p>
				</div>
			</div>
		</PageLayout>
	);
};

export default About;
