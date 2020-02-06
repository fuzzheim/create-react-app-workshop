import React, { useState } from "react"

export const EditableItemList: React.FC = () => {
	const [ items, setItems ] = useState([])
	const [ newItemText, setNewItemText ] = useState("")

	return (
		<div>
			<input type="text" value={newItemText} />
		</div>
	)
}

export default EditableItemList
