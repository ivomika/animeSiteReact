import React from 'react'
import './header.scss'

const styles = {
	container: {
		maxWidth: 'calc(((100% - 31em) - 115em) / 2 + 115em)',
	},
}

function Header({ nav }) {
	return (
		<header className='header'>
			<div className='container' style={styles.container}>
				<div className='header__inner'>
					<div className='header__logo-container'>
						<img src='logo.svg' alt='' className='header__logo' />
					</div>
					{nav}
				</div>
			</div>
		</header>
	)
}

export default Header
