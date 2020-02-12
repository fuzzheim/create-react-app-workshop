import React from 'react';

interface ICounterInterface {
    onClick: () => void
}
export const CounterToggle: React.FC<ICounterInterface> = ({onClick}) => {
    return (
        <React.Fragment>
            <p className="Counter-toggle">
                <button 
                    className="Toggle-button" 
                    onClick={onClick}
                >
                    Toggle buttons
                </button>
            </p>
        </React.Fragment>
    )
}

export default CounterToggle