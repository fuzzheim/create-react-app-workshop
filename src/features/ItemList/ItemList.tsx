import React from "react"
import { IItemListItem } from "./IItemListItem"

interface IItemListProps {
	items?: IItemListItem[]
}

export const ItemList: React.FC<IItemListProps> = (props) => {
	const items = props.items || []

	const liItems: any[] = []
	for (const anItem of items) {
		liItems.push(<li key={anItem.id}>{anItem.text}</li>)
	}

	return <ul>{liItems}</ul>
	//return <ul>{items.map((item) => <li key={item.id}>{item.text}</li>)}</ul>
}

export default ItemList
