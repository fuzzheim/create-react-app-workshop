import React from "react"

interface IItemListProps {
	items: Array<{
		id: string
		text: string
	}>
}

export const ItemList: React.FC<IItemListProps> = ({ items = [] }) => {
	return <ul>{items.map(({ id, text }) => <li key={id}>{text}</li>)}</ul>
}

export default ItemList
