import React from "react"
import { Switch, Route } from "react-router-dom"
import HelloWorld from "features/HelloWorld"
import Counter from "features/Counter"
import ItemList, { ITEM_LIST_DATA } from "features/ItemList"

export const Router: React.FC = () => {
	return (
		<Switch>
			<Route exact path="/">
				<HelloWorld />
			</Route>
			<Route exact path="/counter">
				<Counter />
			</Route>
			<Route exact path="/list">
				<ItemList items={ITEM_LIST_DATA} />
			</Route>
		</Switch>
	)
}

export default Router
