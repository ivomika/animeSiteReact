import React from 'react'
import './checkBox.scss'

function CheckBox({ saveState, state }) {
	return (
		<div className='check-box'>
			<input
				className='check-box__input'
				type='checkbox'
				name='type'
				id='type'
				checked={JSON.parse(localStorage.getItem('gridView'))}
				onChange={() => {
					saveState(state)
				}}
			/>
			<div className='check-box__row'>
				<span className='sheck-box__row-span'></span>
			</div>
			<label htmlFor='type' className='check-box__label'></label>
			<div className='check-box__square'>
				<span className='check-box__square-first'></span>
				<span className='check-box__square-second'></span>
			</div>
		</div>
	)
}

export default CheckBox
