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
		<div className='p-2 flex flex-1 gap-1 border border-solid border-black'>
			<img
				className='flex flex-1 bg-gray-300 h-80 object-cover'
				src={preview_src}
			/>
			<div className='p-5 flex flex-col justify-center items-start gap-5 flex-1'>
				<Label>{type || 'Project Type'}</Label>
				<h2 className='uppercase tracking-wide text-3xl font-bold'>
					{title || 'Project Title'}
				</h2>
				<p className='font-base border-b pb-4 border-solid border-black'>
					{description ||
						'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}
				</p>
				{!wip ? (
					<Link
						to={href}
						className='hover-arrow flex flex-row items-center uppercase font-semibold text-sm tracking-wide'
					>
						<span>View Details</span>
						<img
							src={ArrowRight}
							className='ml-1.5 w-5 h-5 relative bottom-[2px]'
						/>
					</Link>
				) : (
					<span className='hover-arrow flex flex-row items-center uppercase font-semibold text-sm tracking-wide italic'>Work In Progress</span>
				)}
			</div>
		</div>
	);
};

export default ProjectCard;
