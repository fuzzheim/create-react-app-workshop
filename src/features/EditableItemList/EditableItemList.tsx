import React, { useState } from "react"
import { uid } from "utils"

interface IItem {
	text: string
	id: number
}

export const EditableItemList: React.FC = () => {
	const [ items, setitems ] = useState<IItem[]>([])
	const [ newItem, setnewItem ] = useState("")

	const onNewItemChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
		setnewItem(evt.target.value)
	}
	const onNewItemKeyUp = (evt: React.KeyboardEvent) => {
		const target: HTMLInputElement = evt.target as any
		const { value } = target
		if (evt.key === "Enter") {
			if (value.trim() === "") return
			const newItems = Array.from(items) // Show example without cloning state
			newItems.push({
				id: uid(),
				text: target.value
			})
			setitems(newItems)
			setnewItem("")
		}
	}
	const onItemDelete = (itemId: number) => () => {
		const itemIndex = items.findIndex((item) => item.id === itemId)
		const newItems = items.slice()
		newItems.splice(itemIndex, 1)
		setitems(newItems)
	}
	const onItemChange = (itemId: number) => (evt: React.ChangeEvent<HTMLInputElement>) => {
		const itemIndex = items.findIndex((item) => item.id === itemId)
		const newItems = items.slice()
		newItems.splice(itemIndex, 1, {
			...newItems[itemIndex],
			text: evt.target.value
		})
		setitems(newItems)
	}

	if (items.length > 10) {
		throw new Error("Oops... no more items allowed!")
	}

	return (
		<div>
			<div className="form-group">
				<label htmlFor="itemListInput">Add item</label>
				<input
					id="itemListInput"
					className="form-control"
					type="text"
					value={newItem}
					onChange={onNewItemChange}
					onKeyUp={onNewItemKeyUp}
				/>
			</div>
			<ul className="list-group">
				{items.map((item) => (
					<li key={item.id} className="list-group-item">
						<input type="text" value={item.text} onChange={onItemChange(item.id)} />
						<button type="button" onClick={onItemDelete(item.id)}>
							X
						</button>
					</li>
				))}
			</ul>
		</div>
	)
}

export default EditableItemList
