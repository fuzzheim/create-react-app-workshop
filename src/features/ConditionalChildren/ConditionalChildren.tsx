import React, {useState} from "react"
//import styles from "./ConditionalChildren.module.css"

export const ConditionalChildren:React.FC = ({children}) => {
    const[showChildren, setShowChildren] = useState(false)
    const onCheckBoxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setShowChildren(event.target.checked)
    }
    return (
        <React.Fragment>
            <input type="checkbox" checked={showChildren} onChange={onCheckBoxChange} />
            {showChildren && children}
        </React.Fragment>
    )
}
export default ConditionalChildren