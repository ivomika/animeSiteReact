import React from 'react'
import Score from '../score/Score'
import './animeItemGrid.scss'

function AnimeItemGrid({ title, image, score }) {
	let scoreValue = []

	for (let i = 0; i < 3; i++) {
		if (Math.floor(score) - i > 0) scoreValue.push(1)
		else if (Math.floor(score) - i === 0)
			scoreValue.push(Math.round((score - i) / 0.5) * 0.5)
		else scoreValue.push(0)
	}

	let bounds

	function rotateToMouse(e) {
		const mouseX = e.clientX
		const mouseY = e.clientY
		const leftX = mouseX - bounds.x
		const topY = mouseY - bounds.y
		const center = {
			x: leftX - bounds.width / 2,
			y: topY - bounds.height / 2,
		}
		const distance = Math.sqrt(center.x ** 2 + center.y ** 2)

		e.currentTarget.style.transform = `
        scale3d(1.07, 1.07, 1.07)
        rotate3d(
        ${center.y / 100},
        ${-center.x / 100},
        0,
        ${Math.log(distance) * 2}deg
        )
    `
	}

	function onMouseEnter(e) {
		bounds = e.currentTarget.getBoundingClientRect()
		e.currentTarget.addEventListener('mousemove', rotateToMouse)
	}

	function onMouseLeave(e) {
		const element = e.currentTarget
		element.removeEventListener('mousemove', rotateToMouse)
		element.style.transition = '.2s linear transform'
		element.style.transform = ''
		element.style.background = ''

		setTimeout(() => {
			element.style.transition = ''
		}, 200)
	}

	return (
		<div className='anime-item-grid__container'>
			<div
				className='anime-item-grid'
				onMouseEnter={onMouseEnter}
				onMouseLeave={onMouseLeave}
			>
				<div className='anime-item-grid__image-container'>
					<img className='anime-item-grid__image' src={image} alt='' />
				</div>
				<div className='anime-item-grid__info'>
					<h3 className='anime-item-grid__title'>{title}</h3>
					<div className='anime-item-grid__score'>
						<Score score={scoreValue[0]} />
						<Score score={scoreValue[1]} />
						<Score score={scoreValue[2]} />
					</div>
				</div>
			</div>
		</div>
	)
}

export default AnimeItemGrid
