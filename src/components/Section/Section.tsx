interface SectionProps {
	icon?: React.ReactNode;
	children: React.ReactNode;
	title: string;
	info?: React.ReactNode;
}

const Section = ({ children, icon, title, info }: SectionProps) => {
	return (
		<section className='rounded-2xl bg-slate-100 my-6 py-7 px-8 z-10 h-fit'>
			<div className='flex flex-col sm:flex-row sm:justify-between sm:items-center mb-6 pr-1 gap-4'>
				<div className='flex flex-row items-center gap-2 sm:gap-3.5'>
					<span className='text-slate-500'>{icon}</span>
					<h3 className='font-bold md:text-lg'>{title}</h3>
				</div>
				{info}
			</div>
			{children}
		</section>
	);
};

export default Section;
