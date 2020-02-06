import React, { useState, useContext } from "react"
import Display from "./Display"
import ControlToggle from "./ControlToggle"
import Controls from "./Controls"
import { CounterContext } from "features/CounterContext"

interface ICounterTreeProps {
	initialValue?: number
}

export const CounterTree: React.FC<ICounterTreeProps> = ({ initialValue = 0 }) => {
	const { count, setCount } = useContext(CounterContext)
	// const [ count, setCount ] = useState(initialValue)
	const [ showControls, setShowControls ] = useState(true)

	const increment = () => {
		setCount(count + 1)
	}
	const decrement = () => {
		setCount(count - 1)
	}
	const toggleControls = () => {
		setShowControls(!showControls)
	}

	return (
		<div>
			<Display count={count} />
			{showControls && (
				<Controls
					onIncrement={increment}
					onDecrement={decrement}
					incrementDisabled={count >= 10}
					decrementDisabled={count <= 0}
				/>
			)}
			<ControlToggle onClick={toggleControls} />
		</div>
	)
}

export default CounterTree
