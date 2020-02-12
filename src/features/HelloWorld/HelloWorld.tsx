import React from "react"
import logo from './underconstruction.png';
import './HelloWorld.css';

export const HelloWorld: React.FC = () => {
    return (
        <div>
            <img src={logo} className="HelloWorld-logo" alt="logo" />
            <p>
                <button onClick={ () => {
                    alert("Hello World")
                }}>Click me</button>
            </p>
        </div>
    )
}
export default HelloWorld