import React from 'react'
import {AffairType} from "./HW2";

type AffairPropsType = {
	// key не нужно типизировать
	affair: AffairType  // need to fix any
	deleteAffairCallback: (_id: number) => void // need to fix any
}

function Affair(props: AffairPropsType) {
	const deleteCallback = () => {
		console.log(11)
		return props.deleteAffairCallback(props.affair._id)
	}// need to fix

	let color: string = ``
	if (props.affair.priority === `high`) color = `red`
	if (props.affair.priority === `middle`) color = `yellow`
	if (props.affair.priority === `low`) color = `green`
	//let color = props.affair.priority === `high` ? `red` : props.affair.priority === `middle` ? `yellow` : `green`
	//let color = props.affair.priority === `high` ? `red` : props.affair.priority === `middle` ? `yellow` : `green`


	return (
		<div style={{display: 'flex'}}>
			{/*// show some text*/}
			<div style={{width: '100px'}}>
				{props.affair.name}
			</div>

			<div style={{color, width: '60px'}}>
				{props.affair.priority}
			</div>

			<button onClick={deleteCallback}>X</button>
		</div>
	)
}

export default Affair
