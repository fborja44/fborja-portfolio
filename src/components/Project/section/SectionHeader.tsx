const SectionHeader = ({ children }: { children: React.ReactNode }) => {
	return (
		<h3 className='mt-10 mb-8 uppercase text-2xl font-semibold tracking-wide'>
			{children}
		</h3>
	);
};

export default SectionHeader;
