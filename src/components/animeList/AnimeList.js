import React, { useState } from 'react'
import AnimeItemGrid from '../animeItemGrid/AnimeItemGrid'
import AnimeItemRow from '../animeItemRow/AnimeItemRow'
import CheckBox from '../checkBox/CheckBox'
import './animeList.scss'

function AnimeList({ children = [] }) {
	const styles = {
		checkBoxInner: {
			display: 'flex',
			flexDirection: 'row-reverse',
			padding: '2em 0',
		},
	}

	const [state, setState] = useState(
		JSON.parse(localStorage.getItem('gridView'))
	)

	function saveState(state) {
		setState(!state)
		localStorage.setItem('gridView', JSON.stringify(!state))
		newView()
	}
	const [grid, setView] = useState(JSON.parse(localStorage.getItem('gridView')))

	function newView() {
		setView(!grid)
	}

	let animeItems

	if (grid) {
		animeItems = (
			<div className='anime-grid'>
				{children.map(anime => {
					return (
						<AnimeItemGrid
							title={anime.title}
							score={anime.score}
							image={anime.image}
							key={anime.id}
						/>
					)
				})}
			</div>
		)
	} else {
		animeItems = (
			<div className='anime-list'>
				{children.map(anime => {
					return (
						<AnimeItemRow
							title={anime.title}
							score={anime.score}
							image={anime.image}
							key={anime.id}
						/>
					)
				})}
			</div>
		)
	}

	return [
		<div className='container' style={styles.checkBoxInner}>
			<CheckBox state={state} saveState={saveState}></CheckBox>
		</div>,
		animeItems,
	]
}

export default AnimeList
