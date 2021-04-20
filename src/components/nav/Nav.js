import React from 'react'
import './nav.scss'

function Nav({ navLinks = [] }) {
	return (
		<nav className='nav'>
			{navLinks.map(link => {
				return (
					<li className='nav__item' key={link.id}>
						<a href={link.link} className='nav__link'>
							{link.title}
						</a>
					</li>
				)
			})}
		</nav>
	)
}

export default Nav
