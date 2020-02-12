import React from "react"
import "./CenteredContent.css"

export const CenteredContent:React.FC = ({children}) => {
    return (
        <div className="CenteredContent-wrapper">
            {children}
        </div>
    )
}
export default CenteredContent