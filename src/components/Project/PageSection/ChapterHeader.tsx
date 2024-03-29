const ChapterHeader = ({ children }: { children: React.ReactNode }) => {
	return (
		<h2 className='pt-16 uppercase text-3xl font-bold tracking-wide'>
			{children}
		</h2>
	);
};

export default ChapterHeader;
