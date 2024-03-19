interface DisplayCardProps {
	src: string;
	title: string;
	subtitle: string;
	imgClass?: string;
}

const DisplayCard = ({ src, title, subtitle, imgClass }: DisplayCardProps) => {
	return (
		<div className='flex flex-col gap-2 items-center rounded-xl bg-white w-96 px-6 py-4 shadow'>
			<div className='flex items-center h-20'>
				<img src={src} className={imgClass || 'w-44 h-auto'} />
			</div>
			<span className='font-bold text-sm'>{title}</span>
			<span className='text-slate-700 font-medium text-sm mb-2'>{subtitle}</span>
		</div>
	);
};

export default DisplayCard;
