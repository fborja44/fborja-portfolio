import { Link } from 'react-router-dom';

interface TitleLinkProps {
	href: string;
	children: React.ReactNode;
}

const TitleLink = ({ children, href }: TitleLinkProps) => {
	return (
		<Link
			className='hover-underline uppercase text-sm font-semibold ml-8 text-slate-800 transition-colors hover:text-indigo-700 border-indigo-700'
			to={href}
		>
			{children}
		</Link>
	);
};

export default TitleLink;
