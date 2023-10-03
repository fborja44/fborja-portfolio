import ProjectCard from './ProjectCard';
import AlbumNow from '../../assets/img/preview_albumnow.png';
import Codify from '../../assets/img/preview_codify.png';
import NextGen from '../../assets/img/preview_nextgen.png';
import Noteworks from '../../assets/img/preview_noteworks.png';

const ProjectCardList = () => {
	return (
		<>
			<div className='my-8 flex lg:flex-row flex-col gap-8'>
				<ProjectCard
					preview_src={NextGen}
					title='NextGen'
					type='Case Study'
					description='A fully-responsive web app design for NextGen, with the goal of making it easier for the next generation of leaders give back to their communities.'
					href='/nextgen'
				/>
				<ProjectCard
					preview_src={AlbumNow}
					title='AlbumNow'
					type='Case Study'
					description='AlbumNow is a mobile app geared towards providing users with a seemless pre-ordering and merchandise browsing experience.'
					href='/albumnow'
				/>
			</div>
			<div className='my-8 flex lg:flex-row flex-col gap-8'>
				<ProjectCard
					preview_src={Codify}
					title='Codify'
					type='Case Study'
					description='An accessible coding tutorial platform for everyone where you can learn how to code from through guided tutorials and curated courses and track your progress.'
					href='/codify'
				/>
				<ProjectCard
					preview_src={Noteworks}
					title='noteworks'
					type='Coding'
					description='A responsive Electron web app built using React and TypeScript, to help keep your thoughts organized!'
					href='/noteworks'
					wip
				/>
			</div>
		</>
	);
};

export default ProjectCardList;
