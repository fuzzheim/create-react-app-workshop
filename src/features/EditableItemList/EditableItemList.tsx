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

	const deleteItemHandler = (index: number) => () => {
		const newItems = items.slice()
		newItems.splice(index, 1)
		setItems(newItems)
	}
	const itemChangeHandler = (index: number) => (event: React.ChangeEvent<HTMLInputElement>) => {
		const newItems = items.slice()
		const item = newItems[index]
		item.text = event.target.value
		setItems(newItems)
	}

	return (
		<div>
			<input type="text" value={newItemText} onChange={inputChangeHandler} onKeyUp={inputKeyUpHandler} />
			<ul>
				{items.map((item, index) => (
					<li key={item.id}>
						<input type="text" value={item.text} onChange={itemChangeHandler(index)} />
						<button onClick={deleteItemHandler(index)}>X</button>
					</li>
				))}
			</ul>
		</div>
	)
}

export default EditableItemList
