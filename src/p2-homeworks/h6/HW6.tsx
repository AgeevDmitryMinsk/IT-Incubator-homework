import React, {ChangeEvent, useEffect, useRef, useState} from 'react'
import SuperEditableSpan from './common/c4-SuperEditableSpan/SuperEditableSpan'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import {restoreState, saveState} from './localStorage/localStorage'

function HW6() {
	const [value, setValue] = useState<string>('')
	const [parentValue, setParentValue] = useState<string>(`2`)
	//const ref= useRef()

	const save = () => {
		saveState<string>('editable-span-value', value)
	}
	const restore = () => {
		// setValue()
		//setValue(restoreState<string>('editable-span-value', value))
		setValue(restoreState<string>('editable-span-value', ``))
	}


	function onChangeSelectHandler(e: ChangeEvent<HTMLSelectElement>) {
		setParentValue(e.currentTarget.value)
		saveState<string>('cityNumber-in-LocalStorage', e.currentTarget.value)
	}

	function getFromLocalStorageHandler() {
		let cityString = localStorage.getItem('cityNumber-in-LocalStorage')

		if (cityString) {
			let cityParsed = JSON.parse(cityString)
			setParentValue(cityParsed)
		}
	}

	useEffect(getFromLocalStorageHandler, [])

	const cities = [`Moscow`, `Minsk`, `Warsaw`]

	return (
		<div>
			<hr/>
			homeworks 6

			{/*should work (должно работать)*/}
			<div>
				<SuperEditableSpan
					value={value}
					onChangeText={setValue}
					spanProps={{children: value ? undefined : 'please, click here and enter text...'}}
				/>
			</div>
			<SuperButton onClick={save}>save</SuperButton>
			<SuperButton onClick={restore}>restore</SuperButton>

			<hr/>
			please, select city:
			<select value={parentValue} onChange={onChangeSelectHandler}>
				<option>none</option>
				{cities.map((el, index)=> <option value={index}>{el}</option>)}
				{/*<option value={`1`}>Minsk</option>*/}
				{/*<option value={`2`}>Moscow</option>*/}
				{/*<option value={`3`}>Warsaw</option>*/}
			</select>
			now reload your browser and city will be loaded from localStorage: {cities[+parentValue]}


			{/*для личного творчества, могу проверить*/}
			{/*<AlternativeSuperEditableSpan/>*/}
			<hr/>
		</div>
	)
}

export default HW6
