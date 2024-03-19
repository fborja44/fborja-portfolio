interface ListProps {
	children: React.ReactNode;
}

const List = ({ children }: ListProps) => {
	return <ul className='list-disc pl-12'>{children}</ul>;
};

export default List;
