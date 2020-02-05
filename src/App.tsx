import React from "react"
import "./App.css"

import { HelloWorld } from "./features/HelloWorld/HelloWorld"
import { HelloWorldHeading } from "./features/HelloWorldHeading/HelloWorldHeading"
import { Incrementor } from "./features/Incrementor/Incrementor"

const App = () => {
	return (
		<div className="App">
			<HelloWorld />
			<HelloWorldHeading />
			<Incrementor />
		</div>
	)
}

export default App
