import SectionHeader from "./SectionHeader";

interface PageSectionProps {
	title: string;
	children: React.ReactNode;
}

const PageSection = ({ children, title }: PageSectionProps) => {
	return (
		<section className="sm:px-4 md:px-8 flex-1">
			<SectionHeader>{title}</SectionHeader>
			<div className="flex flex-col gap-5 text-slate-800">{children}</div>
		</section>
	);
};

export default PageSection;
