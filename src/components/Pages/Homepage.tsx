import Button from '../Button/Button';
import PageLayout from '../PageLayout/PageLayout';
import { VscSend } from 'react-icons/vsc';
import Token from '../Token/Token';
import { MdOutlineWorkOutline } from 'react-icons/md';
import { motion } from 'framer-motion';
import ProjectList from '../ProjectList/ProjectList';
import Section from '../Section/Section';
import { RiGraduationCapFill } from 'react-icons/ri';
import DisplayCard from '../Card/DisplayCard';
import Google from '../../assets/img/google.png';
import Stevens from '../../assets/img/stevens.png';
import Avatar from '../Avatar/Avatar';

const Homepage = () => {
	return (
		<PageLayout>
			<motion.section
				initial={{ opacity: 0, y: '5px' }}
				animate={{ opacity: 1, y: '0px' }}
				transition={{ duration: 0.75, delay: 0.25 }}
				exit={{ opacity: 0 }}
				className='flex flex-col lg:flex-row mb-12 lg:mb-20 items-center lg:justify-between'
			>
				<div className='flex flex-col items-center lg:items-start mb-8 lg:mb-0'>
					<div className='flex flex-col lg:flex-row items-center gap-7'>
						<h1 className='text-4xl font-bold'>I'm Francis Borja!</h1>
						<Token icon={<MdOutlineWorkOutline className='w-4 h-4' />}>
							Available For Work
						</Token>
					</div>
					<div className='text-slate-800 text-lg font-normal mt-5 mb-6 md:w-[480px] text-center lg:text-left'>
						<p>
							I am a Software Engineer from New Jersey who gradudated with a B.S
							Computer Science from Stevens Institute of Technology.
						</p>
					</div>
					<Button icon={<VscSend className='w-5 h-5' />} href='/contact'>
						Let's Get In Touch
					</Button>
				</div>
				<Avatar />
			</motion.section>
			<motion.div
				initial={{ opacity: 0, y: '5px' }}
				animate={{ opacity: 1, y: '0px' }}
				transition={{ duration: 0.75, delay: 0.75 }}
			>
				<Section
					icon={<RiGraduationCapFill className='w-7 h-7' />}
					title='Education And Certifications'
				>
					<div className='flex flex-col md:flex-row md:justify-around gap-6 items-center'>
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
			</motion.div>
			<ProjectList />
		</PageLayout>
	);
};

export default Homepage;
