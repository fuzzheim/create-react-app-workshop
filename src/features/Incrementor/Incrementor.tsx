import React from "react"

export const Incrementor: React.FC = () => {
	const [ count, setCount ] = React.useState(0)

	return (
		<div>
			<p>{count}</p>
			<button
				onClick={() => {
					setCount(count + 1)
				}}
			>
				Increment
			</button>
		</div>
	)
}
