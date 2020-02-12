import React, { useState } from "react"
import "./EditableItemList.css"

interface IEditableItem {
    id: number
    text: string
}

let currentId = 0
const genId = () => { 
    return currentId++ 
}

export const EditableItemList: React.FC = () => {
    const[ items, setItems ] = useState<IEditableItem[]>([])
    const[ newItemText, setNewItemText ] = useState("")

    const inputChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNewItemText(event.target.value)
    }
    const inputSubmitHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if(event.key === "Enter") {
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
        // delete the item with index x
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
        <div className="EditableItemList-wrapper">
            <label className="EditableItemList-label" htmlFor="EditableItemList-input">Legg inn listegreier her </label>
            <input 
                className="EditableItemList-input"
                type="text" 
                value={newItemText} 
                onChange={inputChangeHandler}
                onKeyUp={inputSubmitHandler} 
            />
            <ul className="EditableItemList-ul">
                {items.map((item, index) => (
                    <li className="EditableItemList-li" key={item.id}>
                        <input className="EditableItemList-editable" type="text" value={item.text} onChange={itemChangeHandler(index)} />
                        <button className="EditableItemList-delete" onClick={deleteItemHandler(index)}>×</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default EditableItemList