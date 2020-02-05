import React from "react"
import { Switch, Route } from "react-router-dom"
import HelloWorld from "features/HelloWorld"
import Counter from "features/Counter"

export const Router: React.FC = () => {
	return (
		<Switch>
			<Route exact path="/">
				<HelloWorld />
			</Route>
			<Route exact path="/counter">
				<Counter />
			</Route>
		</Switch>
	)
}

export default Router
