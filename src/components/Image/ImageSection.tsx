interface ImageSectionProps {
	children: React.ReactNode;
}

const ImageSection = ({ children }: ImageSectionProps) => {
	return <div className='flex lg:flex-row flex-col gap-8 justify-center'>{children}</div>;
};

export default ImageSection;
