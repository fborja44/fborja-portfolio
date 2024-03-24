import ProjectCard from '../Card/ProjectCard';
import { RiAppsFill } from 'react-icons/ri';
import { MdDesignServices } from 'react-icons/md';
import { FaGithub, FaRecordVinyl } from 'react-icons/fa';
import { HiCode } from 'react-icons/hi';
import { HiOutlineGlobeAmericas } from 'react-icons/hi2';
import { motion } from 'framer-motion';
import SmashVideo from '../../assets/svg/smash-video.svg';
import SmashGrid from '../../assets/svg/smash-grid.svg';
import Notify from '../../assets/svg/notify.svg';
import Section from '../Section/Section';
import { TiWeatherCloudy } from 'react-icons/ti';

interface ProjectListProps {
	delay: number;
}

const ProjectList = ({ delay }: ProjectListProps) => {
	return (
		<motion.div
			initial={{ opacity: 0, y: '5px' }}
			animate={{ opacity: 1, y: '0px' }}
			transition={{ duration: 0.75, delay: delay }}
			className='flex flex-col gap-1'
		>
			<Section
				icon={<RiAppsFill className='w-7 h-7' />}
				title='Software Projects'
				info={
					<a
						href='https://github.com/fborja44'
						target='_blank'
						className='flex flex-row items-center gap-2 text-slate-500 hover:text-indigo-800 transition-colors'
					>
						<FaGithub className='h-6 w-6 order-first sm:order-last' />
						<span>View My GitHub</span>
					</a>
				}
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
						href={'/project/tmt'}
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
						href={'/project/immaculate-melee'}
					/>
					<ProjectCard
						icon={<TiWeatherCloudy className='h-8 w-8 text-white' />}
						title={'Mobile Weather App'}
						categories={['React Native', 'JavaScript', 'Node.js', 'Expo']}
						gradient='from-cyan-300 to-blue-600'
						href={'https://github.com/fborja44/weather-app'}
						external
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
						href={'https://github.com/fborja44/notify-app'}
						external
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
						href={'/design/albumnow'}
						gradient='from-albumNowSecondary to-albumNowPrimary'
					/>
					<ProjectCard
						icon={<HiOutlineGlobeAmericas className='w-9 h-9 text-white' />}
						title={'NextGen'}
						categories={['Social', 'Mobile', 'Branding']}
						gradient='from-indigo-500 to-purple-800'
						href={'/design/nextgen'}
					/>
					<ProjectCard
						icon={<HiCode className='w-8 h-8 text-white' />}
						title={'Codify'}
						categories={['Web', 'Mobile', 'Responsive', 'Branding']}
						gradient='from-yellow-200 to-lime-400'
						href={'/design/codify'}
					/>
				</div>
			</Section>
		</motion.div>
	);
};

ProjectList.defaultProps = {
	delay: 0.75,
};

export default ProjectList;
