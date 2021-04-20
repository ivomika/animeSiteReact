import React from 'react'
import './scheduleItem.scss'

function clickHandler(e) {
	let buttons = Array.prototype.slice.call(
		document.querySelectorAll('.schedule__btn')
	)

	const current = e.currentTarget

	buttons.forEach(el => {
		if (el !== current) el.classList.remove('active')
	})
	current.classList.toggle('active')
}

function ScheduleItem({ title, animes = [] }) {
	return (
		<div className='schedule__item'>
			<div className='schedule__btn' onClick={clickHandler}>
				{title}
			</div>
			<div className='schedule__smenu'>
				{animes.map(anime => {
					return (
						<a
							href={anime.link}
							key={anime.id}
							className='schedule__smenu-link'
						>
							{anime.title}
						</a>
					)
				})}
			</div>
		</div>
	)
}

export default ScheduleItem
