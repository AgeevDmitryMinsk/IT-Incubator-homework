import React, {useState} from 'react'
import Affairs from './Affairs'

// types
export type AffairPriorityType = `high` | 'low' | 'middle'// need to fix any
export type AffairType = {
	_id: number
	name: string
	priority: AffairPriorityType
}// need to fix any
export type FilterType = 'all' | AffairPriorityType

// constants
const defaultAffairs: Array<AffairType> = [ // need to fix any
	{_id: 1, name: 'React', priority: 'high'},
	{_id: 2, name: 'anime', priority: 'low'},
	{_id: 3, name: 'games', priority: 'low'},
	{_id: 4, name: 'work', priority: 'high'},
	{_id: 5, name: 'html & css', priority: 'middle'},
]

// pure helper functions
export const filterAffairs = (affairs: Array<AffairType>, filter: FilterType): Array<AffairType> => { // need to fix any
	// if (filter === 'high') return affairs.filter(affair=>affair.priority === 'high')// need to fix
	// else if (filter === 'low') return affairs.filter(affair=>affair.priority === 'low')// need to fix
	// else if (filter === 'middle') return affairs.filter(affair=>affair.priority === 'middle')// need to fix
	// else return affairs;
	if (filter === `all`) return affairs
	else return affairs.filter(affair => affair.priority === filter)

}
export const deleteAffair = (affairs: Array<AffairType>, _id: number): Array<AffairType> => { // need to fix any
	return affairs.filter(affair => affair._id !== _id)       // need to fix
}

function HW2() {
	const [affairs, setAffairs] = useState<Array<AffairType>>(defaultAffairs) // need to fix any
	const [filter, setFilter] = useState<FilterType>('all')
	//console.log(filter)

	const filteredAffairs = filterAffairs(affairs, filter)
	const deleteAffairCallback = (_id: number) => {
		//console.log(43)
		setAffairs(deleteAffair(affairs, _id))
	} // need to fix any

	return (
		<div>
			<hr/>
			homeworks 2
			<hr/>

			{/*should work (должно работать)*/}
			<Affairs
				data={filteredAffairs}
				setFilter={setFilter}
				deleteAffairCallback={deleteAffairCallback}
			/>

			<hr/>
			{/*для личного творчества, могу проверить*/}
			{/*<AlternativeAffairs/>*/}
			<hr/>
		</div>
	)
}

export default HW2
