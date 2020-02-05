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

// const HelloWorld = () => {
// 	return React.createElement("div", {children: "Hello World"})
// }
