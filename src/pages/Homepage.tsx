import Button from '../components/Button/Button';
import PageLayout from '../components/PageLayout/PageLayout';
import { VscSend } from 'react-icons/vsc';
import Token from '../components/Token/Token';
import { MdOutlineWorkOutline } from 'react-icons/md';
import { RiGraduationCapFill, RiAppsFill } from 'react-icons/ri';
import { MdDesignServices } from 'react-icons/md';
import Me from '../assets/img/me.jpg';
import Google from '../assets/img/google.png';
import Stevens from '../assets/img/stevens.png';
import { motion } from 'framer-motion';
import Section from '../components/Section/Section';
import DisplayCard from '../components/Card/DisplayCard';
import ProjectCard from '../components/Card/ProjectCard';
import SmashVideo from '../assets/svg/smash-video.svg';
import SmashGrid from '../assets/svg/smash-grid.svg';
import Notify from '../assets/svg/notify.svg';
import { FaRecordVinyl } from 'react-icons/fa';
import { HiCode } from 'react-icons/hi';
import { HiOutlineGlobeAmericas } from 'react-icons/hi2';

const Homepage = () => {
	return (
		<PageLayout>
			<motion.section
				initial={{ opacity: 0, y: '5px' }}
				animate={{ opacity: 1, y: '0px' }}
				transition={{ duration: 0.75, delay: 0.25 }}
				className='flex flex-row justify-between mb-14'
			>
				<div>
					<div className='flex flex-row items-center gap-7'>
						<h1 className='text-4xl font-bold'>I'm Francis Borja!</h1>
						<Token icon={<MdOutlineWorkOutline className='w-4 h-4' />}>
							Available For Work
						</Token>
					</div>
					<div className='text-slate-800 text-lg font-normal mt-5 mb-6 w-[480px]'>
						<p>
							I am a Software Engineer from New Jersey who gradudated with a B.S
							Computer Science from Stevens Institute of Technology.
						</p>
					</div>
					<Button icon={<VscSend className='w-5 h-5' />}>
						Let's Get In Touch
					</Button>
				</div>
				<div className='mr-6 box-content bg-gradient-to-br from-cyan-500 from-10% via-indigo-500 to-pink-500 to-90% rounded-full p-1 -z-10'>
					<img
						src={Me}
						className='h-56 w-56 rounded-full profile-shadow -z-10'
					/>
				</div>
			</motion.section>
			<motion.div
				initial={{ opacity: 0, y: '5px' }}
				animate={{ opacity: 1, y: '0px' }}
				transition={{ duration: 0.75, delay: 0.75 }}
				className='flex flex-col gap-1'
			>
				<Section
					icon={<RiGraduationCapFill className='w-7 h-7' />}
					title='Education And Certifications'
				>
					<div className='flex flex-row justify-around'>
						<DisplayCard
							src={Stevens}
							title={'Stevens Insitute Of Technology'}
							subtitle={'B.S. Computer Science'}
						/>
						<DisplayCard
							src={Google}
							title={'Google Professional Certificate'}
							subtitle={'Google UX Design'}
							imgClass='w-36 h-auto relative top-1'
						/>
					</div>
				</Section>
				<Section
					icon={<RiAppsFill className='w-7 h-7' />}
					title='Software Projects'
				>
					<div className='flex flex-col gap-6'>
						<ProjectCard
							icon={<img src={SmashVideo} className='w-7 h-7' />}
							title={'Tournament Management Tool'}
							categories={[
								'React',
								'Electron',
								'TypeScript',
								'Node.js',
								'Redux',
								'Websockets',
								'Fluent UI',
							]}
							href={''}
						/>
						<ProjectCard
							icon={<img src={SmashGrid} className='w-[22px] h-[22px]' />}
							title={'Immaculate Melee'}
							categories={[
								'React',
								'TypeScript',
								'MongoDB',
								'Node.js',
								'Express',
								'Firebase',
							]}
							gradient='from-yellow-500 to-red-500'
							href={''}
						/>
						<ProjectCard
							icon={<img src={Notify} className='w-[22px] h-[22px]' />}
							title={'Notify'}
							categories={[
								'React',
								'Electron',
								'TypeScript',
								'Node.js',
								'Redux',
								'Fluent UI',
							]}
							gradient='from-blue-300 to-purple-700'
							href={''}
						/>
					</div>
				</Section>
				<Section
					icon={<MdDesignServices className='w-7 h-7' />}
					title='Design Projects + Case Studies'
				>
					<div className='flex flex-col gap-6'>
						<ProjectCard
							icon={<FaRecordVinyl className='w-7 h-7 text-white' />}
							title={'ALBUMNOW.'}
							categories={['Mobile', 'E-Commerce', 'Branding']}
							href={''}
							gradient='from-albumNowSecondary to-albumNowPrimary'
						/>
						<ProjectCard
							icon={<HiOutlineGlobeAmericas className='w-9 h-9 text-white' />}
							title={'NextGen'}
							categories={['Social', 'Mobile', 'Branding']}
							gradient='from-indigo-500 to-purple-800'
							href={''}
						/>
						<ProjectCard
							icon={<HiCode className='w-8 h-8 text-white' />}
							title={'Codify'}
							categories={['Web', 'Mobile', 'Responsive', 'Branding']}
							gradient='from-yellow-200 to-lime-400'
							href={''}
						/>
					</div>
				</Section>
			</motion.div>
		</PageLayout>
	);
};

export default Homepage;
