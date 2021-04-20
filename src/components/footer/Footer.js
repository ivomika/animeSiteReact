import React from 'react'
import './fooret.scss'

function Footer({ nav }) {
	return (
		<footer className='footer'>
			<div className='container'>
				<div className='footer__inner'>
					<img src='logo.svg' alt='' className='footer__logo' />
					{nav}
				</div>
			</div>
		</footer>
	)
}

export default Footer
