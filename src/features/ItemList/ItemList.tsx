import React from "react"
import { IListItem } from "./IListItem"

interface IItemListProps {
	items: IListItem[]
}

export const ItemList: React.FC<IItemListProps> = ({ items = [] }) => {
	return <ul>{items.map(({ id, text }) => <li key={id}>{text}</li>)}</ul>
}

export default ItemList
