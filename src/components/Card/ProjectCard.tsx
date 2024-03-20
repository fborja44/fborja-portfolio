import { FiChevronRight } from 'react-icons/fi';
import { FiExternalLink } from 'react-icons/fi';
import { Link } from 'react-router-dom';

interface ProjectCardProps {
	icon: React.ReactNode;
	title: string;
	categories: string[];
	href: string;
	gradient?: string;
	wip?: boolean;
	external?: boolean;
}

const ProjectCard = ({
	icon,
	title,
	categories,
	gradient,
	href,
	external,
}: ProjectCardProps) => {
	return (
		<Link
			className={`h-30 flex flex-row justify-between items-center bg-white border border-gray-50 transition-colors shadow py-6 px-6 md:px-12 rounded-xl ${
				href ? 'hover:border-blue-200' : 'hover:cursor-default'
			}`}
			to={href}
			target={external ? '_blank' : ''}
		>
			<div className='flex flex-row items-center gap-5'>
				<div className='rounded-full box-content border-2 border-slate-200'>
					<div className='rounded-full box-content border-2 border-white'>
						<div
							className={`flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-b ${
								gradient || 'from-purple-500 via-red-500 to-yellow-500'
							}`}
						>
							{icon}
						</div>
					</div>
				</div>
				<div className='flex flex-col gap-1'>
					<span className='font-bold'>{title}</span>
					<span className='text-slate-700 font-medium text-sm'>
						{categories.map((cat, i) =>
							i !== categories.length - 1 ? cat + ', ' : cat
						)}
					</span>
				</div>
			</div>
			{href && (
				<span className='text-slate-600 justify-self-end'>
					{external ? (
						<FiExternalLink className='w-6 h-6' />
					) : (
						<FiChevronRight className='w-6 h-6' />
					)}
				</span>
			)}
		</Link>
	);
};

export default ProjectCard;
