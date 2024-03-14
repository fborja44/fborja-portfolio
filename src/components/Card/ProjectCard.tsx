import Label from '../Label/Label';
import ArrowRight from '../../assets/arrow-right.svg';
import { Link } from 'react-router-dom';

interface ProjectCardProps {
	preview_src: string;
	type: 'Case Study' | 'Web App' | 'Coding';
	title: string;
	description?: string;
	href: string;
	wip?: boolean;
}

const ProjectCard = ({
	preview_src,
	type,
	title,
	description,
	href,
	wip,
}: ProjectCardProps) => {
	return (
		<div className='p-2 flex flex-1 gap-1 border border-solid border-black'></div>
	);
};

export default ProjectCard;
