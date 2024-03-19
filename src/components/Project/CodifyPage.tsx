import ProjectPageLayout from './ProjectPageLayout';
import Banner from '../../assets/img/banner_codify.png';
import ChapterHeader from './ChapterHeader';
import PageSection from './section/PageSection';
import StyledLink from '../StyledLink/StyledLink';
import PaperWireframe from '../../assets/img/paper_wireframe_codify.png';
import ResponsivePaperWireframe from '../../assets/img/responsive_paper_wireframe_codify.png';
import Mockups from '../../assets/img/mockups_codify.png';
import ResponsiveMockups from '../../assets/img/responsive_mockups_codify.png';

const CodifyPage = () => {
	return (
		<ProjectPageLayout
			type='Case Study'
			title='Codify — Responsive Website Design'
		>
			<img src={Banner} alt='banner' />
			<ChapterHeader>Project Overview</ChapterHeader>
			<PageSection title='About the Product'>
				<p>
					Codify is a coding learning platform with the aim to make the coding
					journey accessible worldwide with published articles, videos, and
					courses available in multiple languages.
				</p>
				<p>
					I worked on this project between June 2023 and July 2023 as part of
					the Google UX Design Professional certificate. The goal for this
					project to complete the UX design process for a responsive website,
					taking into account different device and screen sizes.
				</p>
			</PageSection>
			<PageSection title='The Goal'>
				<p>
					Many coding website don’t have great accessibility and language
					options, usually offering courses, videos, and articles in a single
					language and minimal accessibility settings.
				</p>
				<p>
					My goal was to create a website where you can easily browse and search
					for courses, videos, and articles in different languages while being
					able to track your learning progress.
				</p>
				<p>
					This project would be my first design project that used Adobe XD as
					the primary design software. One of my main focuses throughout the
					project was the learn how to use the tools provided effectively and
					understand how they differ from other platforms like Figma.
				</p>
			</PageSection>
			<PageSection title='My Role'>
				<p>
					I acted as the Lead UX Designer and UX Researcher for Codify for this
					project.
				</p>
				<p>My responsibilites included:</p>
				<ul className='list-disc pl-12'>
					<li>Conducting User Research</li>
					<li>Planning Site Architecture.</li>
					<li>Drafting Wireframes</li>
					<li>Creating Prototypes</li>
					<li>Conducting Usability Studies</li>
				</ul>
			</PageSection>
			<ChapterHeader>User and Design Research</ChapterHeader>
			<PageSection title='The User'>
				<p>
					In order to better understand our users, I completed a set of user
					interviews, where I gained valuable insights that I used to create
					empathy maps. Through this research, I was able to identify the goal
					of our target users, in addition to some of their needs. Many users
					want to be able to learn how to code, but were frustrated as they
					struggled to find free coding tutorials or courses available in their
					language. Additionally, many existing websites lack in searchability
					and discoverability for tutorials of specific topics, difficulty, and
					language. Users want to be able to focus on learning, rather than
					stressing about finding what they want to learn.
				</p>
			</PageSection>
			<PageSection title='Challenges and Constraints'>
				<p>
					The biggest challenge I faced was figuring out how to include the
					accessibility features without being too intrusive to the general user
					flow, while also being able to make them easily discoverable by the
					user.
				</p>
				<p>
					This was also my first time using Adobe XD as a design tool, so I had
					to take some time learning about the different nuances in navigating
					the software.
				</p>
			</PageSection>
			<PageSection title='Research Study'>
				<p>
					From my research, I was able to identify three main user pain points
					that users experienced while following coding tutorials online:
				</p>
				<ul className='list-disc pl-12'>
					<li>
						Language — Significant lack of options for tutorials and courses
						offered beyond of English language.
					</li>
					<li>
						Discoverability — Poor searching and filtering features make it
						harder to find the desired tutorials by difficulty, subject, or
						language.
					</li>
					<li>
						Learning Experience — Independent online learning can sometimes feel
						impersonal leading to decreased motivation and engagement.
					</li>
				</ul>
			</PageSection>
			<ChapterHeader>Initial Designs</ChapterHeader>
			<PageSection title='Design Concepts'>
				<p>
					I used the How Might We and Crazy Eights exercises to to ideate some
					design solutions before starting on my initial wireframes.
				</p>
			</PageSection>
			<PageSection title='Sketches and Wireframes'>
				<p>
					After completing the initial ideation phase, I made paper wireframes
					for each of the primary screens needed in the main user flow.
				</p>
				<img
					src={PaperWireframe}
					alt='Wireframes'
					className='max-w-5xl w-full mx-auto mb-6'
				/>
				<p>
					I also completed paper wireframes for different screen size
					variations.
				</p>
				<img
					src={ResponsivePaperWireframe}
					alt='Wireframes'
					className='max-w-sm w-full mx-auto mb-6'
				/>
			</PageSection>
			<PageSection title='User Testing'>
				<p>
					To gain further insights into my designs, I conducted a usability
					study using the{' '}
					<StyledLink
						external
						href='https://xd.adobe.com/view/134ff8c2-16d1-4e77-b4a9-b7a32645742e-461c/?fullscreen'
					>
						low-fidelity prototype
					</StyledLink>
					.
				</p>
				<p>Here's what I found:</p>
				<ul className='list-decimal pl-12'>
					<li>
						Users need to be able to access accessibility and other settings
						preferences on every page.
					</li>
					<li>
						Users want more filtering and search options to help narrow down
						their search results.
					</li>
					<li>
						Different elements on card components should bring users to
						different resources.
					</li>
				</ul>
			</PageSection>
			<ChapterHeader>Refining the Design</ChapterHeader>
			<PageSection title='Mockups'>
				<img
					src={Mockups}
					alt='Mockups'
					className='max-w-5xl w-full mx-auto mb-6'
				/>
				<p>
					After receiving great info from the usability study and generating
					insights, I made adjustments to some of the article and video
					components and the way information was displayed, and added additional
					navigation options.
				</p>
				<p>
					Additionally, I modified the way that courses are displayed so that
					they are more consistent and display more information for the user. I
					also modified the tag system to make it more scalable in the future.
				</p>
				<p>
					The high-fidelity prototype can be found{' '}
					<StyledLink
						external
						href='https://xd.adobe.com/view/e1a4d654-a55c-421c-9687-973700d60833-b4f7/'
					>
						here
					</StyledLink>
					.
				</p>
			</PageSection>
			<PageSection title='Responsive Designs'>
				<p>
					The responsive phone versions for several screens can be found below.
					In lieue of a top navigation bar, pages can be accessed through a pop
					out menu by pressing the hamburger menu.
				</p>
				<img
					src={ResponsiveMockups}
					alt='Phone Mockup'
					className='max-w-lg w-full mx-auto mb-6'
				/>
			</PageSection>
			<PageSection title='Accessibility Considerations'>
				<p>
					Accessibility was the key focus for this project. Here's a few ways
					accessibility was taken into account in my designs:
				</p>
				<ol className='list-decimal pl-12'>
					<li>
						Language — Making our coding tutorials accessible worldwide was a
						massive priority. Adding in language preferences and search filters
						will make it so that many people will be able to learn through our
						platform.
					</li>
					<li>
						Audio and Closed Captioning — Making sure that videos have audio
						transcriptions and closed captioning capabilities ensures that those
						with hearing impairments are still able to use these resources to
						help them learn.
					</li>
					<li>
						Consistency and Clarity — Using clear headings and labels to denote
						sections throughout the page to make it clear to screen readers the
						hierarchy of content on each page.
					</li>
				</ol>
			</PageSection>
			<ChapterHeader>Moving Forward</ChapterHeader>
			<section>
				<div className='flex md:flex-row flex-col gap-8'>
					<PageSection title='Impact'>
						Codify will help make coding more accessible around the world for
						those who speak different languages.
					</PageSection>
					<PageSection title='What I Learned'>
						<p>
							While working on this project, I learned how important
							accessibility is to make a universally great user experience, and
							how vital navigation is to make a cohesive design for a website.
						</p>
						<p>
							I found it really fun learning how to use a new tool like Adobe
							XD. Prior to the certificate course, I already had experience
							using Figma. However, this was my first introduction to Adobe XD.
							It was interesting to see the differences between the two
							platforms and what kind of things are possible on each.
						</p>
					</PageSection>
				</div>
			</section>
			<PageSection title='Next Steps'>
				<p>
					After reflecting on the work I completed during this project, some of
					the next steps I would like to complete are:
				</p>
				<ol className='list-decimal pl-12'>
					<li>
						Conduct more testing into the language options and other
						accessibility features throughout the website.
					</li>
					<li>
						Include more community features such as forums, discussion sections,
						or messaging.
					</li>
					<li>
						Experiment with more extensive searching functions and including
						more specific topic pages.
					</li>
				</ol>
			</PageSection>
		</ProjectPageLayout>
	);
};

export default CodifyPage;
