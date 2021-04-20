import React from 'react'
import './score.scss'

function Score({ score }) {
	let triengle = (
		<polygon points='0,16 8,0 16,16' fill='#edf6f9' strokeWidth='3' />
	)

	if (score === 0.5) {
		triengle = [
			<polygon points='0,16 8,0 16,16' fill='#edf6f9' strokeWidth='3' />,
			<polygon points='6.5 16, 16 16, 11 6' fill='#E29578' strokeWidth='3' />,
		]
	} else if (score === 0) {
		triengle = (
			<polygon points='0,16 8,0 16,16' fill='#E29578' strokeWidth='3' />
		)
	}

	return (
		<svg className='score' viewBox='0 0 16 16'>
			{triengle}
		</svg>
	)
}

export default Score
