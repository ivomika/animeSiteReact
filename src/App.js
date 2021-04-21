import Header from './components/header/Header'
import Main from './components/main/Main'
import Nav from './components/nav/Nav'
import Schedule from './components/schedule/Schedule'
import ScheduleItem from './components/scheduleItem/ScheduleItem'
import Sidebar from './components/sidebar/Sidebar'
import Slider from './components/slider/Slider'
import AnimeCard from './components/animeCard/AnimeCard'
import AnimeList from './components/animeList/AnimeList'
import Footer from './components/footer/Footer'

const styles = {
	schedule: {
		backgroundColor: '#7abeb7',
	},
	scheduleInner: {
		display: 'flex',
		justifyContent: 'space-between',
		padding: '10em 0',
	},
	checkBoxInner: {
		display: 'flex',
		flexDirection: 'row-reverse',
		padding: '2em 0',
	},
	animeGrid: {
		display: 'flex',
		flexWrap: 'wrap',
	},
}

const animes = {
	see: [
		{
			id: 1,
			link: '/#',
			title: 'Re:Zero',
			image: 'https://source.unsplash.com/collection/1118891',
			score: 3,
		},
		{
			id: 2,
			link: '/#',
			title: 'Re:Zero',
			image: 'https://source.unsplash.com/collection/1118891',
			score: 3,
		},
		{
			id: 3,
			link: '/#',
			title: 'Re:Zero',
			image: 'https://source.unsplash.com/collection/1118891',
			score: 3,
		},
		{
			id: 4,
			link: '/#',
			title: 'Re:Zero',
			image: 'https://source.unsplash.com/collection/1118891',
			score: 3,
		},
		{
			id: 5,
			link: '/#',
			title: 'Re:Zero',
			image: 'https://source.unsplash.com/collection/1118291',
			score: 3,
		},
		{
			id: 6,
			link: '/#',
			title: 'Re:Zero',
			image: 'https://source.unsplash.com/collection/1111891',
			score: 2,
		},
	],

	viewed: [
		{ id: 1, link: '/#', title: 'Uri on Ice' },
		{ id: 2, link: '/#', title: 'Uri on Ice' },
		{ id: 3, link: '/#', title: 'Uri on Ice' },
		{ id: 4, link: '/#', title: 'Uri on Ice' },
	],

	postponed: [
		{ id: 1, link: '/#', title: 'Mob100' },
		{ id: 2, link: '/#', title: 'Mob100' },
		{ id: 3, link: '/#', title: 'Mob100' },
	],
}

const navLinks = [
	{ id: 1, title: 'Аниме', link: '/#' },
	{ id: 2, title: 'Аниме', link: '/#' },
	{ id: 3, title: 'Новое', link: '/#' },
	{ id: 4, title: 'Рандомное аниме', link: '/#' },
]

function App() {
	return (
		<div>
			<Header nav={<Nav navLinks={navLinks} />} />
			<Sidebar
				profileImage='https://source.unsplash.com/collection/1118891'
				nickname='Ivomika'
				animes={animes}
			/>
			<Main
				children={[
					<Slider
						children={[
							<AnimeCard
								src='https://source.unsplash.com/collection/1118891'
								title='Uri On Ice'
								score={3}
							/>,
							<AnimeCard
								src='https://source.unsplash.com/collection/1118892'
								title='Uri On Fuck'
								score={2.5}
							/>,
							<AnimeCard
								src='https://source.unsplash.com/collection/1118895'
								title='Uri On Dildo'
								score={2}
							/>,
							<AnimeCard
								src='https://source.unsplash.com/collection/1118894'
								title='Uri On Kekw Uri On Kekw Uri On Kekw'
								score={1.5}
							/>,
							<AnimeCard
								src='https://source.unsplash.com/collection/1118891'
								title='Uri On Ice'
								score={1}
							/>,
							<AnimeCard
								src='https://source.unsplash.com/collection/1118892'
								title='Uri On Fuck'
								score={0.5}
							/>,
							<AnimeCard
								src='https://source.unsplash.com/collection/1118895'
								title='Uri On Dildo'
							/>,
						]}
					/>,
					<div>
						<div style={styles.schedule}>
							<div className='container'>
								<div style={styles.scheduleInner}>
									<div>
										<Schedule
											key='9'
											title='Обновления аниме'
											children={[
												<ScheduleItem title='13.01.2222' animes={animes.see} />,
												<ScheduleItem title='51.01.2222' animes={animes.see} />,
												<ScheduleItem title='12.41.2222' animes={animes.see} />,
											]}
										/>
									</div>
									<div>
										<Schedule
											key='10'
											title='Расписание аниме'
											children={[
												<ScheduleItem
													title='Понидельник'
													animes={animes.viewed}
												/>,
												<ScheduleItem title='Вторник' animes={animes.viewed} />,
												<ScheduleItem title='Среда' animes={animes.viewed} />,
												<ScheduleItem title='Четверг' animes={animes.viewed} />,
												<ScheduleItem title='Пятница' animes={animes.viewed} />,
												<ScheduleItem title='Суббота' animes={animes.viewed} />,
												<ScheduleItem
													title='Воскрсенье'
													animes={animes.viewed}
												/>,
											]}
										/>
									</div>
								</div>
							</div>
						</div>
					</div>,
					<div className='container'>
						<AnimeList children={animes.see} />
					</div>,
					<Footer nav={<Nav navLinks={navLinks} />} />,
				]}
			/>
		</div>
	)
}

export default App
