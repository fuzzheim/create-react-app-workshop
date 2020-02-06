import React, { Suspense } from "react"
import { Switch, Route } from "react-router-dom"
import HelloWorld from "features/HelloWorld"
import Counter from "features/Counter"
import ItemList, { ITEM_LIST_DATA } from "features/ItemList"
import ConditionalChildren from "features/ConditionalChildren"
import EditableItemList from "features/EditableItemList"
import DisplayList from "features/DisplayList"
import CenteredContent from "features/CenteredContent"

const CounterTree = React.lazy(() => import("features/CounterTree"))

export const Router: React.FC = () => {
	return (
		<Suspense fallback={<div>Loading...</div>}>
			<Switch>
				<Route exact path="/">
					<HelloWorld />
				</Route>
				<Route exact path="/counter/:initialCount?">
					<Counter />
				</Route>
				<Route exact path="/tree">
					<CounterTree />
				</Route>
				<Route exact path="/list">
					<ItemList items={ITEM_LIST_DATA} />
				</Route>
				<Route exact path="/editable">
					<EditableItemList />
				</Route>
				<Route exact path="/displayList">
					<CenteredContent>
						<DisplayList />
					</CenteredContent>
				</Route>
				<Route exact path="/cond">
					<ConditionalChildren>
						<CounterTree />
					</ConditionalChildren>
				</Route>
			</Switch>
		</Suspense>
	)
}

export default Router
