import React from 'react';

interface IControlProps {
    onIncrement: () => any
    onDecrement: () => any
    incrementDisabled: boolean
    decrementDisabled: boolean
}
export const CounterControlButtons: React.FC<IControlProps> = ({onIncrement, onDecrement, incrementDisabled, decrementDisabled}) => {
    return (
        <React.Fragment>
            <button 
                className="Counter-button" 
                disabled={incrementDisabled}
                onClick={onIncrement}
            >
                Increment
            </button>
            <button 
                className="Counter-button" 
                disabled={decrementDisabled}
                onClick={onDecrement}
            >
                Decrement
            </button>
        </React.Fragment>
    )
}

export default CounterControlButtons