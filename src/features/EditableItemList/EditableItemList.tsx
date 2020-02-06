import React, { useState } from "react"

interface IEditableItem {
	id: number
	text: string
}

let currentId = 0
const genId = () => {
	return currentId++
}

export const EditableItemList: React.FC = () => {
	const [ items, setItems ] = useState<IEditableItem[]>([])
	const [ newItemText, setNewItemText ] = useState("")

	const inputChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
		setNewItemText(event.target.value)
	}
	const inputKeyUpHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
		if (event.key === "Enter") {
			const newItems = items.slice()
			newItems.push({
				id: genId(),
				text: newItemText
			})
			setItems(newItems)
			setNewItemText("")
		}
	}

	return (
		<div>
			<input type="text" value={newItemText} onChange={inputChangeHandler} onKeyUp={inputKeyUpHandler} />
			<ul>{items.map((item) => <li key={item.id}>{item.text}</li>)}</ul>
		</div>
	)
}

export default EditableItemList
