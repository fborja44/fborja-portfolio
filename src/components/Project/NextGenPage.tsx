import StyledLink from '../StyledLink/StyledLink';
import ChapterHeader from './Section/ChapterHeader';
import PageSection from './Section/PageSection';
import ProjectPageLayout from './ProjectPageLayout/ProjectPageLayout';
import Banner from '../../assets/img/nextgen/banner_nextgen.png';
import Persona1 from '../../assets/img/nextgen/user1_nextgen.png';
import Persona2 from '../../assets/img/nextgen/user2_nextgen.png';
import PaperWireframes from '../../assets/img/nextgen/paper_wireframes_nextgen.png';
import DigitalWireframes from '../../assets/img/nextgen/digital_wireframes_nextgen.png';
import Desktop from '../../assets/img/nextgen/desktop_nextgen.png';
import Tablet from '../../assets/img/nextgen/tablet_nextgen.png';
import Mockups from '../../assets/img/nextgen/mockups_nextgen.png';
import ImageSection from '../Image/ImageSection';
import Image from '../Image/Image';

const NextGenPage = () => {
	return (
		<ProjectPageLayout type='Case Study' title='AlbumNow — Mobile App Design'>
			<img src={Banner} alt='banner' className='rounded-xl' />
			<ChapterHeader>Project Overview</ChapterHeader>
			<PageSection title='About the Product'>
				<p>
					NextGen is a community service search and social platform aimed
					towards young adults, where users can browse and search for service
					opportunities, track their schedule, and engage with other users and
					organizations.
				</p>
				<p>
					I worked on this project between August 2023 and September 2023 as
					part of the Google UX Design Professional certificate. The goal for
					this project to complete the UX design process for both a native
					mobile app and a responsive website following a mobile-first design
					philosophy.
				</p>
			</PageSection>
			<PageSection title='The Goal'>
				<p>
					Community service is an important part of the lives of young adults.
					However, it can be difficult to juggle community service with busy
					schedules or find opportunities nearby that match your interests. Our
					goal is to help the next generation of leaders have in impact in their
					local communities and engage with like-minded people while being able
					to maintain their busy schedules and pursue their interests.
				</p>
			</PageSection>
			<PageSection title='My Role'>
				<p>
					I acted as the Lead UX Designer and UX Researcher for NextGen
					throughout this project.
				</p>
				<p>My responsibilites included:</p>
				<ul className='list-disc pl-12'>
					<li>Conducting User Research</li>
					<li>Planning Site Architecture</li>
					<li>Drafting Wireframes</li>
					<li>Creating Prototypes</li>
					<li>Conducting Usability Studies</li>
				</ul>
			</PageSection>
			<ChapterHeader>User and Design Research</ChapterHeader>
			<PageSection title='The User'>
				<p>
					To gain a better understanding of our users and their needs, I
					conducted a set of user interviews. Through these interviews, I
					learned more about their backgrounds, their goals, and their pain
					points when participating in community service, or when they are
					searching for service opportunities to join.
				</p>
				<p>
					Many users want to participate in community service, or participate
					more often, but can’t find nearby opportunities or ones that match
					their interests. Additionally, it can be hard to fit these
					opportunities into their schedule while juggling school, jobs, and
					more. Current apps and websites lack the ability to engage with
					organizations and other volunteers, and also lack scheduling and
					tracking features.
				</p>
				<p>I create two user personas based on my findings.</p>
				<ImageSection>
					<Image
						src={Persona1}
						alt='User Persona 1'
						className='max-w-lg w-full mx-auto mb-6'
					/>
					<Image
						src={Persona2}
						alt='User Persona 2'
						className='max-w-lg w-full mx-auto mb-6'
					/>
				</ImageSection>
			</PageSection>
			<PageSection title='Challenges and Constraints'>
				The biggest challenge I faced when creating my designs was translating
				the mobile designs to larger screens such as a desktop and tablet. I had
				to think about the size, look, and feel of each of the components before
				adapting them for use with other devices. I made sure to consider what
				tasks users will be performing on each of the devices, such as
				organization/management or browsing on desktop.
			</PageSection>
			<PageSection title='Research Study'>
				<p>
					In addition to user interviews, I also conducted a competitive audit
					on similar volunteer search platforms, such as VolunteerMatch and
					AmeriCorps. I was able to identify areas of improvement, some key
					features that are important to a platform, and new opportunities such
					as a community forum, schedule management system, and direct messaging
					system between users and organizations. Here's what I found is most
					important for users:
				</p>
				<ul className='list-disc pl-12'>
					<li>
						Information — Users are looking for specific information before
						signing up for a volunteer opportunity. Making this information
						easily accessbible will ensure that users can find the opportunities
						that fit them best.
					</li>
					<li>
						Search and Browsing — Users should be able to search and browse for
						opportunities quickly, meaning they need to know the most important
						information first.
					</li>
					<li>
						Organization — Users would like to stay organized. Having a lot of
						opportunities can make the schedule confusing and difficult to
						follow.
					</li>
				</ul>
			</PageSection>
			<ChapterHeader>Initial Designs</ChapterHeader>
			<PageSection title='Design Concepts'>
				<p>
					Before working on my initial sketches and wireframes, I used the How
					Might We and Crazy Eights exercises to generate several ideas and
					solutions.
				</p>
				<p>This was the result of my How Might We exercise:</p>
				<ul className='list-disc pl-12'>
					<li>
						How might we make searching for volunteer opportunities fun and
						interesting?
					</li>
					<li>
						How might we connect young adults with community service in a fun
						and engaging way?
					</li>
					<li>
						How might we make communication with volunteer organizations more
						personal?
					</li>
					<li>
						How might we make a way to manage schedules less stressful for
						volunteers so that they can focus on what’s important?
					</li>
					<li>How might we gamify the volunteering experience?</li>
					<li>How might social media help promote volunteer services?</li>
				</ul>
			</PageSection>
			<PageSection title='Sketches and Wireframes'>
				<p>My initial paper wireframes can be found below.</p>
				<Image
					src={PaperWireframes}
					alt='Wireframes'
					className='max-w-lg w-full mx-auto mt-2'
				/>
				<p>
					After completing the paper wireframes, I selected the best components
					from each of them to create the final paper wireframes. From there, I
					translated them to digital wireframes on Figma.
				</p>
				<p>
					For each of my designs, I prioritized making the information that
					users need easy to find while browsing. This includes being able to
					quickly find information for each listing, such as location,
					proximity, and the organizer. Additionally, users who are logged in
					are shown a display of their upcoming schedule as the first item.
				</p>
				<p>
					For the listing screen, it was important to make sure that users are
					able to find more descriptive information. When users want to sign up
					for an opportunity, they are shown a modal to continue to sign-up
					process.
				</p>
				<Image
					src={DigitalWireframes}
					alt='Wireframes'
					className='max-w-3xl w-full mx-auto mt-2'
				/>
			</PageSection>
			<PageSection title='User Testing'>
				<p>
					I conducted a usability study to recieve feedback directly from users
					for the design and find areas of improvement. The{' '}
					<StyledLink
						external
						href='https://www.figma.com/proto/1NAjAO2JpR0GC62jZ52o5m/NextGen?type=design&node-id=1-2&t=9iPBxDrIWM57CK92-1&scaling=scale-down&page-id=0%3A1&starting-point-node-id=1%3A2&mode=design'
					>
						low-fidelity prototype
					</StyledLink>{' '}
					used for the study can be found here.
				</p>
				<p>Usability Study Findings:</p>
				<ul className='list-decimal pl-12'>
					<li>
						Users want exhaustive search and filtering to find the opportunities
						that fit their needs, including proximity, categories, and
						availability.
					</li>
					<li>
						Users want a quick and easy browsing experience to help them find
						opportunities without too much friction or stoppages.
					</li>
					<li>
						Users would like as much information as they need to help them make
						decisions before committing to an opportunity.
					</li>
				</ul>
			</PageSection>
			<ChapterHeader>Refining the Design</ChapterHeader>
			<PageSection title='Mockups'>
				<Image
					src={Mockups}
					alt='Mockups'
					className='max-w-5xl w-full mx-auto mb-6'
				/>
				<p>
					During testing, users noted that the categories browsing page felt
					very flat and bland. It was also very difficult to identify categories
					at a glance. Based on this feedback, I added background images to each
					of the cards and the appropriate icon for each category that is used
					throughout the app.
				</p>
				<p>
					To keep consistent with labeling, I also added category icons to the
					scheduled event components, in accordance with some user feedback
					during testing. Additionally, I increased the size of the titles to
					make them more distinct from the rest of the content, and increased
					the spacing between the dates groupings.
				</p>
				<p>
					The high-fidelity prototype can be found{' '}
					<StyledLink
						external
						href='https://www.figma.com/proto/1NAjAO2JpR0GC62jZ52o5m/NextGen?type=design&node-id=146-2266&t=ULH7zJN620ubbQWp-1&scaling=scale-down&page-id=146%3A2265&starting-point-node-id=146%3A2266&mode=design'
					>
						here
					</StyledLink>
					.
				</p>
			</PageSection>
			<PageSection title='Responsive Designs'>
				<p>
					For the Desktop and Tablet versions of the app, I wanted to make sure
					users are able to browse for listings effectively, so I chose to use a
					Grid of Cards layout for the home screen. The desktop version has
					larger card sizes, and can display more categories on the navigation
					carousel.
				</p>
				<ImageSection>
					<Image
						src={Desktop}
						alt='Desktop Mockup'
						className='max-w-lg w-full mx-auto mb-6'
					/>
					<Image
						src={Tablet}
						alt='Tablet Mockup'
						className='max-w-lg w-full mx-auto mb-6'
					/>
				</ImageSection>
			</PageSection>
			<PageSection title='Accessibility Considerations'>
				<p>
					Here are some of the ways accessibility was considered in the designs
					for NextGen:
				</p>
				<ol className='list-decimal pl-12'>
					<li>
						Contrast and Visibility — In instances where there is colored text,
						or text over images, I tried to make sure that the text has proper
						contrast and is easily legible. For background images, the exposure
						has been decreased to help with this.
					</li>
					<li>
						Iconography — Iconography is consistent throughout each of the
						designs to help identify categories easily and at a glance.
						Similarly, action buttons are consistent components throughout the
						app.
					</li>
				</ol>
			</PageSection>
			<ChapterHeader>Moving Forward</ChapterHeader>
			<section>
				<div className='flex md:flex-row flex-col gap-8'>
					<PageSection title='Impact'>
						This app will allow the today's growing leaders have a greater
						impact in their own communities and connect with each other.
					</PageSection>
					<PageSection title='What I Learned'>
						<p>
							While working on this project, I was able to learn about what is
							needed to complete a fully responsive design for a website and
							app, and the differences in design philosophy that can be taken
							between each of the screen sizes.
						</p>
						<p>
							I continued to practice using Figma's different design features. I
							was able to use the variations and variables feature in components
							to make reusable components throughout my designs. Through this, I
							was able to make an extensive sticker sheet that helped me make my
							designs consistent, even between screen sizes. I also made
							use of the Fluent Design system for iconography.
						</p>
					</PageSection>
				</div>
			</section>
			<PageSection title='Next Steps'>
				<p>
					This project took a bit more work than my previous design projects as
					I had to take into account the differences between a native mobile app
					and the responsive website. With that said, some of the next steps I
					have started to think about are:
				</p>
				<ol className='list-decimal pl-12'>
					<li>
						One of my priorities is to consider additional accessibility
						features that can be included to improve the experience of the app
						for different users, including a high contrast mode, extra
						languages, or further filter options for listings.
					</li>
					<li>
						There are also opportunities to add more community features, such as
						comments, a discussion forum, or individual posts so that users can
						share their volunteer experiences and engage with others on the
						platform.
					</li>
					<li>
						There is always room to improve the readability of the app, the
						organization of information, and the overall user flow. Making sure
						users are able to navigate the site well and find all of the info
						they need is important and can continually be iterated upon.
					</li>
				</ol>
			</PageSection>
		</ProjectPageLayout>
	);
};

export default NextGenPage;
