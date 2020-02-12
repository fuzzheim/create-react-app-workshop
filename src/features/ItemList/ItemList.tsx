import React from "react"
import "./ItemList.css"
import { IItemListItem } from "./IItemListItem"

interface IItemListProps {
    items?: IItemListItem[]
}

export const ItemList:React.FC<IItemListProps> = (props) => {
    const items = props.items || []
    const liItems: any[] = []
    for(const anItem of items) {
        liItems.push(<li key={anItem.id} className={anItem.classes}>{anItem.text}</li>)
    }
    return (
        <div className="ItemList-wrapper">
        <ul className="ItemList-ul">
            { liItems }
        </ul>
        </div>
    )
}
export default ItemList