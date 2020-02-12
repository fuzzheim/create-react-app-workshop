import React, {useState} from "react"

export const HelloWorldHeading: React.FC = () => {
    const [showHeading, setShowHeading] = useState(false)

    return (
        <React.Fragment>
            <h1>{showHeading && "Hello World"}</h1>
            <button onClick={ () => {
                setShowHeading(true)
            }}>
                Click me
            </button>
        </React.Fragment>
    )
}