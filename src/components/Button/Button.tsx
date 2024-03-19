interface ButtonProps {
	icon?: React.ReactNode;
	children: React.ReactNode;
}

const Button = ({ children, icon }: ButtonProps) => {
	return (
		<button className='bg-indigo-500 hover:bg-violet-600 transition-colors text-sm text-white py-4 px-5 rounded-xl flex flex-row items-center gap-2.5'>
			<span>{children}</span>
			{icon}
		</button>
	);
};

export default Button;
