import React from "react"
import "App.css"

import HelloWorld from "features/HelloWorld"
import { HelloWorldHeading } from "features/HelloWorldHeading/HelloWorldHeading"
import { Incrementor } from "features/Incrementor/Incrementor"
import Counter from "features/Counter"
import CounterTree from "features/CounterTree"

const App = () => {
	return (
		<div className="App">
			<HelloWorld />
			<HelloWorldHeading />
			<Incrementor />
			<Counter
				initialValue={5}
				alertCount={(newCount) => {
					alert(newCount)
				}}
			/>
			<CounterTree initialValue={3} />
		</div>
	)
}

export default App
