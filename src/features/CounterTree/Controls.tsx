import React from "react"

interface IControlsProps {
	onIncrement: () => any
	onDecrement: () => any

	incrementDisabled?: boolean
	decrementDisabled?: boolean
}

export const Controls: React.FC<IControlsProps> = ({
	onIncrement,
	onDecrement,
	incrementDisabled,
	decrementDisabled
}) => {
	return (
		<React.Fragment>
			<button onClick={onDecrement} disabled={decrementDisabled}>
				Decrement
			</button>
			<button onClick={onIncrement} disabled={incrementDisabled}>
				Increment
			</button>
		</React.Fragment>
	)
}

export default Controls
