import React, { useState, useContext } from "react"
import Controls from "./Controls"
import Display from "./Display"
import ControlToggle from "./ControlToggle"
import { CounterContext } from "features/CounterContext"

export const CounterTreeWithContext: React.FC = () => {
	const { count, setCount } = useContext(CounterContext)
	const [ showControls, setshowControls ] = useState(true)

	const onIncrement = () => {
		setCount(count + 1)
	}
	const onDecrement = () => {
		setCount(count - 1)
	}
	const toggleControls = () => {
		setshowControls(!showControls)
	}

	return (
		<div>
			<Display count={count} />
			{showControls && (
				<Controls
					onIncrement={onIncrement}
					onDecrement={onDecrement}
					canIncrement={count >= 10}
					canDecrement={count <= 0}
				/>
			)}
			<ControlToggle onToggle={toggleControls} />
		</div>
	)
}

export default CounterTreeWithContext
