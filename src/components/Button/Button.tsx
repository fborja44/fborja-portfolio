import { Link } from 'react-router-dom';

interface ButtonProps {
	icon?: React.ReactNode;
	children: React.ReactNode;
	href?: string;
}

const Button = ({ children, icon, href }: ButtonProps) => {
	const className =
		'bg-indigo-500 hover:bg-violet-500 transition-colors text-sm text-white py-4 px-5 rounded-xl flex flex-row items-center gap-2.5 w-fit';

	return href ? (
		<Link className={className} to={href}>
			<span>{children}</span>
			{icon}
		</Link>
	) : (
		<button className={className}>
			<span>{children}</span>
			{icon}
		</button>
	);
};

export default Button;
