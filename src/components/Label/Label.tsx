interface LabelProps {
	children: React.ReactNode;
}

const Label = ({ children }: LabelProps) => {
	return (
		<div className='px-1 flex flex-row items-center uppercase border border-solid border-black rounded-full font-medium text-sm leading-none'>
			<span className='text-center leading-default relative top-[1px]'>
				{children}
			</span>
		</div>
	);
};

export default Label;
