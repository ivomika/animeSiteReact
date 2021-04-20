import React from 'react'
import './schedule.scss'

function Schedule({ title, children }) {
	return (
		<div className='schedule'>
			<h2 className='schedule__title'>{title}</h2>

			{children}
		</div>
	)
}

export default Schedule
