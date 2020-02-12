import React, {useState} from "react"
import './Counter.css';
import CounterDisplay from './CounterDisplay';
import CounterControlButtons from './CounterControlButtons';
import CounterToggle from  './CounterToggle';

interface ICounterProps {
    initialValue?: number
}

export const Counter: React.FC<ICounterProps> = ({ initialValue = 0 }) => {
    //const { count, setCount } = useContext(CounterContext)
    const [count, setCount] = useState(initialValue)
    const [showButtons, setShowButtons] = useState(true)
    const increment = () => {
        setCount(count + 1)
    }
    const decrement = () => {
        setCount(count - 1)
    }
    const toggleControls = () => { 
        setShowButtons(!showButtons) 
    }
    return (
        <div className="Counter-wrapper">
            <CounterDisplay count={count} />
            {showButtons && (
                <CounterControlButtons 
                    onIncrement={increment} 
                    onDecrement={decrement} 
                    decrementDisabled={count <=0 } 
                    incrementDisabled={count >=10 } 
                />
            )}
            <CounterToggle onClick={ toggleControls }/>
        </div>
    )
}
export default Counter