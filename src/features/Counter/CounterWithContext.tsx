import React, { useState, useContext } from "react"
import { CounterContext } from "features/CounterContext"

interface ICounterProps {
	initialCount?: number
}

export const CounterWithContext: React.FC<ICounterProps> = ({ initialCount }) => {
	const { count, setCount } = useContext(CounterContext)
	const [ controlsVisible, setcontrolsVisible ] = useState(true)

	return (
		<div>
			<p>{count}</p>
			{controlsVisible && (
				<React.Fragment>
					<button className="btn btn-secondary" disabled={count <= 0} type="button" onClick={() => setCount(count - 1)}>
						Decrement
					</button>
					<button
						className="btn btn-secondary"
						disabled={count >= 10}
						type="button"
						onClick={() => setCount(count + 1)}
					>
						Increment
					</button>
				</React.Fragment>
			)}
			<button className="btn btn-danger" type="button" onClick={() => setcontrolsVisible(!controlsVisible)}>
				Toggle controls
			</button>
		</div>
	)
}

export default CounterWithContext
