import React from 'react'
import Score from '../score/Score'
import './animeItemRow.scss'

const standartDiscription = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
adipisci eos delectus animi. Eveniet velit repellat placeat possimus
tempora aliquam illum, harum aut nesciunt accusantium expedita dolore
quis! Molestias, veniam! Lorem ipsum dolor sit amet consectetur
adipisicing elit. Veniam magn dolor. Quaerat, vel nam? repellat
placeat possimus tempora aliquam illum, harum aut nesciunt accusantium
expedita dolore quis! Molestias, veniam! Lorem ipsum dolor sit amet
consectetur adipisicing elit. Veniam magn dolor. Quaerat, vel nam?
repellat placeat possimus tempora aliquam illum, harum aut nesciunt
accusantium expedita dolore quis! Molestias, veniam! Lorem ipsum dolor
sit amet consectetur adipisicing elit. Veniam magn dolor. Quaerat, vel
nam?`

function AnimeItemRow({
	discription = standartDiscription,
	title,
	image,
	score = 0,
}) {
	let scoreValue = []

	for (let i = 0; i < 3; i++) {
		if (Math.floor(score) - i > 0) scoreValue.push(1)
		else if (Math.floor(score) - i === 0)
			scoreValue.push(Math.round((score - i) / 0.5) * 0.5)
		else scoreValue.push(0)
	}

	return (
		<div className='anime-item-row'>
			<div className='anime-item-row__info'>
				<div className='anime-item-row__discription'>{discription}</div>
				<div className='anime-item-row__title'>{title}</div>
				<div className='anime-item-row__score'>
					<Score score={scoreValue[0]} />
					<Score score={scoreValue[1]} />
					<Score score={scoreValue[2]} />
				</div>
			</div>
			<div className='anime-item-row__image-container'>
				<img className='anime-item-row__image' src={image} alt='' />
			</div>
		</div>
	)
}

export default AnimeItemRow
