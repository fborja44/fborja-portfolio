interface StyledLinkProps {
	children: React.ReactNode;
	href: string;
	external?: boolean;
}

const StyledLink = ({ children, href, external }: StyledLinkProps) => {
	return (
		<a className='text-blue-700 hover:text-indigo-700 transition-colors' href={href} target={external ? '_blank' : ''}>
			{children}
		</a>
	);
};

export default StyledLink;
