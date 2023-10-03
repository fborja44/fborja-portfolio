import { Link } from "react-router-dom";

interface TitleLinkProps {
	href: string;
	children: React.ReactNode;
	filled?: boolean;
}

const TitleLink = ({ children, href, filled }: TitleLinkProps) => {
	return (
		<Link
			className={`uppercase text-sm font-medium ml-8 tracking-wider ${
				filled
					? 'bg-black text-white px-4 pt-2 pb-1 rounded-full hover:text-gray-100 transition-colors'
					: 'hover-underline'
			}`}
			to={href}
		>
			{children}
		</Link>
	);
};

export default TitleLink;
