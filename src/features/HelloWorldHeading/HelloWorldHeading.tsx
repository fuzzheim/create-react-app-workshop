import React, { useState } from "react"

export const HelloWorldHeading: React.FC = () => {
	const [ showHeading, setShowHeading ] = useState(false)

	// const stateData = useState(false)
	// const showHeading = stateData[0]
	// const setShowHeading = stateData[1]

	return (
		<React.Fragment>
			<h1>{showHeading && "Hello World"}</h1>
			<button
				onClick={() => {
					setShowHeading(true)
				}}
			>
				Click me
			</button>
		</React.Fragment>
	)
}

// class HelloWorldHeadingClass extends React.PureComponent {
// 	public state = {
// 		showHeading: false
// 	}

// 	public render() {
// 		return (
// 			<React.Fragment>
// 				<h1>{this.state.showHeading && "Hello World"}</h1>
// 				<button
// 					onClick={() => {
// 						this.setState({
// 							showHeading: true
// 						})
// 					}}
// 				>
// 					Click me
// 				</button>
// 			</React.Fragment>
// 		)
// 	}
// }
