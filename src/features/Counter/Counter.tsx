import React, { useState, useContext } from "react"
import { CounterContext } from "features/CounterContext"

interface ICounterProps {
	/**
	 * The initial value of the counter.
	 * @default 0
	 */
	initialValue?: number
	alertCount?: (currentCount: number) => any
}

// export const Counter: React.FC<ICounterProps> = ({ initialValue = 0 }) => {
export const Counter: React.FC<ICounterProps> = (props) => {
	const { count, setCount } = useContext(CounterContext)
	// const [ count, setCount ] = useState(props.initialValue || 0)
	// const [ count, setCount ] = useState(initialValue)
	const [ showControls, setShowControls ] = useState(true)

	return (
		<div>
			<p>{count}</p>
			{showControls && (
				<React.Fragment>
					<button disabled={count <= 0} onClick={() => setCount(count - 1)}>
						Decrement
					</button>
					<button disabled={count >= 10} onClick={() => setCount(count + 1)}>
						Increment
					</button>
				</React.Fragment>
			)}
			<button
				onClick={() => {
					if (props.alertCount) {
						props.alertCount(count)
					}
					setShowControls(!showControls)
				}}
			>
				Toggle controls
			</button>
		</div>
	)
}

export default Counter
