interface TokenProps {
	children: React.ReactNode;
	icon?: React.ReactNode;
}

const Token = ({ children, icon }: TokenProps) => {
	return (
		<div className='flex flex-row items-center gap-2 text-xs bg-green-300 text-green-900 px-4 py-1 rounded-full'>
			<span>{children}</span>
			{icon}
		</div>
	);
};

export default Token;
