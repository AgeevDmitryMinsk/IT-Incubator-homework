import React from 'react'
import Header from './Header'
import Routes2, {PATH} from './Routes'
import {HashRouter, NavLink, Route, Routes} from "react-router-dom";
import Error404 from "./pages/Error404";
import PreJunior from "./pages/PreJunior";
import {Junior} from "./pages/Junior";
import {JuniorPlus} from "./pages/JuniorPlus";
import s from './Header.module.css'


function HW5() {
	return (
		<div>
			{/*в gh-pages лучше работает HashRouter*/}
			<HashRouter>

				<Header/>


				{/*<Routes>*/}


				{/*	/!*в начале мы попадаем на страницу '/' и переходим сразу на страницу PRE_JUNIOR*!/*/}
				{/*	/!*exact нужен чтоб указать полное совподение (что после '/' ничего не будет)*!/*/}
				{/*	/!*<Route path={'/'} exact render={() => <Redirect to={PATH.PRE_JUNIOR}/>}/>*!/*/}
				{/*	<Route path={'/'}  element={<PreJunior/>}/>*/}

				{/*	<Route path={PATH.PRE_JUNIOR} element={<PreJunior/>}/>*/}
				{/*	<Route path={PATH.JUNIOR} element={<Junior/>}/>*/}
				{/*	<Route path={PATH.JUNIOR_PLUS} element={ <JuniorPlus/>}/>*/}
				{/*	<Route path={`/*`} element={() => <Error404/>}/>*/}
				{/*</Routes>*/}

				<Routes2/>

			</HashRouter>
		</div>
	)
}

export default HW5
