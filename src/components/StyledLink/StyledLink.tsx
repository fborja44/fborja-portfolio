import { FiExternalLink } from 'react-icons/fi';

interface StyledLinkProps {
	children: React.ReactNode;
	href: string;
	external?: boolean;
	flex?: boolean;
}

const StyledLink = ({ children, href, external, flex }: StyledLinkProps) => {
	return (
		<a
			className={`${
				flex ? 'flex flex-row items-center' : ''
			} w-fit text-blue-700 hover:text-indigo-700 transition-colors`}
			href={href}
			target={external ? '_blank' : ''}
		>
			<span>{children}</span>
			{external && <FiExternalLink className='inline ml-1' />}
		</a>
	);
};

export default StyledLink;
