import React from 'react'
import {
//	Redirect,
//	Route,
//	Switch
} from "react-router-dom";
import PreJunior from "./pages/PreJunior";
import Error404 from "./pages/Error404";
import {Junior} from "./pages/Junior";
import {JuniorPlus} from "./pages/JuniorPlus";
import {HashRouter, NavLink, Route, Routes} from "react-router-dom";

export const PATH = {
	PRE_JUNIOR: '/pre-junior',
	JUNIOR: '/junior',
	JUNIOR_PLUS: '/junior-plus'
	// add paths
}

function Routes2() {
	return (
		<div>
			{/*Switch выбирает первый подходящий роут для версии "react-router-dom": "5.3.0"* /}
			<Switch>

			{/*в начале мы попадаем на страницу '/' и переходим сразу на страницу PRE_JUNIOR*/}
			{/*exact нужен чтоб указать полное совподение (что после '/' ничего не будет)*/}
			<Routes>
				<Route path={'/'} element={<PreJunior/>}/>

				<Route path={PATH.PRE_JUNIOR} element={<PreJunior/>}/>
				<Route path={PATH.JUNIOR} element={<Junior/>}/>
				<Route path={PATH.JUNIOR_PLUS} element={<JuniorPlus/>}/>

				{/*у этого роута нет пути, он отрисуется если пользователь захочет попасть на несуществующую страницу*/}
				<Route element={<Error404/>}/>
			</Routes>


			{/*</Switch>*/}
		</div>
	)
}

export default Routes2
