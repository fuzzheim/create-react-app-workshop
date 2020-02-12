import React from 'react';

interface IDisplayProps {
    count: number
}
export const CounterDisplay: React.FC<IDisplayProps> = ({ count }) => {
    return (
        <p className="Counter-number">{count}</p>
    )
}

export default CounterDisplay