import React from 'react'
import Score from '../score/Score'
import './animeCard.scss'

function AnimeCard({ src, title, score = 0 }) {
	let scoreValue = []

	for (let i = 0; i < 3; i++) {
		if (Math.floor(score) - i > 0) scoreValue.push(1)
		else if (Math.floor(score) - i === 0)
			scoreValue.push(Math.round((score - i) / 0.5) * 0.5)
		else scoreValue.push(0)
	}

	return (
		<div className='anime-card'>
			<div className='anime-card__image-container'>
				<img src={src} alt='' className='anime-card__image' />
			</div>
			<h3 className='anime-card__title'>{title}</h3>
			<div className='anime-card__score'>
				<Score score={scoreValue[0]} />
				<Score score={scoreValue[1]} />
				<Score score={scoreValue[2]} />
			</div>
		</div>
	)
}

export default AnimeCard
