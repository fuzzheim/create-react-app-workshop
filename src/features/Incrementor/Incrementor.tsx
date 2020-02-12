import React, {useState} from "react"
import './Incrementor.css';

export const Incrementor: React.FC = () => {
    const [count, setCount] = useState(0)
    const incrementorClasses = 'Incrementor-number'
    return (
        <React.Fragment>
            <p className={incrementorClasses}>{count}</p>
            <button onClick={ () => {
                setCount(count + 1)
            }}>
                Increment
            </button>
        </React.Fragment>
    )
}