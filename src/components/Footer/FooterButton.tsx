interface FooterButtonProps {
	children: React.ReactNode;
	href?: string;
	external?: boolean;
}

const FooterButton = ({ children, href, external }: FooterButtonProps) => {
	return (
		<a
			href={href}
			target={external ? '_blank' : ''}
			className='hover:text-indigo-700 transition-colors'
		>
			{children}
		</a>
	);
};

export default FooterButton;
