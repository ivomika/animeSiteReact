import React from 'react'
import './sidebaritem.scss'

function clickHandler(e) {
	let buttons = Array.prototype.slice.call(
		document.querySelectorAll('.sidebar__btn')
	)

	const current = e.currentTarget

	buttons.forEach(el => {
		if (el !== current) el.classList.remove('active')
	})
	current.classList.toggle('active')
}

function SidebarItem({ title, sMenuId, animes = [] }) {
	return (
		<div className='sidebar__item'>
			<div className='sidebar__btn' onClick={clickHandler}>
				{title}
				<span className='sidebar__plus'></span>
			</div>
			<div className='sidebar__smenu' id={sMenuId}>
				{animes.map(anime => {
					return (
						<a href={anime.link} key={anime.id} className='sidebar__smenu-link'>
							{anime.title}
						</a>
					)
				})}
			</div>
		</div>
	)
}

export default SidebarItem
