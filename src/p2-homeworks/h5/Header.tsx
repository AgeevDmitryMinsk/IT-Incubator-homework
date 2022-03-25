import React from 'react'
import {NavLink} from 'react-router-dom';
import s from './Header.module.css'
import {PATH} from "./Routes";


function Header() {
	return (
		<div className={s.header}>

			<div id={s.slide_in}>
				{/*react router dom v5*/}
				{/*<NavLink to={PATH.PRE_JUNIOR} className={s.link} activeClassName={s.active}>pre-junior</NavLink>*/}
				{/*<NavLink to={PATH.JUNIOR} className={s.link} activeClassName={s.active}>junior</NavLink>*/}
				{/*<NavLink to={PATH.JUNIOR_PLUS} className={s.link} activeClassName={s.active}>junior+</NavLink>*/}

				{/*react router dom v6*/}
				<NavLink to={PATH.PRE_JUNIOR} className={({isActive}) => isActive ? s.active : s.link }>pre-junior</NavLink>
				<NavLink to={PATH.JUNIOR} className={({isActive}) => isActive ?  s.active : s.link}>junior</NavLink>
				<NavLink to={PATH.JUNIOR_PLUS} className={({isActive})  => isActive ? s.active : s.link} >junior+</NavLink>

				<div className={s.block}/>
			</div>
		</div>
	)
}

export default Header
