import ProjectPageLayout from './ProjectPageLayout/ProjectPageLayout';
import ChapterHeader from './Section/ChapterHeader';
import PageSection from './Section/PageSection';
import StyledLink from '../StyledLink/StyledLink';
import Completed from '../../assets/img/app-screenshots/immaculate-melee/completed.png';
import Grid1 from '../../assets/img/app-screenshots/immaculate-melee/grid1.png';
import Grid2 from '../../assets/img/app-screenshots/immaculate-melee/grid2.png';
import List from './List/List';

const ImmaculateMeleePage = () => {
	return (
		<ProjectPageLayout type='Web App' title='Immaculate Melee'>
			<div className='relative pb-[56.25%] h-0'>
				<iframe
					width='560'
					height='315'
					src='https://www.youtube.com/embed/jAtydx-ljHA?si=u3K648yibz_hqOuV&amp;controls=1&amp;autoplay=1&amp;loop=1'
					title='YouTube video player'
					allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
					allowFullScreen
					className='absolute top-0 left-0 w-full h-full'
				></iframe>
			</div>
			<ChapterHeader>Project Overview</ChapterHeader>
			<PageSection title='About The App'>
				<p>
					Immaculate Melee is a daily web trivia game based on the viral sports
					trivia game{' '}
					<StyledLink href='https://www.immaculategrid.com/' external>
						Immaculate Grid
					</StyledLink>
					, which originally centered around baseball. The theme of Immaculate
					Melee the Professional Super Smash Bros. Melee scene.
				</p>
				<p>
					The game features a 3 x 3 grid of cells. Each row and column is
					assigned a category. Players must try and guess what players fit the
					criteria in each cell based on the category of the row and column.
					They are given 4 guesses (stocks) to complete the game.
				</p>
				<p>
					When a player makes a selection, a rarity score is generated based on
					the amount of times that player has been selected by other players.
					This score is added to their total rarity score in the game. If a
					player fails to make a guess for a specific cell, they are given 100
					rarity score. This adds additional depth to the game as players can
					aim to achieve the lowest rarity score possible.
				</p>
				<p>
					This project uses the MERN tech stack, primarily using
					MongoDB/Mongoose, Express, React, and Node.js. Additional technologies
					used include TypeScript, Redux, Firebase, and the Framer Motion
					animation library.
				</p>
				<p>
					The primary sources of player data gathered for this project were from{' '}
					<StyledLink href='https://liquipedia.net/smash/Main_Page' external>
						Liquipedia
					</StyledLink>{' '}
					and{' '}
					<StyledLink href='https://www.ssbwiki.com/' external>
						Smash Wiki
					</StyledLink>
					.
				</p>
			</PageSection>
			<PageSection title='Main Features'>
				<div className='font-medium'>Category Variety</div>
				<List>
					<li>
						Includes 25+ different categories which can be used as rows and
						columns, with many possible values for each category.
					</li>
					<li>
						Some examples include characters, location (state, country, etc.),
						Top 8 placements, and teams.
					</li>
				</List>
				<div className='font-medium'>Save Data</div>
				<List>
					<li>
						Users can save grid data between devices and sessions by creating an
						account.
					</li>
				</List>
				<div className='font-medium'>Exhaustive Player List</div>
				<List>
					<li>
						Includes the full list of 300+ players who have appeared in the
						yearly{' '}
						<StyledLink href='https://liquipedia.net/smash/SSBMRank' external>
							SSBMRank Top 100
						</StyledLink>{' '}
						list and additional notable players.
					</li>
					<li>
						Includes the main years of 2013 - 2023 and the{' '}
						<StyledLink
							href='https://liquipedia.net/smash/RetroSSBMRank'
							external
						>
							RetroSSBMRank
						</StyledLink>
						{' '}
						of 2001-2012.
					</li>
				</List>
			</PageSection>
			<PageSection title='App Preview'>
				<div className='mt-6 flex lg:flex-row flex-col gap-8'>
					<img
						src={Grid1}
						alt='Sample Grid 1'
						className='max-w-lg w-full mx-auto mb-6'
					/>
					<img
						src={Grid2}
						alt='Sample Grid 2'
						className='max-w-lg w-full mx-auto mb-6'
					/>
				</div>
				<div className='mt-6 flex lg:flex-row flex-col gap-8'>
					<img
						src={Completed}
						alt='Completed Screen'
						className='max-w-lg w-full mx-auto mb-6'
					/>
				</div>
			</PageSection>
		</ProjectPageLayout>
	);
};

export default ImmaculateMeleePage;
