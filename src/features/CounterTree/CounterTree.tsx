import React, { useState } from "react"
import Controls from "./Controls"
import Display from "./Display"
import ControlToggle from "./ControlToggle"

export const CounterTree: React.FC = () => {
	const [ count, setcount ] = useState(0)
	const [ showControls, setshowControls ] = useState(true)

	const onIncrement = () => {
		setcount(count + 1)
	}
	const onDecrement = () => {
		setcount(count - 1)
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

export default CounterTree
