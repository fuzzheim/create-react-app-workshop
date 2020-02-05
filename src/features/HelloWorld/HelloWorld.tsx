import React from "react"

export const HelloWorld: React.FC = () => {
	return (
		<button
			onClick={() => {
				alert("Hello World")
			}}
		>
			Click me!
		</button>
	)
}

export default HelloWorld

// const HelloWorld = () => {
// 	return (<div>Hello World</div>)
// }
// const HelloWorld = () => {
// 	return React.createElement("div", {children: "Hello World"})
// }
