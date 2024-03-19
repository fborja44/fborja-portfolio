import { useEffect, useState } from 'react';

interface ImageProps {
	src: string;
	className: string;
	alt?: string;
	caption?: string;
}

const Image = ({ src, className, alt, caption }: ImageProps) => {
	const [magnify, setMagnify] = useState(false);

	useEffect(() => {
		if (magnify) {
			document.body.classList.add('overflow-hidden');
		} else {
			document.body.classList.remove('overflow-hidden');
		}

		return () => {
			document.body.classList.remove('overflow-hidden');
		};
	}, [magnify]);

	return (
		<div
			className={`static flex flex-col items-center ${caption ? 'mb-4' : ''}`}
		>
			<img
				src={src}
				alt={alt}
				className={className + ' hover:cursor-zoom-in'}
				onClick={() => setMagnify(true)}
			/>
			{caption && (
				<div className='text-sm italic w-96 text-center'>{caption}</div>
			)}
			{magnify && (
				<div
					className='fixed inset-0 max-h-full bg-black bg-opacity-75 py-8 items-center justify-center z-50 hover:cursor-zoom-out backdrop-blur'
					onClick={() => setMagnify(false)}
				>
					<img src={src} alt={alt} className='px-8 max-h-full' />
					{caption && (
						<div className='text-gray-200 text-sm italic fixed bottom-0 w-full py-4 px-20 text-center flex items-center justify-center bg-black/50'>
							<span>{caption}</span>
						</div>
					)}
				</div>
			)}
		</div>
	);
};

export default Image;
