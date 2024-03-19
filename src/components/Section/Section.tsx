interface SectionProps {
	icon?: React.ReactNode;
	children: React.ReactNode;
	title: string;
}

const Section = ({ children, icon, title }: SectionProps) => {
	return (
		<section className='rounded-2xl bg-slate-100 my-6 py-7 px-8 z-10 h-fit'>
			<div className='flex flex-row items-center gap-3.5 mb-6'>
				<span className='text-slate-500'>{icon}</span>
				<h3 className='font-bold text-lg'>{title}</h3>
			</div>
			{children}
		</section>
	);
};

export default Section;
