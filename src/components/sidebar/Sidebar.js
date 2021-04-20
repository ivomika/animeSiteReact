import React from 'react'
import SidebarItem from '../sidebarItem/SidebarItem'
import './sidebar.scss'

function Sidebar({ profileImage, nickname, animes }) {
	return (
		<div className='sidebar'>
			<img src={profileImage} alt='' className='sidebar__image' />
			<div className='sidebar__inner'>
				<div className='sidebar__top'>
					<span className='sidebar__name'>{nickname}</span>
					<div className='sidebar__bell'>
						<i className='fas fa-bell'></i>
					</div>
				</div>

				<SidebarItem title='Смотрю' sMenuId='see-smenu' animes={animes.see} />
				<SidebarItem
					title='Просмотрено'
					sMenuId='viewed-smenu'
					animes={animes.viewed}
				/>
				<SidebarItem
					title='Отложено'
					sMenuId='postponed-smenu'
					animes={animes.postponed}
				/>

				<div className='sidebar__filter'>
					<select className='sidebar__select' name='filter' id=''>
						<option value='all'>all</option>
						<option value='qwe'>qwe</option>
					</select>

					<select className='sidebar__select' name='filter' id=''>
						<option value='all'>all</option>
						<option value='qwe'>qwe</option>
					</select>

					<select className='sidebar__select' name='filter' id=''>
						<option value='all'>all</option>
						<option value='qwe'>qwe</option>
					</select>

					<select className='sidebar__select' name='filter' id=''>
						<option value='all'>all</option>
						<option value='qwe'>qwe</option>
					</select>

					<select className='sidebar__select' name='filter' id=''>
						<option value='all'>all</option>
						<option value='qwe'>qwe</option>
					</select>

					<select className='sidebar__select' name='filter' id=''>
						<option value='all'>all</option>
						<option value='qwe'>qwe</option>
					</select>

					<select className='sidebar__select' name='filter' id=''>
						<option value='all'>all</option>
						<option value='qwe'>qwe</option>
					</select>

					<select className='sidebar__select' name='filter' id=''>
						<option value='all'>all</option>
						<option value='qwe'>qwe</option>
					</select>

					<input
						className='sidebar__search'
						type='search'
						name='filter'
						id=''
					/>
				</div>
			</div>
		</div>
	)
}

export default Sidebar
